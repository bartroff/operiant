export default function Home() {
  return (
    <main style={styles.container}>
      
      {/* HERO SECTION */}
      <section style={styles.hero}>
        <img 
          src="/logo.png" 
          alt="Operiant Logo" 
          style={styles.logo}
        />
        <h1 style={styles.title}>Operiant</h1>
        <p style={styles.tagline}>
          Operational Excellence. Engineered.
        </p>
      </section>

      {/* SERVICES */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>What We Do</h2>
        
        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>IT Operations Leadership</h3>
            <p>
              Driving stability and performance across complex, 
              business-critical IT environments.
            </p>
          </div>

          <div style={styles.card}>
            <h3>Transformation & Execution</h3>
            <p>
              Leading large-scale initiatives from strategy 
              to execution with measurable outcomes.
            </p>
          </div>

          <div style={styles.card}>
            <h3>Network & Infrastructure</h3>
            <p>
              Deep expertise in telecom, global infrastructure 
              and 24/7 operational environments.
            </p>
          </div>

          <div style={styles.card}>
            <h3>ServiceNow & Process Optimization</h3>
            <p>
              Optimizing workflows, integrations and visibility 
              to deliver significant cost savings and efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* FUTURE VISION */}
      <section style={styles.sectionDark}>
        <h2 style={styles.sectionTitleLight}>Looking Ahead</h2>
        <p style={styles.textLight}>
          Operiant is building towards the development of software solutions 
          focused on operational control, visibility and automation.
        </p>
      </section>

      {/* CONTACT */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Get in Touch</h2>
        <p style={styles.text}>
          Available for consulting, advisory and interim leadership roles.
        </p>
        <a href="mailto:your@email.com" style={styles.button}>
          Contact
        </a>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} Operiant Group</p>
      </footer>
    </main>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    margin: 0,
    padding: 0,
    color: "#0a2540",
  },
  hero: {
    textAlign: "center",
    padding: "80px 20px",
    background: "linear-gradient(180deg, #ffffff 0%, #f5f7fa 100%)",
  },
  logo: {
    width: "160px", // BIGGER for visibility
    marginBottom: "20px",
  },
  title: {
    fontSize: "42px",
    margin: "0",
    letterSpacing: "2px",
  },
  tagline: {
    fontSize: "18px",
    color: "#4a6fa5",
    marginTop: "10px",
  },
  section: {
    padding: "60px 20px",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  sectionDark: {
    padding: "60px 20px",
    backgroundColor: "#0a2540",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "28px",
    marginBottom: "30px",
    textAlign: "center",
  },
  sectionTitleLight: {
    fontSize: "28px",
    marginBottom: "20px",
    color: "#ffffff",
  },
  text: {
    textAlign: "center",
    fontSize: "16px",
  },
  textLight: {
    textAlign: "center",
    fontSize: "16px",
    color: "#ffffff",
    maxWidth: "700px",
    margin: "0 auto",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  card: {
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  },
  button: {
    display: "inline-block",
    marginTop: "20px",
    padding: "12px 24px",
    backgroundColor: "#0a2540",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "6px",
  },
  footer: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#f5f7fa",
    marginTop: "40px",
  },
};