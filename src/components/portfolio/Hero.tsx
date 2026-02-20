import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Code2,
  Briefcase,
  Zap
} from "lucide-react";

const FloatingCard = ({ id, delay, title, category, image, className }: {
  id: string;
  delay: number;
  title: string;
  category: string;
  image: string;
  className?: string;
}) => (
  <motion.a
    href={`#${id}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{
      opacity: 1,
      y: [0, -15, 0],
    }}
    transition={{
      opacity: { duration: 0.8, delay },
      y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: delay * 0.5 },
    }}
    whileHover={{ y: -5, scale: 1.02 }}
    className={`absolute glass p-3 sm:p-4 rounded-xl sm:rounded-2xl border-white/10 shadow-2xl group hover:border-primary/50 transition-colors duration-500 w-48 sm:w-64 block z-50 ${className}`}
  >
    <div className="relative aspect-video rounded-lg overflow-hidden mb-2 sm:mb-3 bg-muted/20 border border-white/5">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent group-hover:opacity-0 transition-opacity" />
      <img src={image} alt={title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
    </div>
    <div className="flex items-center justify-between gap-2">
      <div className="min-w-0">
        <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-wider text-primary/80 mb-0.5 sm:mb-1 block truncate">
          {category}
        </span>
        <h4 className="text-[10px] sm:text-sm font-bold text-foreground truncate">{title}</h4>
      </div>
      <div className="shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
        <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
      </div>
    </div>
  </motion.a>
);

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const, // easeOutQuart
      },
    },
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-28 pb-16 overflow-hidden bg-background">
      {/* SaaS Background Essentials */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary/10 rounded-full blur-[80px] md:blur-[120px]" />

        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">

          {/* Left Column: Sharp Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-xl text-center lg:text-left mx-auto lg:mx-0"
          >
            {/* Authority Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 lg:mb-8"
            >
              <span className="text-[10px] sm:text-xs font-bold text-foreground/80 tracking-tight">
                8+ Real-World Projects • <span className="text-primary">Available for Hire</span>
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]"
            >
              Full-Stack Developer <br className="hidden sm:block" />
              Building Scalable, <br className="hidden sm:block" />
              <span className="text-gradient">Production-Ready</span> Web Apps
            </motion.h1>

            {/* Concise Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-muted-foreground mb-4 font-medium max-w-lg mx-auto lg:mx-0"
            >
              Contributed to production-grade applications and built 8+ real-world projects using React, Next.js, and Node.js.
            </motion.p>

            {/* Micro Trust Line */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-2 mb-8 lg:mb-10 text-xs sm:text-sm text-foreground/40 font-medium"
            >
              <Zap className="w-3 h-3 text-primary" />
              Focused on performance, scalability, and real business impact.
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-3">
                <Button variant="hero" size="xl" className="group rounded-2xl w-full sm:w-auto" asChild>
                  <a href="#projects">
                    View My Projects
                  </a>
                </Button>
                <Button variant="heroOutline" size="xl" className="rounded-2xl border-white/10 hover:border-primary/50 w-full sm:w-auto" asChild>
                  <a href="#contact">
                    Hire Me
                  </a>
                </Button>
              </div>
              <a href="#contact" className="text-[11px] text-muted-foreground hover:text-primary transition-colors font-bold sm:ml-4 inline-block">
                Get Free Consultation
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual Showcase */}
          <div className="relative h-[450px] sm:h-[550px] lg:h-[550px] mt-12 lg:mt-0 lg:translate-y-12">
            <div className="relative w-full h-full scale-[0.8] sm:scale-100 origin-center lg:origin-right">
              {/* Animated Floating Cards - Adapted for Mobile Positioning */}
              <FloatingCard
                id="career-build"
                delay={0}
                title="Career Build Job Portal"
                category="Production"
                image="/mycareerbuild.png"
                className="top-0 right-0 sm:right-0 z-30"
              />
              <FloatingCard
                id="vfncc"
                delay={0.4}
                title="VFNCC Cultural Platform"
                category="Industry"
                image="/vfncc.png"
                className="top-[40px] sm:top-[80px] -left-10 sm:-left-20 z-20"
              />
              <FloatingCard
                id="logistics"
                delay={0.8}
                title="ShipGen.net Logistics"
                category="Full-Stack"
                image="/logistics.png"
                className="top-[120px] sm:top-[180px] right-[-10px] sm:right-[-20px] z-40"
              />

              <FloatingCard
                id="ocr"
                delay={1.2}
                title="Tarun's OCR – Intel Scanner"
                category="Rust Engine"
                image="/ocr.jpeg"
                className="top-[180px] -left-8 sm:bottom-[140px] sm:left-[20px] sm:top-auto z-10"
              />
              <FloatingCard
                id="sonicsync"
                delay={1.6}
                title="SonicSync – Audio Sync"
                category="Systems"
                image="/sonicsync1.png"
                className="top-[240px] right-[-15px] sm:bottom-0 sm:right-[-10px] sm:top-auto z-20"
              />
              <FloatingCard
                id="techliv"
                delay={2.0}
                title="Techliv – IoT & Homes"
                category="Frontend"
                image="/techliv.png"
                className="top-[300px] -left-12 sm:bottom-[60px] sm:left-20 sm:top-auto z-30"
              />
              <FloatingCard
                id="portfolio"
                delay={2.4}
                title="Developer Portfolio"
                category="UI/UX"
                image="/portfolio.png"
                className="top-[-30px] left-[30px] sm:top-[-40px] sm:left-[40px] z-10"
              />

              {/* Decorative Geometric Glows */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-primary/20 rounded-full blur-[60px] sm:blur-[100px] -z-10"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Hero Scroll Indicator - Hidden on very small screens to save space */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 opacity-50"
      >
        <div className="w-[1px] h-8 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
