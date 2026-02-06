import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Code2, Layers, Zap, Terminal } from "lucide-react";

const ProfessionalSymbol = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
    >
      {/* Outer rotating ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border-2 border-primary/20"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_hsl(175_80%_50%)]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-primary/60 rounded-full" />
      </motion.div>

      {/* Middle pulsing ring */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-6 md:inset-8 rounded-full border border-primary/30 bg-primary/5"
      />

      {/* Inner hexagon structure */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-12 md:inset-16"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <motion.polygon
            points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
            fill="none"
            stroke="hsl(175 80% 50% / 0.3)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
        </svg>
      </motion.div>

      {/* Center core with gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="relative">
          {/* Glowing backdrop */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 40px hsl(175 80% 50% / 0.3)",
                "0 0 80px hsl(175 80% 50% / 0.5)",
                "0 0 40px hsl(175 80% 50% / 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border border-primary/30 flex items-center justify-center"
          >
            {/* Code brackets symbol */}
            <div className="relative">
              <motion.div
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -left-6 md:-left-8 top-1/2 -translate-y-1/2"
              >
                <span className="text-3xl md:text-4xl font-bold text-primary font-display">&lt;</span>
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
              >
                <Code2 className="w-10 h-10 md:w-14 md:h-14 text-primary" strokeWidth={1.5} />
              </motion.div>

              <motion.div
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -right-6 md:-right-8 top-1/2 -translate-y-1/2"
              >
                <span className="text-3xl md:text-4xl font-bold text-primary font-display">/&gt;</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Floating tech icons */}
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-8 -right-8 md:-top-10 md:-right-10 p-2 md:p-3 rounded-xl bg-card/80 border border-border shadow-lg backdrop-blur-sm"
          >
            <Layers className="w-4 h-4 md:w-5 md:h-5 text-primary" />
          </motion.div>

          <motion.div
            animate={{ y: [5, -5, 5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-8 -left-8 md:-bottom-10 md:-left-10 p-2 md:p-3 rounded-xl bg-card/80 border border-border shadow-lg backdrop-blur-sm"
          >
            <Terminal className="w-4 h-4 md:w-5 md:h-5 text-primary" />
          </motion.div>

          <motion.div
            animate={{ y: [-3, 7, -3] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -right-10 md:-bottom-8 md:-right-12 p-2 md:p-3 rounded-xl bg-card/80 border border-border shadow-lg backdrop-blur-sm"
          >
            <Zap className="w-4 h-4 md:w-5 md:h-5 text-primary" />
          </motion.div>
        </div>
      </motion.div>

      {/* Particle effects */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-primary rounded-full"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [0, -20, -40],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeOut",
          }}
        />
      ))}
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden section-padding pt-24 md:pt-20">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Available for Freelance Projects
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.15] mb-6 tracking-tight"
            >
              <span className="text-foreground">CRAFTING VIBRANT &</span>
              <br />
              <span className="text-gradient">NEXT-GEN WEB EXPERIENCES</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-8 text-balance"
            >
              Full-Stack Developer crafting high-performance websites and applications
              that convert visitors into loyal customers. Let's build something extraordinary.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
              <Button variant="hero" size="xl" asChild>
                <a href="#projects">
                  See My Work
                  <ArrowDown className="w-5 h-5 ml-1" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#contact">Hire Me</a>
              </Button>
            </motion.div>
          </div>

          {/* Professional Symbol */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <ProfessionalSymbol />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
