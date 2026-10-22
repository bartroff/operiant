
export default function Home() {
  return (
    <main className="page">
      {/* NAVIGATION */}
      <nav className="nav">
        <a href="#top" className="navBrand">
          <img
            src="/Operiant_logo_transparent_Logo_Only.png"
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
                src="/Operiant_logo_transparent_Logo_Only.png"
                alt="Operiant"
                className="heroLogo"
              />
            </div>

            <p className="eyebrow">
              TECHNOLOGY LEADERSHIP &amp; TRANSFORMATION
            </p>

            <h1 className="heroTitle">
              Turning Technology Complexity
              <br />
              <span className="accent">into Business Value.</span>
            </h1>

            <p className="heroText">
              Senior technology advisory, enterprise architecture, cybersecurity
              and operational transformation — combining strategic leadership
              with hands-on execution.
            </p>

            <p className="heroSubtext">
              Helping organisations align technology with business priorities,
              simplify complex environments and turn transformation into
              measurable operational outcomes.
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
        <p className="sectionLabel">STRATEGY MEETS EXECUTION</p>

        <h2 className="largeHeading">
          From technology strategy to lasting operational impact.
        </h2>

        <p className="introText">
          Operiant bridges enterprise architecture, technology leadership and
          operational delivery. Whether the challenge is modernising platforms,
          improving service performance, strengthening cyber resilience or
          integrating technology after change, the focus is on practical
          solutions that deliver business value.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <div className="serviceGrid">
          <article className="card">
            <div className="iconBox">01</div>
            <h3 className="cardTitle">Technology Leadership &amp; Advisory</h3>
            <p className="cardText">
              Strategic technology advisory and interim leadership that
              connect business priorities, governance, investment decisions
              and effective execution across complex organisations.
            </p>
          </article>

          <article className="card">
            <div className="iconBox">02</div>
            <h3 className="cardTitle">Enterprise Architecture &amp; Transformation</h3>
            <p className="cardText">
              Enterprise and solution architecture, technology roadmaps,
              platform modernisation and transformation programmes — with
              a focus on simplification, alignment and measurable outcomes.
            </p>
          </article>

          <article className="card">
            <div className="iconBox">03</div>
            <h3 className="cardTitle">Cybersecurity &amp; Operational Resilience</h3>
            <p className="cardText">
              Security governance, risk and compliance, critical
              infrastructure, security programmes and resilient operations
              for business-critical technology environments.
            </p>
          </article>

          <article className="card">
            <div className="iconBox">04</div>
            <h3 className="cardTitle">Operational Excellence &amp; Automation</h3>
            <p className="cardText">
              Improve IT service delivery through operating models,
              process optimisation, ServiceNow, observability and automation
              that reduce complexity and strengthen performance.
            </p>
          </article>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="capabilitiesSection">
        <div className="capabilityGrid">
          <div className="capability">
            <span className="capabilityTitle">Enterprise Architecture</span>
            <span className="capabilityText">Strategy, governance &amp; solution design</span>
          </div>
          <div className="capability">
            <span className="capabilityTitle">Transformation &amp; M&amp;A</span>
            <span className="capabilityText">Integration, modernisation &amp; execution</span>
          </div>
          <div className="capability">
            <span className="capabilityTitle">Cloud &amp; Infrastructure</span>
            <span className="capabilityText">Platforms, networks &amp; optimisation</span>
          </div>
          <div className="capability">
            <span className="capabilityTitle">Cybersecurity &amp; Compliance</span>
            <span className="capabilityText">Critical infrastructure, NIS2 &amp; DORA</span>
          </div>
          <div className="capability">
            <span className="capabilityTitle">ServiceNow &amp; Automation</span>
            <span className="capabilityText">ITSM, workflows &amp; operational insight</span>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="experienceSection">
        <div className="experienceInner">
          <p className="sectionLabel">EXPERIENCE THAT DELIVERS</p>

          <h2 className="experienceHeading">
            Experience That Connects Strategy with Execution.
          </h2>

          <p className="experienceText">
            Built on more than 25 years of international technology leadership
            across enterprise IT, telecommunications and mission-critical
            operations. Experience spans global teams, complex infrastructure,
            cybersecurity, enterprise platforms and large-scale transformation
            — with a consistent focus on business outcomes.
          </p>

          <p className="experienceText">
            Operiant supports advisory and interim leadership engagements,
            enterprise architecture initiatives, transformation and M&amp;A
            integration, cybersecurity programmes, and operational excellence
            across technology-intensive organisations.
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
            For technology leadership, enterprise architecture, transformation,
            cybersecurity or operational improvement — let&apos;s explore
            how Operiant can help.
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
          Technology Leadership · Transformation · Cybersecurity · Operational Excellence
        </span>
      </footer>
    </main>
  );
}