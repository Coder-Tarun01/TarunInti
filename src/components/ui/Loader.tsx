import { motion } from "framer-motion";

/**
 * Timeline (seconds):
 *  0.0  Background is already painted
 *  0.2  Left vertical "I" grows from the bottom
 *  0.5  Top bar slides in from the left
 *  0.8  Inner bar (T stem) grows downward
 *  1.1  Blue accent slides in from the right
 *  1.4  Whole logo glows
 *  1.6  INTI wordmark + tagline fade in
 *  ~2.4 Loader fades away (handled by parent)
 */

const EASE = [0.22, 1, 0.36, 1] as const;

interface LoaderProps {
  onComplete?: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  return (
    <motion.div
      style={styles.wrap}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(8px)" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <motion.div
        style={styles.center}
        // The glow pulse for the whole mark at 1.4s
        initial={{ filter: "drop-shadow(0 0 0px rgba(26,109,255,0))" }}
        animate={{
          filter: [
            "drop-shadow(0 0 0px rgba(26,109,255,0))",
            "drop-shadow(0 0 22px rgba(80,150,255,0.75))",
            "drop-shadow(0 0 10px rgba(80,150,255,0.35))",
          ],
        }}
        transition={{ delay: 1.4, duration: 0.9, ease: "easeInOut" }}
      >
        <svg
          width="340"
          height="360"
          viewBox="-20 0 340 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* ---------- LOGO MARK ---------- */}

          {/* Left vertical I — grows from the bottom */}
          <motion.rect
            x="37"
            y="40"
            width="30"
            height="188"
            fill="var(--white)"
            style={{ transformBox: "fill-box", transformOrigin: "bottom" }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.45, ease: EASE }}
          />

          {/* Top bar (the 7-like head) — slides in from the left */}
          <motion.polygon
            points="83,40 263,40 237,70 83,70"
            fill="var(--white)"
            style={{ transformBox: "fill-box", transformOrigin: "left" }}
            initial={{ x: -70, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4, ease: EASE }}
          />

          {/* Inner bar (T stem) — grows downward */}
          <motion.rect
            x="129"
            y="98"
            width="30"
            height="130"
            fill="var(--white)"
            style={{ transformBox: "fill-box", transformOrigin: "top" }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.4, ease: EASE }}
          />

          {/* Blue accent parallelogram — slides in from the right */}
          <motion.polygon
            points="185,74 219,74 197,102 163,102"
            fill="var(--blue)"
            style={{ transformBox: "fill-box", transformOrigin: "right" }}
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.4, ease: EASE }}
          />

          {/* ---------- INTI WORDMARK ---------- */}
          <motion.text
            x="37"
            y="286"
            textAnchor="start"
            textLength="226"
            lengthAdjust="spacing"
            fill="var(--white)"
            fontSize="48"
            fontWeight="300"
            fontFamily="'Segoe UI', Inter, sans-serif"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.5, ease: EASE }}
          >
            INTI
          </motion.text>

          {/* Tagline */}
          <motion.text
            x="-11"
            y="318"
            textAnchor="start"
            textLength="322"
            lengthAdjust="spacing"
            fill="rgba(255,255,255,0.55)"
            fontSize="12.5"
            fontWeight="300"
            fontFamily="'Segoe UI', Inter, sans-serif"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.85, duration: 0.5, ease: EASE }}
          >
            TARUN SAI KUMAR
          </motion.text>

          {/* Code accent  ——  </>  —— */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0, duration: 0.5, ease: EASE }}
            onAnimationComplete={onComplete}
          >
            <line x1="-11" y1="342" x2="91" y2="342" stroke="var(--blue)" strokeWidth="2" />
            <line x1="209" y1="342" x2="311" y2="342" stroke="var(--blue)" strokeWidth="2" />
            <text
              x="150"
              y="348"
              textAnchor="middle"
              fill="var(--blue)"
              fontSize="20"
              fontFamily="'Consolas', monospace"
            >
              &lt;/&gt;
            </text>
          </motion.g>
        </svg>
      </motion.div>
    </motion.div>
  );
}

const styles = {
  wrap: {
    position: "fixed",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#000000",
    zIndex: 9999,
    "--white": "#ffffff",
    "--blue": "#1a6dff",
  } as React.CSSProperties & Record<string, string>,
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
