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
              Senior advisory and interim leadership for organisations
              operating security-critical and business-critical technology
              environments.
            </p>

            <p style={styles.heroSubtext}>
              Helping organisations strengthen cyber security, deliver complex
              security programmes, work effectively with authorities and
              regulators, and maintain resilient, stable IT operations.
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
          Security leadership that protects operations.
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

          <a href="mailto:your@email.com" style={styles.primaryButton}>
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
    minHeight: "76px",
    padding: "0 6%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "sticky",
    top: 0,
    zIndex: 50,
    backgroundColor: "rgba(5, 17, 29, 0.94)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(104, 167, 220, 0.14)",
  },

  navBrand: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: 700,
    letterSpacing: "4px",
    fontSize: "18px",
  },

  navLogo: {
    width: "42px",
    height: "42px",
    objectFit: "contain",
  },

  navLinks: {
    display: "flex",
    gap: "28px",
    alignItems: "center",
  },

  navLink: {
    color: "#b7c7d8",
    textDecoration: "none",
    fontSize: "14px",
  },

  navButton: {
    padding: "11px 18px",
    borderRadius: "7px",
    backgroundColor: "#258be8",
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: 600,
  },

  hero: {
    minHeight: "720px",
    position: "relative",
    display: "flex",
    alignItems: "center",

    /*
      Temporary stock image.

      Replace this later with:
      url("/operiant/images/operiant-hero.webp")
    */
    backgroundImage:
      'url("https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=85")',

    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  heroOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(90deg, rgba(4,16,29,0.98) 0%, rgba(4,16,29,0.94) 43%, rgba(4,16,29,0.65) 68%, rgba(4,16,29,0.28) 100%)",
  },

  heroInner: {
    position: "relative",
    zIndex: 2,
    width: "88%",
    maxWidth: "1280px",
    margin: "0 auto",
  },

  heroContent: {
    maxWidth: "760px",
  },

  brandLockup: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginBottom: "38px",
  },

  logo: {
    width: "108px",
    height: "108px",
    objectFit: "contain",
    filter: "drop-shadow(0 10px 30px rgba(36,145,235,0.16))",
  },

  brandName: {
    fontSize: "44px",
    fontWeight: 700,
    color: "#ffffff",
    letterSpacing: "8px",
  },

  eyebrow: {
    color: "#58aef5",
    fontSize: "13px",
    letterSpacing: "2.6px",
    fontWeight: 700,
    marginBottom: "18px",
  },

  heroTitle: {
    margin: 0,
    fontSize: "clamp(44px, 5.3vw, 76px)",
    lineHeight: 1.04,
    letterSpacing: "-2.2px",
    color: "#ffffff",
    fontWeight: 700,
  },

  accent: {
    color: "#48a7f5",
  },

  heroText: {
    maxWidth: "670px",
    color: "#d5e1eb",
    fontSize: "20px",
    lineHeight: 1.65,
    marginTop: "28px",
    marginBottom: "10px",
  },

  heroSubtext: {
    maxWidth: "690px",
    color: "#aebfd0",
    fontSize: "16px",
    lineHeight: 1.7,
    marginBottom: 0,
  },

  heroActions: {
    display: "flex",
    gap: "16px",
    marginTop: "32px",
    flexWrap: "wrap",
  },

  primaryButton: {
    display: "inline-block",
    padding: "14px 24px",
    backgroundColor: "#258be8",
    color: "#ffffff",
    textDecoration: "none",
    borderRadius: "7px",
    fontWeight: 600,
    boxShadow: "0 8px 24px rgba(21,111,194,0.24)",
  },

  secondaryButton: {
    display: "inline-block",
    padding: "13px 23px",
    color: "#c8d8e7",
    border: "1px solid rgba(157,190,221,0.28)",
    textDecoration: "none",
    borderRadius: "7px",
  },

  introSection: {
    maxWidth: "1120px",
    margin: "0 auto",
    padding: "110px 6% 42px",
  },

  sectionLabel: {
    color: "#4fa8f4",
    fontWeight: 700,
    letterSpacing: "2.5px",
    fontSize: "12px",
    marginBottom: "18px",
  },

  largeHeading: {
    maxWidth: "780px",
    margin: "0 0 24px",
    color: "#ffffff",
    fontSize: "clamp(34px, 4vw, 50px)",
    lineHeight: 1.1,
    letterSpacing: "-1.2px",
  },

  introText: {
    maxWidth: "840px",
    margin: 0,
    color: "#aebfd0",
    fontSize: "18px",
    lineHeight: 1.75,
  },

  section: {
    maxWidth: "1120px",
    margin: "0 auto",
    padding: "30px 6% 40px",
  },

  serviceGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
  },

  card: {
    minHeight: "280px",
    padding: "34px",
    borderRadius: "16px",
    background:
      "linear-gradient(180deg, rgba(13,38,62,0.95), rgba(8,28,47,0.98))",
    border: "1px solid rgba(88,164,228,0.17)",
    boxShadow: "0 18px 45px rgba(0,0,0,0.14)",
  },

  iconBox: {
    width: "48px",
    height: "48px",
    border: "1px solid rgba(68,166,245,0.32)",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#55abf4",
    fontWeight: 700,
    marginBottom: "28px",
  },

  cardTitle: {
    color: "#ffffff",
    fontSize: "21px",
    lineHeight: 1.3,
    marginBottom: "16px",
  },

  cardText: {
    color: "#aebfd0",
    fontSize: "15px",
    lineHeight: 1.7,
    margin: 0,
  },

  capabilitiesSection: {
    maxWidth: "1120px",
    margin: "0 auto",
    padding: "20px 6% 110px",
  },

  capabilityGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: 0,
    borderTop: "1px solid rgba(100,168,224,0.20)",
  },

  capability: {
    padding: "22px 18px 14px 0",
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
    padding: "100px 6%",
    backgroundColor: "#091c2f",
    borderTop: "1px solid rgba(103,171,225,0.12)",
    borderBottom: "1px solid rgba(103,171,225,0.12)",
  },

  experienceInner: {
    maxWidth: "1000px",
    margin: "0 auto",
  },

  experienceHeading: {
    maxWidth: "800px",
    color: "#ffffff",
    fontSize: "clamp(34px, 4vw, 50px)",
    lineHeight: 1.12,
    letterSpacing: "-1.1px",
    margin: "0 0 24px",
  },

  experienceText: {
    maxWidth: "820px",
    color: "#afc0d0",
    fontSize: "17px",
    lineHeight: 1.75,
  },

  contactSection: {
    padding: "110px 6%",
    backgroundColor: "#061321",
  },

  contactInner: {
    maxWidth: "850px",
    margin: "0 auto",
    textAlign: "center",
  },

  contactHeading: {
    color: "#ffffff",
    fontSize: "clamp(36px, 4vw, 52px)",
    margin: "0 0 18px",
  },

  contactText: {
    maxWidth: "650px",
    margin: "0 auto 30px",
    color: "#aebfd0",
    fontSize: "17px",
    lineHeight: 1.7,
  },

  footer: {
    padding: "30px 6%",
    display: "flex",
    justifyContent: "space-between",
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