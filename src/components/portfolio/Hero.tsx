import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Zap } from "lucide-react";

const secondaryCards = [
  {
    id: "vfncc",
    delay: 0.4,
    title: "VFNCC Cultural Platform",
    category: "Industry",
    image: "/vfncc.webp",
    className: "top-[40px] sm:top-[80px] -left-10 sm:-left-20 md:left-0 lg:-left-20 z-20",
  },
  {
    id: "logistics",
    delay: 0.8,
    title: "ShipGen.net Logistics",
    category: "Full-Stack",
    image: "/logistics.webp",
    className: "top-[120px] sm:top-[180px] right-[-15px] sm:right-[-20px] md:right-0 lg:right-[-20px] z-40",
  },
  {
    id: "ocr",
    delay: 1.2,
    title: "Tarun's OCR – Intel Scanner",
    category: "Rust Engine",
    image: "/Tarunsocr1.webp",
    className: "top-[180px] -left-8 sm:bottom-[140px] sm:left-[20px] md:left-0 sm:top-auto z-10",
  },
  {
    id: "sonicsync",
    delay: 1.6,
    title: "SonicSync – Audio Sync",
    category: "Systems",
    image: "/sonicsync1.webp",
    className: "top-[240px] right-[-15px] sm:bottom-0 sm:right-[-10px] md:right-0 sm:top-auto z-20",
  },
  {
    id: "techliv",
    delay: 2.0,
    title: "Techliv – IoT & Homes",
    category: "Frontend",
    image: "/techliv.webp",
    className: "top-[300px] -left-12 sm:bottom-[60px] sm:left-20 md:left-32 sm:top-auto z-30",
  },
  {
    id: "portfolio",
    delay: 2.4,
    title: "Developer Portfolio",
    category: "UI/UX",
    image: "/portfolio1.webp",
    className: "top-[-30px] left-[30px] sm:top-[-40px] sm:left-[40px] md:left-[80px] z-10",
  },
] as const;

const FloatingCard = ({
  id,
  delay,
  title,
  category,
  image,
  className,
  priority = false,
}: {
  id: string;
  delay: number;
  title: string;
  category: string;
  image: string;
  className?: string;
  priority?: boolean;
}) => (
  <a
    href={`#${id}`}
    style={{ animationDelay: `${delay * 0.5}s` }}
    className={`absolute glass p-3 sm:p-4 rounded-xl sm:rounded-2xl border-white/10 shadow-2xl group hover:border-primary/50 transition-colors duration-500 w-48 sm:w-64 block z-50 animate-float hover:-translate-y-1 hover:scale-[1.02] motion-reduce:animate-none ${className}`}
  >
    <div className="relative aspect-video rounded-lg overflow-hidden mb-2 sm:mb-3 bg-muted/20 border border-white/5">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent group-hover:opacity-0 transition-opacity" />
      <img
        src={image}
        alt={`${title} project preview – ${category}`}
        width={256}
        height={144}
        decoding="async"
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
      />
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
  </a>
);

const fadeUp = (delay: string) =>
  `opacity-0 animate-fade-in motion-reduce:opacity-100 motion-reduce:animate-none [animation-delay:${delay}]`;

const Hero = () => {
  const [showSecondaryCards, setShowSecondaryCards] = useState(false);

  useEffect(() => {
    const schedule =
      "requestIdleCallback" in window
        ? window.requestIdleCallback(() => setShowSecondaryCards(true), { timeout: 1500 })
        : window.setTimeout(() => setShowSecondaryCards(true), 300);

    return () => {
      if ("cancelIdleCallback" in window && typeof schedule === "number") {
        window.cancelIdleCallback(schedule);
      } else {
        window.clearTimeout(schedule as number);
      }
    };
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-28 pb-16 overflow-hidden bg-background" aria-label="Introduction">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary/10 rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <div className="max-w-xl text-center lg:text-left mx-auto lg:mx-0">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 lg:mb-8 ${fadeUp("0.1s")}`}
            >
              <span className="text-[10px] sm:text-xs font-bold text-foreground/80 tracking-tight">
                8+ Real-World Projects • <span className="text-primary">Available for Hire</span>
              </span>
            </div>

            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1] ${fadeUp("0.2s")}`}
            >
              Full-Stack Developer <br className="hidden sm:block" />
              Building Scalable, <br className="hidden sm:block" />
              <span className="text-gradient">Production-Ready</span> Web Apps
            </h1>

            <p
              className={`text-base sm:text-lg text-muted-foreground mb-4 font-medium max-w-lg mx-auto lg:mx-0 ${fadeUp("0.3s")}`}
            >
              Contributed to production-grade applications and built 8+ real-world projects using React, Next.js, and Node.js.
            </p>

            <div
              className={`flex items-center justify-center lg:justify-start gap-2 mb-8 lg:mb-10 text-xs sm:text-sm text-foreground/40 font-medium ${fadeUp("0.35s")}`}
            >
              <Zap className="w-3 h-3 text-primary" />
              Focused on performance, scalability, and real business impact.
            </div>

            <div className={`mb-8 ${fadeUp("0.4s")}`}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-3">
                <Button variant="hero" size="xl" className="group rounded-2xl w-full sm:w-auto" asChild>
                  <a href="#projects">View My Projects</a>
                </Button>
                <Button variant="heroOutline" size="xl" className="rounded-2xl border-white/10 hover:border-primary/50 w-full sm:w-auto" asChild>
                  <a href="#contact">Hire Me</a>
                </Button>
              </div>
              <a
                href="#contact"
                className="text-[11px] text-muted-foreground hover:text-primary transition-colors font-bold sm:ml-4 inline-block"
              >
                Get Free Consultation
              </a>
            </div>
          </div>

          <div className="relative h-[450px] sm:h-[550px] lg:h-[550px] mt-12 lg:mt-0 lg:translate-y-12 max-w-2xl md:max-w-3xl lg:max-w-none mx-auto lg:mx-0 w-full">
            <div className="relative w-full h-full scale-[0.8] sm:scale-90 md:scale-95 lg:scale-100 origin-center lg:origin-right">
              <FloatingCard
                id="career-build"
                delay={0}
                title="Career Build Job Portal"
                category="Production"
                image="/mycareerbuild.webp"
                className="top-0 right-[-10px] sm:right-0 z-30"
                priority
              />
              {showSecondaryCards &&
                secondaryCards.map((card) => (
                  <FloatingCard key={card.id} {...card} />
                ))}

              <div
                className="absolute top-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-primary/20 rounded-full blur-[60px] sm:blur-[100px] -z-10 animate-pulse-glow motion-reduce:animate-none"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 opacity-50 animate-float motion-reduce:animate-none"
        aria-hidden="true"
      >
        <div className="w-[1px] h-8 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
