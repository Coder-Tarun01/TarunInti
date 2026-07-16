import { motion, AnimatePresence, Variants } from "@/lib/motion";
import { useCallback, useRef, useState, memo } from "react";
import { useMotionValue, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, LayoutGrid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  techStack: string[];
  impact: string;
  gradient: string;
  image?: string;
  liveDemo?: string;
  github?: string;
}

const projects: Project[] = [
  {
    id: "career-build",
    title: "Career Build Job Portal",
    description:
      "A comprehensive job portal platform with advanced search, filters, and seamless user experience for job seekers and employers.",
    role: "Frontend Lead",
    techStack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    impact: "Streamlined job application process with intuitive UI/UX",
    gradient: "from-blue-500/20 to-blue-600/20",
    liveDemo: "https://mycareerbuild.com/",
    image: "/mycareerbuild.webp",
  },
  {
    id: "vfncc",
    title: "VFNCC Cultural Platform",
    description:
      "A vibrant cultural event website showcasing community activities, event registrations, and cultural heritage.",
    role: "UI Developer",
    techStack: ["React", "CSS3", "JavaScript", "Responsive Design"],
    impact: "Increased community engagement through modern web presence",
    gradient: "from-purple-500/20 to-pink-500/20",
    liveDemo: "https://vfncc.org/",
    image: "/vfncc.webp",
  },
  {
    id: "techliv",
    title: "Techliv – IoT & Smart Homes",
    description:
      "A static website for Smart Home & Industrial IoT solutions, showcasing products and services for connected living.",
    role: "Frontend Developer",
    techStack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    impact: "Clean, informative presence for IoT and smart home solutions",
    gradient: "from-amber-500/20 to-orange-500/20",
    liveDemo: "https://techliv.net/",
    image: "/techliv.webp",
  },
  {
    id: "portfolio",
    title: "Premium Developer Portfolio",
    description:
      "A high-end, responsive portfolio featuring advanced animations, glassmorphism, and premium aesthetics to showcase professional work.",
    role: "Full Stack Developer",
    techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "TypeScript"],
    impact: "Created a stunning visual identity and seamless user experience",
    gradient: "from-primary/20 to-blue-600/20",
    liveDemo: "https://taruninti.in/",
    image: "/portfolio1.webp",
  },
  {
    id: "logistics",
    title: "Logistics Management System",
    description:
      "A comprehensive logistics and fleet management solution with real-time tracking and automated dispatch.",
    role: "Frontend Developer",
    techStack: ["React", "Next.js", "Tailwind", "REST APIs"],
    impact: "Improved operational efficiency and tracking capabilities",
    gradient: "from-blue-500/20 to-blue-700/20",
    liveDemo: "https://shipgen.net/",
    image: "/logistics.webp",
  },
  {
    id: "horilla",
    title: "Horilla HRMS Platform",
    description:
      "Enterprise-grade Human Resource Management System with full employee lifecycle management and analytics.",
    role: "Full React Frontend",
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    impact: "Collaborated with DevOps team on large-scale deployment",
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    id: "sonicsync",
    title: "SonicSync – Synchronized Audio",
    description:
      "A multi-device synchronized audio playback system for Android, allowing a host to broadcast music to multiple speakers in perfect sync.",
    role: "Solo Creator & Developer",
    techStack: ["Kotlin", "Rust", "Sync Algorithms", "Android"],
    impact: "Achieved perfect audio synchronization with automatic drift correction",
    gradient: "from-blue-600/20 to-indigo-600/20",
    image: "/sonicsync1.webp",
    github: "https://github.com/Coder-Tarun01/koyila",
  },
  {
    id: "ocr",
    title: "Tarun's OCR – Intel Scanner",
    description:
      "High-performance OCR application featuring advanced table detection and layout analysis by integrating a custom Rust engine with ML Kit.",
    role: "Solo Creator & Developer",
    techStack: ["Kotlin", "Rust", "ML Kit", "OpenCV", "Android"],
    impact: "Restored advanced table detection and high-accuracy mode using a custom Rust engine",
    gradient: "from-amber-600/20 to-orange-600/20",
    image: "/Tarunsocr1.webp",
    github: "https://github.com/Coder-Tarun01/OCR",
  },
];

const HOVER_LEAVE_DELAY = 200;

const ProjectThumbnail = ({ project, className }: { project: Project; className?: string }) => {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`Screenshot of ${project.title}`}
        width={640}
        height={360}
        loading="lazy"
        decoding="async"
        className={cn("h-full w-full object-cover object-top", className)}
      />
    );
  }

  return (
    <div
      className={cn(
        `relative flex h-full w-full items-center justify-center bg-gradient-to-br ${project.gradient} from-40% to-background`,
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.25),transparent_55%)]" />
      <span className="relative z-10 px-6 text-center font-display text-lg font-bold text-foreground/80">
        {project.title}
      </span>
    </div>
  );
};

const PreviewPanelContent = ({
  project,
  showDetails = false,
}: {
  project: Project;
  showDetails?: boolean;
}) => (
  <div className="relative overflow-hidden rounded-2xl border border-white/[0.14] bg-[linear-gradient(160deg,hsl(222_47%_10%/0.98),hsl(222_47%_5%/0.99))] shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_24px_64px_-16px_rgba(0,0,0,0.75),0_0_48px_-12px_hsl(var(--primary)/0.22)] backdrop-blur-2xl">
    {/* Ambient accent glow */}
    <div
      className={cn(
        "pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br opacity-50 blur-3xl",
        project.gradient,
      )}
    />
    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

    {/* Browser-style screenshot frame */}
    <div className="relative p-2.5">
      <div className="overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        <div className="flex items-center gap-1.5 border-b border-white/[0.06] bg-white/[0.03] px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-primary/50 shadow-[0_0_6px_hsl(var(--primary)/0.8)]" />
          <div className="ml-2 h-4 flex-1 rounded-md border border-white/[0.05] bg-white/[0.03]" />
        </div>
        <div className="relative aspect-[16/9] overflow-hidden">
          <ProjectThumbnail project={project} className="scale-[1.02] transition-transform duration-500" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[hsl(222_47%_6%/0.95)] via-[hsl(222_47%_6%/0.15)] to-transparent" />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.04]" />
        </div>
      </div>

      <span className="absolute left-5 top-5 inline-flex items-center rounded-full border border-primary/25 bg-black/50 px-2.5 py-0.5 text-[8px] font-bold uppercase tracking-[0.18em] text-primary shadow-[0_0_12px_hsl(var(--primary)/0.2)] backdrop-blur-md">
        {project.role}
      </span>
    </div>

    {/* Content */}
    <div className="relative space-y-3 px-3.5 pb-3.5 pt-1">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-display text-base font-bold leading-tight tracking-tight text-foreground">
          {project.title}
        </h3>
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary shadow-[0_0_16px_hsl(var(--primary)/0.15)]">
          <ArrowUpRight className="h-3.5 w-3.5" />
        </div>
      </div>

      {showDetails && (
        <>
          <p className="line-clamp-2 text-[11px] leading-relaxed text-muted-foreground/90">{project.description}</p>

          <div className="h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech, i) => (
              <span
                key={tech}
                className={cn(
                  "rounded-full border px-2 py-0.5 text-[9px] font-semibold tracking-wide",
                  i === 0
                    ? "border-primary/30 bg-primary/10 text-primary"
                    : "border-white/10 bg-white/[0.04] text-foreground/75",
                )}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 pt-0.5">
            {project.liveDemo && (
              <Button
                variant="hero"
                size="sm"
                className="h-7 flex-1 rounded-lg px-3 text-[10px] font-bold shadow-[0_0_20px_hsl(var(--primary)/0.2)] sm:flex-none"
                asChild
              >
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3 w-3" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.github && (
              <Button
                variant="outline"
                size="sm"
                className="h-7 flex-1 rounded-lg border-white/15 bg-white/[0.03] px-3 text-[10px] font-semibold hover:border-primary/30 hover:bg-primary/5 sm:flex-none"
                asChild
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-3 w-3" />
                  GitHub
                </a>
              </Button>
            )}
            {!project.liveDemo && !project.github && (
              <span className="text-[10px] italic text-muted-foreground/80">Private enterprise project</span>
            )}
          </div>
        </>
      )}
    </div>
  </div>
);

interface ProjectCardProps {
  project: Project;
  variants: Variants;
  isActive: boolean;
  isDimmed: boolean;
  onHoverStart: (id: string) => void;
  onHoverEnd: () => void;
  onTap: (project: Project) => void;
  isMobile: boolean;
}

const ProjectCard = ({
  project,
  variants,
  isActive,
  isDimmed,
  onHoverStart,
  onHoverEnd,
  onTap,
  isMobile,
}: ProjectCardProps) => {
  const handleMouseEnter = () => {
    if (isMobile || window.innerWidth < 768) return;
    onHoverStart(project.id);
  };

  const handleRowClick = () => {
    if (isMobile) {
      onTap(project);
    } else if (project.liveDemo) {
      window.open(project.liveDemo, "_blank", "noopener,noreferrer");
    } else if (project.github) {
      window.open(project.github, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div
      variants={variants}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={onHoverEnd}
      className={cn("relative overflow-visible", isActive ? "z-30" : isDimmed ? "z-0 opacity-40" : "z-0")}
    >
      {/* Original card – text-only, premium style; image shows in hover preview only */}
      <div
        id={project.id}
        onClick={handleRowClick}
        className={cn(
          "group/card relative flex w-full cursor-pointer flex-col justify-between overflow-visible rounded-xl border p-5 transition-[border-color,box-shadow] duration-300 sm:p-6 md:flex-row md:items-center lg:p-8",
          "border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent backdrop-blur-sm",
          "hover:border-primary/25 hover:shadow-[0_8px_40px_-12px_rgba(26,109,255,0.2)]",
          isActive && !isMobile ? "border-primary/30 shadow-[0_8px_40px_-12px_rgba(26,109,255,0.2)]" : "",
        )}
      >
        <div
          className={cn(
            "pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br opacity-[0.12] transition-opacity duration-300 group-hover/card:opacity-[0.2]",
            project.gradient,
          )}
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-60 rounded-t-xl" />

        <div className="relative z-10 flex-1 md:pr-12">
          <div className="mb-3 flex items-center gap-2">
            <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-primary">
              {project.role}
            </span>
          </div>

          <h3 className="font-display text-base font-bold leading-snug text-foreground sm:text-lg md:text-xl group-hover/card:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground sm:text-sm max-w-2xl">
            {project.description}
          </p>
          <div className="mt-3.5 flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/8 bg-white/[0.04] px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10 mt-4 flex flex-wrap items-center gap-3 md:mt-0 md:justify-end shrink-0">
          {project.liveDemo && (
            <Button
              variant="hero"
              size="sm"
              className="h-8 rounded-lg px-3 text-[11px] font-bold shadow-[0_0_20px_hsl(var(--primary)/0.2)]"
              asChild
            >
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live Demo
              </a>
            </Button>
          )}
          {project.github && (
            <Button
              variant="outline"
              size="sm"
              className="h-8 rounded-lg border-white/15 bg-white/[0.03] px-3 text-[11px] font-semibold hover:border-primary/30 hover:bg-primary/5"
              asChild
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="h-3.5 w-3.5" />
                GitHub
              </a>
            </Button>
          )}
          {!project.liveDemo && !project.github && (
            <span className="text-[11px] italic text-muted-foreground/80 pr-2">Private enterprise project</span>
          )}
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-muted-foreground/60 transition-all duration-300 group-hover/card:border-primary/30 group-hover/card:bg-primary/10 group-hover/card:text-primary group-hover/card:scale-110 ml-1">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>

        {isMobile && (
          <div className="relative z-10 mt-3 border-t border-white/8 pt-3 w-full">
            <span className="text-[10px] font-medium text-primary">Tap to preview</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

interface ScrollStackCardProps {
  project: Project;
  index: number;
  total: number;
  onTap: (project: Project) => void;
  isMobile: boolean;
  hoveredStackIndex: number | null;
  setHoveredStackIndex: (index: number | null) => void;
}

const ScrollStackCard = memo(({
  project,
  index,
  total,
  onTap,
  isMobile,
  hoveredStackIndex,
  setHoveredStackIndex,
}: ScrollStackCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scrollScale = useTransform(scrollYProgress, [0, 1], [1, 0.9 + (index / total) * 0.1]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.65]);

  const handleCardClick = () => {
    if (isMobile) {
      onTap(project);
    } else if (project.liveDemo) {
      window.open(project.liveDemo, "_blank", "noopener,noreferrer");
    } else if (project.github) {
      window.open(project.github, "_blank", "noopener,noreferrer");
    }
  };

  const handleMouseEnter = () => {
    if (isMobile) return;
    setHoveredStackIndex(index);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    setHoveredStackIndex(null);
  };

  const hoverActive = hoveredStackIndex !== null;
  const isHovered = hoveredStackIndex === index;
  const isBehind1 = hoveredStackIndex !== null && index === hoveredStackIndex - 1;
  const isBehind2 = hoveredStackIndex !== null && index === hoveredStackIndex - 2;
  const isBehind3 = hoveredStackIndex !== null && index === hoveredStackIndex - 3;

  let animateVal = {};
  if (isHovered) {
    animateVal = { y: -8, scale: 1.02, rotate: 0, x: 0 };
  } else if (isBehind1) {
    animateVal = { rotate: -3, x: -25, y: -4, scale: 0.95 };
  } else if (isBehind2) {
    animateVal = { rotate: 3, x: 25, y: -8, scale: 0.90 };
  } else if (isBehind3) {
    animateVal = { rotate: -1.5, x: -40, y: -12, scale: 0.85 };
  } else {
    animateVal = { y: 0, rotate: 0, x: 0 };
  }

  const stickyTop = 100 + index * 20;

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-visible flex flex-col justify-start"
      style={{
        height: isMobile || index === total - 1 ? "auto" : "60vh",
      }}
    >
      <motion.div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          scale: isMobile ? 1 : (hoverActive ? undefined : scrollScale),
          opacity: isMobile ? 1 : (hoverActive ? (isHovered ? 1 : 0.75) : scrollOpacity),
          top: isMobile ? "auto" : `${stickyTop}px`,
          zIndex: isMobile ? 1 : (index + 1) * 10,
        }}
        animate={isMobile ? {} : animateVal}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        onClick={handleCardClick}
        className={cn(
          "relative md:sticky w-full rounded-3xl border border-white/10 overflow-hidden cursor-pointer shadow-[0_-16px_48px_-15px_rgba(0,0,0,0.9)] backdrop-blur-xl origin-top",
          "bg-[linear-gradient(160deg,hsl(222_47%_12%/0.95),hsl(222_47%_6%/0.98))]",
          "hover:border-primary/30 transition-colors duration-300"
        )}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 w-full h-full p-6 md:p-8 lg:p-10 gap-6 md:gap-8 items-center relative">
          {/* Left column: screenshot thumbnail */}
          <div className="md:col-span-5 w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-black/40 aspect-[16/10] relative">
            <ProjectThumbnail project={project} className="scale-[1.01]" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          {/* Right column: content */}
          <div className="md:col-span-7 flex flex-col justify-between h-full relative">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-primary">
                  {project.role}
                </span>
              </div>

              <div>
                <span className="block font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white/[0.08] select-none leading-none mb-2">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground leading-tight">
                  {project.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm md:text-base leading-relaxed text-muted-foreground/90 max-w-xl">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/8 bg-white/[0.04] px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links & CTA */}
            <div className="flex flex-wrap items-center gap-3 pt-6 mt-6 border-t border-white/[0.06] w-full">
              {project.liveDemo && (
                <Button
                  variant="hero"
                  size="sm"
                  className="h-8 rounded-lg px-4 text-[11px] font-bold shadow-[0_0_20px_hsl(var(--primary)/0.2)]"
                  asChild
                >
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.github && (
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 rounded-lg border-white/15 bg-white/[0.03] px-4 text-[11px] font-semibold hover:border-primary/30 hover:bg-primary/5"
                  asChild
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="h-3.5 w-3.5" />
                    GitHub
                  </a>
                </Button>
              )}
              {!project.liveDemo && !project.github && (
                <span className="text-[11px] italic text-muted-foreground/80 pr-2">Private enterprise project</span>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
});

ScrollStackCard.displayName = "ScrollStackCard";

interface AbsoluteStackCardProps {
  project: Project;
  index: number;
  total: number;
  scrollYProgress: any;
  onTap: (project: Project) => void;
  isMobile: boolean;
}

const AbsoluteStackCard = memo(({
  project,
  index,
  total,
  scrollYProgress,
  onTap,
  isMobile,
}: AbsoluteStackCardProps) => {
  const animationStart = 0.02;
  const animationEnd = 0.72;
  const step = (animationEnd - animationStart) / (total - 1);
  const inputPoints: number[] = [];
  const yPoints: number[] = [];
  const scalePoints: number[] = [];
  const opacityPoints: number[] = [];

  // Anchor at 0.0 to establish a static landing buffer before animations start
  inputPoints.push(0.0);
  if (0 < index) {
    yPoints.push(800);
    scalePoints.push(1.0);
    opacityPoints.push(0);
  } else {
    yPoints.push(0);
    scalePoints.push(1.0);
    opacityPoints.push(1.0);
  }

  // Generate steps from i = 0 to total - 1
  for (let i = 0; i < total; i++) {
    const scrollVal = animationStart + i * step;
    inputPoints.push(scrollVal);
    if (i < index) {
      yPoints.push(800); // Start below viewport
      scalePoints.push(1.0);
      opacityPoints.push(0);
    } else if (i === index) {
      yPoints.push(index * 24);
      scalePoints.push(1.0);
      opacityPoints.push(1.0);
    } else {
      const diff = i - index;
      yPoints.push(index * 24);
      scalePoints.push(1.0 - diff * 0.03);
      opacityPoints.push(1.0 - diff * 0.08);
    }
  }

  // Append a final point at 1.0 to keep the stacked deck state stable as the section un-sticks
  if (inputPoints[inputPoints.length - 1] < 1.0) {
    inputPoints.push(1.0);
    const lastIdx = total - 1;
    if (lastIdx < index) {
      yPoints.push(800);
      scalePoints.push(1.0);
      opacityPoints.push(0);
    } else if (lastIdx === index) {
      yPoints.push(index * 24);
      scalePoints.push(1.0);
      opacityPoints.push(1.0);
    } else {
      const diff = lastIdx - index;
      yPoints.push(index * 24);
      scalePoints.push(1.0 - diff * 0.03);
      opacityPoints.push(1.0 - diff * 0.08);
    }
  }

  const y = useTransform(scrollYProgress, inputPoints, yPoints);
  const scale = useTransform(scrollYProgress, inputPoints, scalePoints);
  const opacity = useTransform(scrollYProgress, inputPoints, opacityPoints);

  const handleCardClick = () => {
    if (isMobile) {
      onTap(project);
    } else if (project.liveDemo) {
      window.open(project.liveDemo, "_blank", "noopener,noreferrer");
    } else if (project.github) {
      window.open(project.github, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div
      style={{
        y,
        scale,
        opacity,
        zIndex: (index + 1) * 10,
      }}
      onClick={handleCardClick}
      className={cn(
        "absolute inset-0 w-full h-full rounded-3xl border border-white/10 overflow-hidden cursor-pointer shadow-[0_-16px_48px_-15px_rgba(0,0,0,0.9)] backdrop-blur-xl origin-top flex flex-col justify-center",
        "bg-[linear-gradient(160deg,hsl(222_47%_12%/0.95),hsl(222_47%_6%/0.98))]",
        "hover:border-primary/30 transition-colors duration-300"
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 w-full p-6 md:p-8 lg:p-10 gap-6 md:gap-8 items-center relative">
        {/* Left column: screenshot thumbnail */}
        <div className="md:col-span-5 w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-black/40 aspect-[16/10] relative">
          <ProjectThumbnail project={project} className="scale-[1.01]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Right column: content */}
        <div className="md:col-span-7 flex flex-col justify-between relative">
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-primary">
                {project.role}
              </span>
              {project.liveDemo && (
                <Button
                  variant="hero"
                  size="sm"
                  className="md:hidden h-7 rounded-lg px-3 text-[10px] font-bold shadow-[0_0_15px_hsl(var(--primary)/0.2)]"
                  asChild
                >
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="h-3 w-3" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>

            <div>
              <span className="block font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white/[0.08] select-none leading-none mb-2">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground leading-tight">
                {project.title}
              </h3>
            </div>

            <p className="hidden md:block text-xs sm:text-sm md:text-base leading-relaxed text-muted-foreground/90 max-w-xl">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="hidden md:flex flex-wrap gap-1.5 pt-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/8 bg-white/[0.04] px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links & CTA */}
          <div className="hidden md:flex flex-wrap items-center gap-3 pt-6 mt-6 border-t border-white/[0.06] w-full">
            {project.liveDemo && (
              <Button
                variant="hero"
                size="sm"
                className="h-8 rounded-lg px-4 text-[11px] font-bold shadow-[0_0_20px_hsl(var(--primary)/0.2)]"
                asChild
              >
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.github && (
              <Button
                variant="outline"
                size="sm"
                className="h-8 rounded-lg border-white/15 bg-white/[0.03] px-4 text-[11px] font-semibold hover:border-primary/30 hover:bg-primary/5"
                asChild
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="h-3.5 w-3.5" />
                  GitHub
                </a>
              </Button>
            )}
            {!project.liveDemo && !project.github && (
              <span className="text-[11px] italic text-muted-foreground/80 pr-2">Private enterprise project</span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
});

AbsoluteStackCard.displayName = "AbsoluteStackCard";

const Projects = () => {
  const isMobile = useIsMobile();
  const [viewStyle, setViewStyle] = useState<'rows' | 'stack'>('rows');
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [hoveredStackIndex, setHoveredStackIndex] = useState<number | null>(null);
  const [mobileProject, setMobileProject] = useState<Project | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });


  const x = useMotionValue(0);
  const y = useMotionValue(0);



  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      x.set(e.clientX - rect.left);
      y.set(e.clientY - rect.top);
    }
  };

  const clearLeaveTimer = useCallback(() => {
    if (leaveTimer.current) {
      clearTimeout(leaveTimer.current);
      leaveTimer.current = null;
    }
  }, []);

  const handleHoverStart = useCallback(
    (id: string) => {
      clearLeaveTimer();
      setHoveredId(id);
    },
    [clearLeaveTimer],
  );

  const handleHoverEnd = useCallback(() => {
    clearLeaveTimer();
    leaveTimer.current = setTimeout(() => setHoveredId(null), HOVER_LEAVE_DELAY);
  }, [clearLeaveTimer]);

  const handleContainerLeave = useCallback(() => {
    clearLeaveTimer();
    setHoveredId(null);
  }, [clearLeaveTimer]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section id="projects" className="overflow-visible py-24 section-padding" aria-labelledby="projects-heading">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleContainerLeave}
        className="mx-auto max-w-6xl overflow-visible relative"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-medium uppercase tracking-wider text-primary">My Work</span>
          <h2 id="projects-heading" className="mt-3 mb-6 font-display text-3xl font-bold md:text-4xl lg:text-5xl">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A selection of projects that showcase my expertise in building scalable, user-focused web
            applications.
          </p>
        </motion.div>

        {/* Layout toggle buttons */}
        <div className="mb-12 flex justify-center">
          <div className="relative flex items-center rounded-full border border-white/10 bg-black/40 p-1 backdrop-blur-md">
            <button
              onClick={() => setViewStyle("rows")}
              className={cn(
                "relative flex items-center gap-2 rounded-full px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider transition-colors duration-300",
                viewStyle === "rows" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {viewStyle === "rows" && (
                <motion.span
                  layoutId="activeViewTab"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-blue-600 shadow-[0_0_20px_hsl(var(--primary)/0.3)] border border-primary/40 -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              <List className="h-3.5 w-3.5" />
              Interactive Rows
            </button>
            <button
              onClick={() => setViewStyle("stack")}
              className={cn(
                "relative flex items-center gap-2 rounded-full px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider transition-colors duration-300",
                viewStyle === "stack" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {viewStyle === "stack" && (
                <motion.span
                  layoutId="activeViewTab"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-blue-600 shadow-[0_0_20px_hsl(var(--primary)/0.3)] border border-primary/40 -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              <LayoutGrid className="h-3.5 w-3.5" />
              Stacked Cards
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {viewStyle === "rows" ? (
            <motion.div
              key="rows-view"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="flex flex-col gap-6 overflow-visible"
            >
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  variants={itemVariants}
                  isActive={hoveredId === project.id}
                  isDimmed={!!hoveredId && hoveredId !== project.id}
                  onHoverStart={handleHoverStart}
                  onHoverEnd={handleHoverEnd}
                  onTap={setMobileProject}
                  isMobile={isMobile}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="stack-view"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="w-full overflow-visible"
            >
              <div
                ref={sectionRef}
                className="relative w-full h-[900vh] overflow-visible"
              >
                <div className="sticky top-16 md:top-24 h-[70vh] md:h-[70vh] w-full flex items-center justify-center overflow-visible">
                  <div className="relative w-full max-w-5xl h-[400px] md:h-[520px] overflow-visible">
                    {projects.map((project, index) => (
                      <AbsoluteStackCard
                        key={project.id}
                        project={project}
                        index={index}
                        total={projects.length}
                        scrollYProgress={scrollYProgress}
                        onTap={setMobileProject}
                        isMobile={isMobile}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {hoveredId && !isMobile && (
            <motion.div
              key="floating-preview"
              style={{
                left: x,
                top: y,
                x: "-50%",
              }}
              className="pointer-events-none absolute z-50 w-[320px] md:w-[420px]"
              initial={{ opacity: 0, scale: 0.9, y: "-35%", filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, y: "-50%", filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.9, y: "-35%", filter: "blur(8px)" }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
            >
              {(() => {
                const activeProj = projects.find((p) => p.id === hoveredId);
                return activeProj ? <PreviewPanelContent project={activeProj} /> : null;
              })()}
            </motion.div>
          )}
        </AnimatePresence>

        <Sheet open={!!mobileProject} onOpenChange={(open) => !open && setMobileProject(null)}>
          <SheetContent
            side="bottom"
            className="max-h-[92vh] overflow-y-auto rounded-t-3xl border-white/10 bg-background/95 px-0 pb-8 pt-6 backdrop-blur-xl"
          >
            {mobileProject && (
              <>
                <SheetHeader className="sr-only">
                  <SheetTitle>{mobileProject.title}</SheetTitle>
                  <SheetDescription>{mobileProject.description}</SheetDescription>
                </SheetHeader>
                <div className="px-4">
                  <PreviewPanelContent project={mobileProject} showDetails={true} />
                </div>
              </>
            )}
          </SheetContent>
        </Sheet>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="mb-6 text-muted-foreground">Want to see more or discuss a custom project?</p>
          <Button variant="hero" size="lg" className="rounded-full px-8" asChild>
            <a href="#contact">
              Let's Talk
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
