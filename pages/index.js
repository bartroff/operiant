export default function Home() {
  return (
    <main style={styles.page}>
      {/* NAVIGATION */}
      <nav style={styles.nav}>
        <a href="#top" style={styles.navBrand}>
          <img
            src="/operiant/logo.png"
            alt="Operiant"
            style={styles.navLogo}
          />
          <span>OPERIANT</span>
        </a>

        <div style={styles.navLinks}>
          <a href="#services" style={styles.navLink}>
            Services
          </a>
          <a href="#experience" style={styles.navLink}>
            Experience
          </a>
          <a href="#contact" style={styles.navButton}>
            Discuss an engagement
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="top" style={styles.hero}>
        <div style={styles.heroOverlay} />

        <div style={styles.heroInner}>
          <div style={styles.heroContent}>
            <div style={styles.brandLockup}>
              <img
                src="/operiant/logo.png"
                alt="Operiant Logo"
                style={styles.logo}
              />

              <span style={styles.brandName}>OPERIANT</span>
            </div>

            <p style={styles.eyebrow}>
              SENIOR IT SECURITY &amp; TECHNOLOGY LEADERSHIP
            </p>

            <h1 style={styles.heroTitle}>
              IT Security Leadership.
              <br />
              Critical Infrastructure.
              <br />
              <span style={styles.accent}>Stable Operations.</span>
            </h1>

            <p style={styles.heroText}>
              Senior advisory and interim leadership for security-critical 
			  and business-critical technology environments.
            </p>

            <p style={styles.heroSubtext}>
              Helping organisations strengthen cyber security, deliver complex 
			  security programmes, work effectively with authorities and 
			  regulators, and maintain resilient, stable operations.
            </p>

            <div style={styles.heroActions}>
              <a href="#contact" style={styles.primaryButton}>
                Discuss an engagement
              </a>

              <a href="#services" style={styles.secondaryButton}>
                Explore capabilities
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section style={styles.introSection}>
        <p style={styles.sectionLabel}>FOCUSED LEADERSHIP</p>

        <h2 style={styles.largeHeading}>
          Security leadership. Operational resilience.
        </h2>

        <p style={styles.introText}>
          Security and operational stability cannot be managed in isolation.
          Operiant focuses on environments where cyber security, infrastructure,
          resilience, regulatory requirements and dependable day-to-day
          operations must work together.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" style={styles.section}>
        <div style={styles.serviceGrid}>
          <article style={styles.card}>
            <div style={styles.iconBox}>01</div>

            <h3 style={styles.cardTitle}>
              Security Leadership &amp; Operations
            </h3>

            <p style={styles.cardText}>
              Executive-level leadership across cyber security, operational
              risk, governance, incident preparedness and resilient IT
              operations.
            </p>
          </article>

          <article style={styles.card}>
            <div style={styles.iconBox}>02</div>

            <h3 style={styles.cardTitle}>
              Critical Infrastructure &amp; Security Programmes
            </h3>

            <p style={styles.cardText}>
              Leadership of complex security initiatives across critical
              infrastructure and business-critical environments — from
              strategy and architecture through implementation and operational
              adoption.
            </p>
          </article>

          <article style={styles.card}>
            <div style={styles.iconBox}>03</div>

            <h3 style={styles.cardTitle}>
              Authorities, Compliance &amp; Strategic Partnerships
            </h3>

            <p style={styles.cardText}>
              Supporting effective collaboration with public authorities,
              regulators, law enforcement, suppliers and strategic partners in
              security-sensitive environments.
            </p>
          </article>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section style={styles.capabilitiesSection}>
        <div style={styles.capabilityGrid}>
          <div style={styles.capability}>
            <span style={styles.capabilityTitle}>Cyber Security</span>
            <span style={styles.capabilityText}>
              Governance, architecture &amp; risk
            </span>
          </div>

          <div style={styles.capability}>
            <span style={styles.capabilityTitle}>Security Programmes</span>
            <span style={styles.capabilityText}>
              Leadership, delivery &amp; assurance
            </span>
          </div>

          <div style={styles.capability}>
            <span style={styles.capabilityTitle}>Critical Infrastructure</span>
            <span style={styles.capabilityText}>
              Security, resilience &amp; continuity
            </span>
          </div>

          <div style={styles.capability}>
            <span style={styles.capabilityTitle}>
              Authorities &amp; Compliance
            </span>
            <span style={styles.capabilityText}>
              Regulatory &amp; stakeholder collaboration
            </span>
          </div>

          <div style={styles.capability}>
            <span style={styles.capabilityTitle}>Operational Resilience</span>
            <span style={styles.capabilityText}>
              Stability, continuity &amp; risk reduction
            </span>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" style={styles.experienceSection}>
        <div style={styles.experienceInner}>
          <p style={styles.sectionLabel}>SENIOR LEADERSHIP PERSPECTIVE</p>

          <h2 style={styles.experienceHeading}>
            Strengthening security without losing operational control.
          </h2>

          <p style={styles.experienceText}>
            Operiant supports organisations that need more than isolated
            technical advice: senior ownership of security priorities,
            disciplined execution across multiple stakeholders, and technology
            operations that remain stable while transformation is taking place.
          </p>

          <p style={styles.experienceText}>
            Engagements can include advisory assignments, interim leadership,
            security programmes, operational resilience initiatives and
            strategic technology transformation.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={styles.contactSection}>
        <div style={styles.contactInner}>
          <p style={styles.sectionLabel}>START A CONVERSATION</p>

          <h2 style={styles.contactHeading}>Discuss an engagement.</h2>

          <p style={styles.contactText}>
            For senior IT security leadership, critical infrastructure,
            operational resilience or security programme requirements.
          </p>

          <a href="mailto:contact@operiant.dk" style={styles.primaryButton}>
            Get in touch
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <span>© {new Date().getFullYear()} Operiant Group</span>

        <span style={styles.footerTagline}>
          Security · Resilience · Stable Operations
        </span>
      </footer>
    </main>
  );
}

const styles = {
  page: {
    margin: 0,
    padding: 0,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Inter, Helvetica, Arial, sans-serif',
    backgroundColor: "#061321",
    color: "#eaf2f8",
  },

  nav: {
    minHeight: "72px",
    padding: "0 5.5%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "sticky",
    top: 0,
    zIndex: 50,
    backgroundColor: "rgba(5, 17, 29, 0.95)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(104, 167, 220, 0.12)",
  },

  navBrand: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: 700,
    letterSpacing: "3.2px",
    fontSize: "18px",
  },

  navLogo: {
    width: "46px",
    height: "46px",
    objectFit: "contain",
  },

  navLinks: {
    display: "flex",
    gap: "26px",
    alignItems: "center",
  },

  navLink: {
    color: "#b7c7d8",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: 500,
  },

  navButton: {
    padding: "10px 18px",
    borderRadius: "6px",
    backgroundColor: "#258be8",
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: 600,
    boxShadow: "0 6px 18px rgba(37,139,232,0.18)",
  },

  hero: {
    minHeight: "620px",
    position: "relative",
    display: "flex",
    alignItems: "center",

    backgroundImage:
      'url("/operiant/images/operiant-hero.png")',

    backgroundSize: "cover",
    backgroundPosition: "center center",
    overflow: "hidden",
  },

  heroOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(90deg, rgba(4,16,29,0.88) 0%, rgba(4,16,29,0.74) 34%, rgba(4,16,29,0.38) 58%, rgba(4,16,29,0.08) 100%)",
  },

  heroInner: {
    position: "relative",
    zIndex: 2,
    width: "89%",
    maxWidth: "1180px",
    margin: "0 auto",
    paddingTop: "18px",
    paddingBottom: "18px",
  },

  heroContent: {
    maxWidth: "690px",
  },

  brandLockup: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
    marginBottom: "26px",
  },

  logo: {
    width: "92px",
    height: "92px",
    objectFit: "contain",
    filter: "drop-shadow(0 8px 24px rgba(36,145,235,0.12))",
  },

  brandName: {
    fontSize: "36px",
    fontWeight: 700,
    color: "#ffffff",
    letterSpacing: "6px",
  },

  eyebrow: {
    color: "#58aef5",
    fontSize: "12px",
    letterSpacing: "2.5px",
    fontWeight: 700,
    marginBottom: "18px",
  },

  heroTitle: {
    margin: 0,
    fontSize: "clamp(42px, 4.4vw, 66px)",
    lineHeight: 1.02,
    letterSpacing: "-1.7px",
    color: "#ffffff",
    fontWeight: 700,
    maxWidth: "760px",
  },

  accent: {
    color: "#48a7f5",
  },

  heroText: {
    maxWidth: "700px",
    color: "#d5e1eb",
    fontSize: "18px",
    lineHeight: 1.6,
    marginTop: "26px",
    marginBottom: "10px",
  },

  heroSubtext: {
    maxWidth: "720px",
    color: "#aebfd0",
    fontSize: "15px",
    lineHeight: 1.65,
    marginBottom: 0,
  },

  heroActions: {
    display: "flex",
    gap: "14px",
    marginTop: "28px",
    flexWrap: "wrap",
  },

  primaryButton: {
    display: "inline-block",
    padding: "13px 22px",
    backgroundColor: "#258be8",
    color: "#ffffff",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: 600,
    fontSize: "15px",
    boxShadow: "0 8px 22px rgba(21,111,194,0.22)",
  },

  secondaryButton: {
    display: "inline-block",
    padding: "12px 22px",
    color: "#c8d8e7",
    border: "1px solid rgba(157,190,221,0.28)",
    textDecoration: "none",
    borderRadius: "6px",
    fontSize: "15px",
    backgroundColor: "rgba(5,19,33,0.18)",
  },

  introSection: {
    maxWidth: "1180px",
    margin: "0 auto",
    padding: "62px 6% 24px",
  },

  sectionLabel: {
    color: "#4fa8f4",
    fontWeight: 700,
    letterSpacing: "2.4px",
    fontSize: "12px",
    marginBottom: "16px",
  },

  largeHeading: {
    maxWidth: "760px",
    margin: "0 0 20px",
    color: "#ffffff",
    fontSize: "clamp(32px, 3.5vw, 46px)",
    lineHeight: 1.08,
    letterSpacing: "-1px",
  },

  introText: {
    maxWidth: "860px",
    margin: 0,
    color: "#aebfd0",
    fontSize: "17px",
    lineHeight: 1.72,
  },

  section: {
    maxWidth: "1180px",
    margin: "0 auto",
    padding: "20px 6% 38px",
  },

  serviceGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "18px",
  },

  card: {
    minHeight: "250px",
    padding: "30px",
    borderRadius: "14px",
    background:
      "linear-gradient(180deg, rgba(13,38,62,0.94), rgba(8,28,47,0.98))",
    border: "1px solid rgba(88,164,228,0.16)",
    boxShadow: "0 16px 38px rgba(0,0,0,0.13)",
  },

  iconBox: {
    width: "46px",
    height: "46px",
    border: "1px solid rgba(68,166,245,0.30)",
    borderRadius: "9px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#55abf4",
    fontWeight: 700,
    fontSize: "13px",
    marginBottom: "24px",
  },

  cardTitle: {
    color: "#ffffff",
    fontSize: "20px",
    lineHeight: 1.3,
    marginBottom: "14px",
  },

  cardText: {
    color: "#aebfd0",
    fontSize: "15px",
    lineHeight: 1.68,
    margin: 0,
  },

  capabilitiesSection: {
    maxWidth: "1180px",
    margin: "0 auto",
    padding: "12px 6% 70px",
  },

  capabilityGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(175px, 1fr))",
    gap: 0,
    borderTop: "1px solid rgba(100,168,224,0.20)",
  },

  capability: {
    padding: "20px 18px 14px 0",
  },

  capabilityTitle: {
    display: "block",
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: 650,
    marginBottom: "6px",
  },

  capabilityText: {
    color: "#8298ac",
    fontSize: "13px",
    lineHeight: 1.45,
  },

  experienceSection: {
    padding: "86px 6%",
    backgroundColor: "#091c2f",
    borderTop: "1px solid rgba(103,171,225,0.12)",
    borderBottom: "1px solid rgba(103,171,225,0.12)",
  },

  experienceInner: {
    maxWidth: "1040px",
    margin: "0 auto",
  },

  experienceHeading: {
    maxWidth: "780px",
    color: "#ffffff",
    fontSize: "clamp(32px, 3.7vw, 48px)",
    lineHeight: 1.1,
    letterSpacing: "-1px",
    margin: "0 0 22px",
  },

  experienceText: {
    maxWidth: "820px",
    color: "#afc0d0",
    fontSize: "17px",
    lineHeight: 1.72,
    marginBottom: "16px",
  },

  contactSection: {
    padding: "94px 6%",
    backgroundColor: "#061321",
  },

  contactInner: {
    maxWidth: "820px",
    margin: "0 auto",
    textAlign: "center",
  },

  contactHeading: {
    color: "#ffffff",
    fontSize: "clamp(34px, 4vw, 50px)",
    margin: "0 0 16px",
    letterSpacing: "-1px",
  },

  contactText: {
    maxWidth: "650px",
    margin: "0 auto 28px",
    color: "#aebfd0",
    fontSize: "17px",
    lineHeight: 1.68,
  },

  footer: {
    padding: "28px 6%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap",
    color: "#758ba0",
    backgroundColor: "#04101c",
    borderTop: "1px solid rgba(99,164,216,0.10)",
    fontSize: "13px",
  },

  footerTagline: {
    color: "#71889e",
  },
};