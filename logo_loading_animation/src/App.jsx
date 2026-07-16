import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "./Loader.jsx";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div style={styles.app}>
      {/* The revealed website sits underneath the loader */}
      <Site show={!loading} />

      <AnimatePresence>
        {loading && (
          <Loader
            key="loader"
            onComplete={() => {
              // small hold after the last piece lands, then fade to site
              setTimeout(() => setLoading(false), 400);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function Site({ show }) {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };
  const item = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <motion.main
      style={styles.site}
      variants={container}
      initial="hidden"
      animate={show ? "visible" : "hidden"}
    >
      <nav style={styles.nav}>
        <motion.div style={styles.brand} variants={item}>
          <img src="/logo.png" alt="INTI" style={styles.brandLogo} />
          <span>INTI</span>
        </motion.div>
        <motion.ul style={styles.navLinks} variants={item}>
          <li>Work</li>
          <li>About</li>
          <li>Contact</li>
        </motion.ul>
      </nav>

      <section style={styles.hero}>
        <motion.p style={styles.kicker} variants={item}>
          TARUN SAI KUMAR
        </motion.p>
        <motion.h1 style={styles.title} variants={item}>
          Building <span style={{ color: "var(--blue)" }}>clean</span> digital
          <br /> experiences.
        </motion.h1>
        <motion.p style={styles.sub} variants={item}>
          Design-driven engineering with a focus on motion, detail, and craft.
        </motion.p>
        <motion.div style={styles.ctaRow} variants={item}>
          <button style={styles.ctaPrimary}>View Work</button>
          <button style={styles.ctaGhost}>&lt;/&gt; Get in touch</button>
        </motion.div>
      </section>
    </motion.main>
  );
}

const styles = {
  app: { position: "relative", width: "100%", height: "100%", overflow: "hidden" },
  site: {
    position: "absolute",
    inset: 0,
    background: "radial-gradient(1200px 600px at 70% -10%, #0b1830 0%, #000 60%)",
    display: "flex",
    flexDirection: "column",
    padding: "0 6vw",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "28px 0",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    fontSize: "20px",
    fontWeight: 600,
    letterSpacing: "4px",
  },
  brandLogo: { width: "40px", height: "40px", objectFit: "contain" },
  navLinks: {
    display: "flex",
    gap: "36px",
    listStyle: "none",
    color: "rgba(255,255,255,0.7)",
    fontSize: "15px",
    letterSpacing: "1px",
  },
  hero: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: "820px",
  },
  kicker: {
    color: "var(--blue)",
    letterSpacing: "6px",
    fontSize: "13px",
    marginBottom: "18px",
  },
  title: {
    fontSize: "clamp(38px, 6vw, 76px)",
    fontWeight: 700,
    lineHeight: 1.05,
    letterSpacing: "-1px",
  },
  sub: {
    marginTop: "22px",
    color: "rgba(255,255,255,0.65)",
    fontSize: "clamp(15px, 1.6vw, 19px)",
    maxWidth: "540px",
    lineHeight: 1.6,
  },
  ctaRow: { display: "flex", gap: "16px", marginTop: "38px" },
  ctaPrimary: {
    background: "var(--blue)",
    color: "#fff",
    border: "none",
    padding: "14px 28px",
    borderRadius: "10px",
    fontSize: "15px",
    fontWeight: 600,
    cursor: "pointer",
  },
  ctaGhost: {
    background: "transparent",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.25)",
    padding: "14px 28px",
    borderRadius: "10px",
    fontSize: "15px",
    cursor: "pointer",
    fontFamily: "Consolas, monospace",
  },
};
