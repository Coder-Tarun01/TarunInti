import { useState } from "react";
import { motion, AnimatePresence } from "@/lib/motion";
import {
  Code2,
  Cpu,
  Layers,
  Terminal,
  Zap,
  Plus,
  Minus,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

type ExpertiseItem = {
  id: string;
  number: string;
  title: string;
  categoryTag: string;
  description: string;
  techTags: string[];
  keyPractices: string[];
};

const expertiseList: ExpertiseItem[] = [
  {
    id: "fullstack-dev",
    number: "01",
    title: "Full-Stack Development",
    categoryTag: "End-to-End Applications",
    description:
      "Building end-to-end web applications across frontend interfaces, backend services, APIs, databases, and practical business workflows.",
    techTags: ["React.js", "Node.js", "MERN Stack", "FastAPI", "Python", "TypeScript", "PostgreSQL", "MongoDB", "REST APIs"],
    keyPractices: [
      "Decoupled frontend & API backend architecture",
      "Normalized database schema design & indexing",
      "Protected routes, JWT & session auth workflows",
    ],
  },
  {
    id: "react-frontend",
    number: "02",
    title: "React & Modern Frontend Development",
    categoryTag: "UI & Component Architecture",
    description:
      "Building responsive, reusable, and maintainable interfaces using React.js, TypeScript, Tailwind CSS, and modern frontend practices.",
    techTags: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite", "Shadcn UI"],
    keyPractices: [
      "Modular, reusable component design system",
      "Strict TypeScript typings & zero runtime props errors",
      "Fluid responsive UI layout breakpoints",
    ],
  },
  {
    id: "business-workflows",
    number: "03",
    title: "Business Workflow Development",
    categoryTag: "SaaS & Operational Systems",
    description:
      "Turning real business requirements into practical digital workflows, dashboards, management systems, and user-facing applications.",
    techTags: ["Fleet & Logistics", "Digital Marketing SaaS", "Admin Dashboards", "Data Pipelines"],
    keyPractices: [
      "Translating operational pain points into UI features",
      "Interactive data tables, metrics & filter workflows",
      "Role-based access & management permission gates",
    ],
  },
  {
    id: "api-integrations",
    number: "04",
    title: "API & System Integration",
    categoryTag: "Service Connectors & Automation",
    description:
      "Designing and integrating APIs and external services to connect applications, data sources, and business workflows.",
    techTags: ["Google Search Console API", "LinkedIn API", "n8n Workflows", "OAuth 2.0", "Webhooks"],
    keyPractices: [
      "Secure API token handling & error boundary recovery",
      "Automated n8n marketing & data sync pipelines",
      "JSON response parsing & state hydration",
    ],
  },
  {
    id: "performance-responsive",
    number: "05",
    title: "Responsive & Performance-Focused Development",
    categoryTag: "Optimization & Usability",
    description:
      "Creating fast, responsive, mobile-friendly experiences with a focus on usability, performance, accessibility, and maintainable frontend architecture.",
    techTags: ["Core Web Vitals", "Lighthouse Optimization", "Lazy Loading", "Code Splitting"],
    keyPractices: [
      "Dynamic import lazy-loading & bundle splitting",
      "Optimized asset loading & WebP/PNG image delivery",
      "Accessible ARIA roles & keyboard navigation focus",
    ],
  },
  {
    id: "debugging-problem-solving",
    number: "06",
    title: "Debugging & Application Problem Solving",
    categoryTag: "Root-Cause Diagnostics",
    description:
      "Investigating frontend, API, database, and data-flow issues to identify root causes and deliver reliable, maintainable code fixes.",
    techTags: ["Structured Debugging", "Chrome DevTools", "Network Log Analysis", "Postman", "Git"],
    keyPractices: [
      "Empirical log extraction before patching symptoms",
      "API request payload & header payload verification",
      "Cross-browser testing & state mutation isolation",
    ],
  },
  {
    id: "android-dev",
    number: "07",
    title: "Android Application Development",
    categoryTag: "Mobile UI & Application Workflows",
    description:
      "Building practical Android applications with responsive mobile interfaces, API integration, authentication, database connectivity, and business-focused application workflows.",
    techTags: [
      "Android App Development",
      "Mobile UI Implementation",
      "REST API Integration",
      "Authentication & Workflows",
      "Database Integration",
      "Business Mobile Apps",
    ],
    keyPractices: [
      "Responsive Android mobile UI design & user workflows",
      "RESTful API integration & encrypted user auth",
      "Offline-first state synchronization & database connectivity",
    ],
  },
  {
    id: "technical-seo",
    number: "08",
    title: "Technical SEO & Website Optimization",
    categoryTag: "Indexing, Performance & Discoverability",
    description:
      "Optimizing websites and web applications for search visibility through technical SEO implementation, metadata, sitemap and robots configuration, crawlability, indexing, Search Console monitoring, and SEO-friendly web architecture.",
    techTags: [
      "Meta Titles & Descriptions",
      "Sitemap.xml Config",
      "Robots.txt",
      "Google Search Console",
      "Crawlability & Indexing",
      "SEO Web Architecture",
      "Performance Optimization",
    ],
    keyPractices: [
      "Structured OpenGraph metadata, JSON-LD schemas & sitemap generation",
      "Google Search Console data analysis & indexation diagnostics",
      "Core Web Vitals tuning for speed, usability & search rankings",
    ],
  },
];

const Expertise = () => {
  // Allow item 01 to be expanded by default
  const [expandedIds, setExpandedIds] = useState<string[]>(["fullstack-dev"]);

  const toggleItem = (id: string) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="expertise" className="py-24 section-padding bg-secondary/20 relative overflow-hidden" aria-labelledby="expertise-heading">
      {/* Primary Ambient Background Glow */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-primary/10 blur-[150px] -z-10" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header with Primary Eyebrow Accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-md mb-3">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-primary">EXPERTISE</span>
          </div>
          <h2 id="expertise-heading" className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 text-foreground">
            How I Approach <span className="text-gradient">Development</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Technical capabilities, software architecture workflow, performance optimization, and problem-solving methodologies.
          </p>
        </motion.div>

        {/* Expandable Technical Matrix Stack */}
        <div className="space-y-4">
          {expertiseList.map((item, index) => {
            const isExpanded = expandedIds.includes(item.id);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className={cn(
                  "rounded-2xl border transition-all duration-300 overflow-hidden backdrop-blur-xl relative",
                  isExpanded
                    ? "border-primary/40 bg-gradient-to-r from-primary/20 via-blue-950/20 to-black/40 shadow-[0_0_35px_hsl(var(--primary)/0.15)]"
                    : "border-white/10 bg-white/[0.02] hover:border-primary/25 hover:bg-white/[0.04]"
                )}
              >
                {/* Active Top Accent Line */}
                {isExpanded && (
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                )}

                {/* Accordion Header Button */}
                <button
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isExpanded}
                  className="w-full p-4 sm:p-5 md:p-6 text-left flex items-center justify-between gap-3 sm:gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-2xl"
                >
                  <div className="flex items-center gap-3 sm:gap-4 md:gap-6 min-w-0 flex-1">
                    <span
                      className={cn(
                        "font-mono text-sm sm:text-base md:text-lg font-bold shrink-0 transition-colors",
                        isExpanded ? "text-primary" : "text-muted-foreground/60"
                      )}
                    >
                      {item.number}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3
                        className={cn(
                          "font-display text-base sm:text-lg md:text-xl font-bold truncate transition-colors",
                          isExpanded ? "text-foreground" : "text-foreground/80"
                        )}
                      >
                        {item.title}
                      </h3>
                      <span className="text-xs font-mono text-primary/90 block truncate mt-0.5">
                        {item.categoryTag}
                      </span>
                    </div>
                  </div>

                  {/* Toggle Indicator Button */}
                  <div
                    className={cn(
                      "w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ml-2",
                      isExpanded
                        ? "border-primary/40 bg-primary/20 text-primary rotate-180"
                        : "border-white/10 bg-white/[0.02] text-muted-foreground/60"
                    )}
                  >
                    {isExpanded ? <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                  </div>
                </button>

                {/* Accordion Expanded Detail Panel */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 pt-1 md:px-6 md:pb-6 border-t border-primary/15 space-y-5">
                        {/* Description */}
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed pt-3">
                          {item.description}
                        </p>

                        {/* Engineering Practices Grid */}
                        <div>
                          <div className="text-xs font-mono font-bold uppercase tracking-wider text-primary mb-2.5 flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                            Core Engineering Practices
                          </div>
                          <div className="grid sm:grid-cols-3 gap-2">
                            {item.keyPractices.map((practice, pIdx) => (
                              <div
                                key={pIdx}
                                className="text-xs text-foreground/80 bg-black/40 border border-primary/20 rounded-xl p-2.5 flex items-start gap-2"
                              >
                                <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                                <span>{practice}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Tech Stack Badges */}
                        <div>
                          <div className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground/80 mb-2">
                            Technologies & Tools
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {item.techTags.map((tech) => (
                              <span
                                key={tech}
                                className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-primary bg-primary/10 border border-primary/30 px-2.5 py-1 rounded-lg"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
