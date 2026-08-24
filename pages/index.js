
export default function Home() {
  return (
    <main className="page">
      {/* NAVIGATION */}
      <nav className="nav">
        <a href="#top" className="navBrand">
          <img
            src="Operiant_logo_transparent_Logo_Only.png"
            alt="Operiant"
            className="navLogo"
          />
          <span>OPERIANT</span>
        </a>

        <div className="navLinks">
          <a href="#services" className="navLink">
            Services
          </a>

          <a href="#experience" className="navLink">
            Experience
          </a>

          <a href="#contact" className="navButton">
            Contact
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="top" className="hero">
        <div className="heroOverlay" />

        <div className="heroInner">
          <div className="heroContent">
            <div className="brandLockup">
              <img
                src="Operiant_logo_transparent_Logo_Only.png"
                alt="Operiant"
                className="heroLogo"
              />
            </div>

            <p className="eyebrow">
              SENIOR IT SECURITY &amp; TECHNOLOGY LEADERSHIP
            </p>

            <h1 className="heroTitle">
              IT Security Leadership.
              <br />
              Critical Infrastructure.
              <br />
              <span className="accent">Stable Operations.</span>
            </h1>

            <p className="heroText">
              Senior advisory and interim leadership for security-critical and
              business-critical technology environments.
            </p>

            <p className="heroSubtext">
              Helping organisations strengthen cyber security, deliver complex
              security programmes, work effectively with authorities and
              regulators, and maintain resilient, stable operations.
            </p>

            <div className="heroActions">
              <a href="#contact" className="primaryButton">
                Discuss an engagement
              </a>

              <a href="#services" className="secondaryButton">
                Explore capabilities
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="introSection">
        <p className="sectionLabel">FOCUSED LEADERSHIP</p>

        <h2 className="largeHeading">
          Security leadership. Operational resilience.
        </h2>

        <p className="introText">
          Security and operational stability cannot be managed in isolation.
          Operiant focuses on environments where cyber security, infrastructure,
          resilience, regulatory requirements and dependable day-to-day
          operations must work together.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <div className="serviceGrid">
          <article className="card">
            <div className="iconBox">01</div>

            <h3 className="cardTitle">
              Security Leadership &amp; Operations
            </h3>

            <p className="cardText">
              Executive-level leadership across cyber security, operational
              risk, governance, incident preparedness and resilient IT
              operations.
            </p>
          </article>

          <article className="card">
            <div className="iconBox">02</div>

            <h3 className="cardTitle">
              Critical Infrastructure &amp; Security Programmes
            </h3>

            <p className="cardText">
              Leadership of complex security initiatives across critical
              infrastructure and business-critical environments — from
              strategy and architecture through implementation and operational
              adoption.
            </p>
          </article>

          <article className="card">
            <div className="iconBox">03</div>

            <h3 className="cardTitle">
              Authorities, Compliance &amp; Strategic Partnerships
            </h3>

            <p className="cardText">
              Supporting effective collaboration with public authorities,
              regulators, law enforcement, suppliers and strategic partners in
              security-sensitive environments.
            </p>
          </article>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="capabilitiesSection">
        <div className="capabilityGrid">
          <div className="capability">
            <span className="capabilityTitle">Cyber Security</span>
            <span className="capabilityText">
              Governance, architecture &amp; risk
            </span>
          </div>

          <div className="capability">
            <span className="capabilityTitle">Security Programmes</span>
            <span className="capabilityText">
              Leadership, delivery &amp; assurance
            </span>
          </div>

          <div className="capability">
            <span className="capabilityTitle">Critical Infrastructure</span>
            <span className="capabilityText">
              Security, resilience &amp; continuity
            </span>
          </div>

          <div className="capability">
            <span className="capabilityTitle">
              Authorities &amp; Compliance
            </span>

            <span className="capabilityText">
              Regulatory &amp; stakeholder collaboration
            </span>
          </div>

          <div className="capability">
            <span className="capabilityTitle">Operational Resilience</span>
            <span className="capabilityText">
              Stability, continuity &amp; risk reduction
            </span>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="experienceSection">
        <div className="experienceInner">
          <p className="sectionLabel">SENIOR LEADERSHIP PERSPECTIVE</p>

          <h2 className="experienceHeading">
            Strengthening security without losing operational control.
          </h2>

          <p className="experienceText">
            Operiant supports organisations that need more than isolated
            technical advice: senior ownership of security priorities,
            disciplined execution across multiple stakeholders, and technology
            operations that remain stable while transformation is taking place.
          </p>

          <p className="experienceText">
            Engagements can include advisory assignments, interim leadership,
            security programmes, operational resilience initiatives and
            strategic technology transformation.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contactSection">
        <div className="contactInner">
          <p className="sectionLabel">START A CONVERSATION</p>

          <h2 className="contactHeading">
            Discuss an engagement.
          </h2>

          <p className="contactText">
            For senior IT security leadership, critical infrastructure,
            operational resilience or security programme requirements.
          </p>

          <a
            href="mailto:contact@operiant.dk"
            className="primaryButton"
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <span>
          © {new Date().getFullYear()} Operiant Group
        </span>

        <span className="footerTagline">
          Security · Resilience · Stable Operations
        </span>
      </footer>
    </main>
  );
}