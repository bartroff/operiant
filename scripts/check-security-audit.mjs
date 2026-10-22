// Audit every npm dependency and narrowly accept one unpatched, development-only advisory.
// Review/renew this exception explicitly before 2026-11-22; never suppress new advisories.
import { readFileSync } from "node:fs";
import { spawnSync } from "node:child_process";

const exception = {
  advisory: "GHSA-vfj7-8cjw-p6xm",
  rootPackage: "braces",
  affectedChain: new Set([
    "braces",
    "micromatch",
    "fast-glob",
    "@next/eslint-plugin-next",
    "eslint-config-next",
  ]),
  expires: "2026-11-22",
};

const audit = spawnSync("npm", ["audit", "--json", "--audit-level=high"], {
  encoding: "utf8",
  maxBuffer: 16 * 1024 * 1024,
});

if (audit.error || ![0, 1].includes(audit.status)) {
  console.error("npm audit did not complete normally.", audit.error ?? audit.stderr);
  process.exit(1);
}

let report;
try {
  report = JSON.parse(audit.stdout);
} catch {
  console.error("Could not parse npm audit JSON. Audit cannot be bypassed.");
  process.exit(1);
}
if (report.error || !report.vulnerabilities) {
  console.error("npm audit returned an error or an unexpected report.", report.error);
  process.exit(1);
}

const lock = JSON.parse(readFileSync("package-lock.json", "utf8"));
const findings = Object.entries(report.vulnerabilities).filter(
  ([, vulnerability]) => ["high", "critical"].includes(vulnerability.severity),
);
const hasException = findings.some(([name]) => name === exception.rootPackage);
const expired = new Date().toISOString().slice(0, 10) > exception.expires;

function allowed(name, vulnerability) {
  if (expired || !exception.affectedChain.has(name) || vulnerability.isDirect) return false;
  if (!Array.isArray(vulnerability.nodes) || vulnerability.nodes.length === 0) return false;
  if (!vulnerability.nodes.every((node) => lock.packages?.[node]?.dev === true)) return false;
  if (!Array.isArray(vulnerability.via) || vulnerability.via.length === 0) return false;

  return vulnerability.via.every((via) => {
    if (typeof via === "string") {
      return exception.affectedChain.has(via) && via !== name &&
        report.vulnerabilities[via] !== undefined;
    }
    return name === exception.rootPackage &&
      via.name === exception.rootPackage &&
      typeof via.url === "string" &&
      via.url.toLowerCase().includes(exception.advisory.toLowerCase());
  });
}

const unexpected = findings.filter(([name, vulnerability]) => !allowed(name, vulnerability));
if (unexpected.length > 0) {
  console.error("Unapproved HIGH/CRITICAL npm audit findings:");
  for (const [name, finding] of unexpected) {
    console.error(`- ${name}: ${finding.severity}`);
  }
  if (expired && hasException) {
    console.error(`Exception expired on ${exception.expires}; review before renewal.`);
  }
  process.exit(1);
}

if (findings.length) {
  console.warn(
    `Accepted ${findings.length} dev-only transitive findings from ${exception.advisory}. ` +
    `No upstream fix is available; exception expires ${exception.expires}.`,
  );
} else {
  console.log("No HIGH or CRITICAL npm audit findings.");
}
