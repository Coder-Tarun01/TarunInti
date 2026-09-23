import { useState } from "react";
import { motion, AnimatePresence } from "@/lib/motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Globe,
  Layers,
  Layout,
  Puzzle,
  RefreshCw,
  Sparkles,
  Zap,
  Server,
  Database,
  Lock,
  MessageSquare,
  Activity,
  Workflow,
  Smartphone,
  Wifi,
  BatteryCharging,
  Search,
  FileText,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Service = {
  id: string;
  number: string;
  title: string;
  shortTag: string;
  description: string;
  capabilities: string[];
};

const services: Service[] = [
  {
    id: "business-websites",
    number: "01",
    title: "Business Website Development",
    shortTag: "Web Presence & Enquiries",
    description:
      "Modern, responsive websites for businesses, startups, and local brands designed to establish a professional online presence and generate customer enquiries.",
    capabilities: [
      "Business & company websites",
      "Product showcase websites",
      "Service-based business pages",
      "WhatsApp & enquiry integration",
      "Contact & lead capture workflows",
      "Mobile-first responsive design",
    ],
  },
  {
    id: "fullstack-apps",
    number: "02",
    title: "Full-Stack & MERN Web Application Development",
    shortTag: "Frontend, APIs & Databases",
    description:
      "Full-stack MERN applications built with React, Node.js, Express, and databases, featuring secure REST APIs and high-performance user interfaces.",
    capabilities: [
      "React.js & TypeScript frontend UI",
      "Node.js, Express & FastAPI REST APIs",
      "MongoDB, PostgreSQL & MySQL databases",
      "Full-stack MERN & React + Node.js apps",
      "Secure authentication & OAuth",
      "RESTful API design & integration",
    ],
  },
  {
    id: "custom-saas",
    number: "03",
    title: "Custom Web Platforms & SaaS",
    shortTag: "Management Systems & Dashboards",
    description:
      "Custom web platforms designed around specific business requirements, from fleet & logistics management systems to internal tools and SaaS applications.",
    capabilities: [
      "Business management platforms",
      "SaaS product development",
      "Admin & analytics dashboards",
      "AI-integrated web workflows",
      "Custom business logic workflows",
      "Third-party API integrations",
    ],
  },
  {
    id: "api-integration",
    number: "04",
    title: "API & Third-Party Automation",
    shortTag: "Data Sync & Workflow Automation",
    description:
      "Connecting applications with external services and APIs to synchronize data, automate workflows with n8n, and extend application functionality.",
    capabilities: [
      "RESTful API integration & architecture",
      "n8n automation & AI workflow triggers",
      "Google Search Console API",
      "LinkedIn API integration",
      "External data synchronization",
      "Backend service connectors",
    ],
  },
  {
    id: "redesign-modernization",
    number: "05",
    title: "Website Redesign & Modernization",
    shortTag: "UI/UX & Performance Focus",
    description:
      "Transforming outdated websites into modern, responsive, user-friendly experiences with improved structure, usability, performance, and mobile responsiveness.",
    capabilities: [
      "Modern UI & aesthetic overhaul",
      "Mobile-first responsive redesign",
      "Component restructuring",
      "Performance & Core Web Vitals",
      "Usability & UX enhancements",
      "Clean TypeScript architecture",
    ],
  },
  {
    id: "android-app-development",
    number: "06",
    title: "Android App Development",
    shortTag: "Mobile Apps & Android Experiences",
    description:
      "Designing and developing responsive, user-friendly Android applications focused on practical business requirements, smooth user experiences, and reliable application workflows.",
    capabilities: [
      "Android application development",
      "Responsive mobile UI implementation",
      "API & backend integration",
      "Authentication & user workflows",
      "Database integration",
      "Business-focused mobile experiences",
    ],
  },
  {
    id: "technical-seo-optimization",
    number: "07",
    title: "Technical SEO & Website Optimization",
    shortTag: "Search Visibility & Technical Optimization",
    description:
      "Optimize websites and web applications for better search visibility through technical SEO implementation, metadata, sitemap and robots configuration, crawlability, indexing, Search Console monitoring, and SEO-friendly web architecture.",
    capabilities: [
      "Meta titles & descriptions",
      "Sitemap.xml configuration",
      "Robots.txt configuration",
      "Google Search Console",
      "Crawlability & indexing",
      "SEO-friendly web architecture",
      "Website performance optimization",
      "Backlink fundamentals",
    ],
  },
];

// Interactive Visual Components for each service showcase
const BusinessWebsitesVisual = () => (
  <div className="space-y-3 p-4">
    {/* Mockup Top Browser Bar */}
    <div className="flex items-center justify-between border-b border-primary/20 pb-2">
      <div className="flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-500/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
      </div>
      <div className="flex items-center gap-2 rounded-md bg-black/40 px-3 py-1 text-[10px] font-mono text-primary/80 border border-primary/20">
        <Globe className="h-3 w-3 text-primary" />
        https://business-brand.com
      </div>
      <span className="text-[10px] font-semibold text-primary">LIVE</span>
    </div>

    {/* Hero Banner Preview */}
    <div className="rounded-xl border border-primary/20 bg-gradient-to-r from-primary/20 via-blue-950/20 to-indigo-950/30 p-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-primary/10 blur-xl" />
      <span className="inline-block rounded-full bg-primary/10 border border-primary/30 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary mb-2">
        Premium Brand Experience
      </span>
      <h4 className="font-display text-sm font-bold text-foreground mb-1">
        Authentic Business Showcase & Product Range
      </h4>
      <p className="text-[11px] text-muted-foreground mb-3 max-w-xs">
        Crafted for high conversion, brand credibility & mobile usability.
      </p>
      <div className="flex items-center gap-2">
        <div className="inline-flex items-center gap-1 rounded-lg bg-emerald-500/20 border border-emerald-500/40 px-2.5 py-1 text-[10px] font-bold text-emerald-400">
          <MessageSquare className="h-3 w-3" />
          WhatsApp Enquiries
        </div>
        <div className="inline-flex items-center gap-1 rounded-lg bg-primary/20 border border-primary/40 px-2.5 py-1 text-[10px] font-bold text-primary">
          Product Catalogue
        </div>
      </div>
    </div>

    {/* Product Showcase Cards Grid Preview */}
    <div className="grid grid-cols-3 gap-2">
      {[1, 2, 3].map((item) => (
        <div key={item} className="rounded-lg border border-primary/15 bg-black/30 p-2.5 text-center">
          <div className="h-10 w-full rounded bg-primary/10 border border-primary/20 flex items-center justify-center mb-1.5">
            <Sparkles className="h-4 w-4 text-primary" />
          </div>
          <div className="h-2 w-12 bg-primary/40 rounded mx-auto mb-1" />
          <div className="h-1.5 w-8 bg-white/20 rounded mx-auto" />
        </div>
      ))}
    </div>
  </div>
);

const FullStackAppsVisual = () => (
  <div className="space-y-4 p-4">
    <div className="text-[10px] font-mono uppercase tracking-widest text-primary/80 mb-1 flex items-center gap-2">
      <Workflow className="h-3.5 w-3.5 text-primary" />
      Application Architecture & Flow
    </div>

    {/* Flow Diagram */}
    <div className="grid grid-cols-3 gap-2 text-center relative">
      <div className="rounded-xl border border-primary/30 bg-primary/10 p-3 shadow-[0_0_15px_hsl(var(--primary)/0.1)]">
        <Layout className="h-5 w-5 text-primary mx-auto mb-1.5" />
        <div className="text-[11px] font-bold text-foreground">Frontend UI</div>
        <div className="text-[9px] font-mono text-primary/70 mt-0.5">React · TypeScript</div>
      </div>

      <div className="rounded-xl border border-blue-500/30 bg-blue-950/30 p-3 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
        <Server className="h-5 w-5 text-blue-400 mx-auto mb-1.5" />
        <div className="text-[11px] font-bold text-foreground">REST API</div>
        <div className="text-[9px] font-mono text-blue-300/70 mt-0.5">FastAPI · Node.js</div>
      </div>

      <div className="rounded-xl border border-indigo-500/30 bg-indigo-950/30 p-3 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
        <Database className="h-5 w-5 text-indigo-400 mx-auto mb-1.5" />
        <div className="text-[11px] font-bold text-foreground">Database</div>
        <div className="text-[9px] font-mono text-indigo-300/70 mt-0.5">PostgreSQL / Mongo</div>
      </div>
    </div>

    {/* Live Auth & Workflow Bar */}
    <div className="rounded-xl border border-primary/20 bg-black/40 p-3 flex items-center justify-between text-[11px]">
      <div className="flex items-center gap-2 text-primary">
        <Lock className="h-3.5 w-3.5 text-primary" />
        <span className="font-mono text-[10px]">JWT / OAuth Protected Workflows</span>
      </div>
      <span className="rounded-full bg-primary/10 border border-primary/30 px-2 py-0.5 text-[9px] font-mono text-primary font-bold">
        Status 200 OK
      </span>
    </div>
  </div>
);

const CustomSaaSVisual = () => (
  <div className="space-y-3 p-4">
    {/* Dashboard Top Bar */}
    <div className="flex items-center justify-between border-b border-primary/20 pb-2">
      <div className="flex items-center gap-2">
        <Layers className="h-4 w-4 text-primary" />
        <span className="font-display text-xs font-bold text-foreground">Enterprise Admin Platform</span>
      </div>
      <span className="rounded-full bg-primary/10 border border-primary/30 px-2 py-0.5 text-[9px] font-mono text-primary">
        v2.4 Active
      </span>
    </div>

    {/* Metric Cards */}
    <div className="grid grid-cols-2 gap-2">
      <div className="rounded-lg border border-primary/20 bg-primary/10 p-2.5">
        <div className="text-[9px] font-medium text-muted-foreground uppercase">Operational Velocity</div>
        <div className="text-base font-bold text-primary mt-0.5 flex items-center gap-1">
          99.8%
          <Activity className="h-3.5 w-3.5 text-emerald-400" />
        </div>
      </div>
      <div className="rounded-lg border border-indigo-500/20 bg-indigo-950/20 p-2.5">
        <div className="text-[9px] font-medium text-muted-foreground uppercase">Active Workflows</div>
        <div className="text-base font-bold text-indigo-300 mt-0.5 flex items-center gap-1">
          1,420
          <Zap className="h-3.5 w-3.5 text-primary" />
        </div>
      </div>
    </div>

    {/* Data Table Rows Mock */}
    <div className="rounded-xl border border-primary/15 bg-black/40 p-2 space-y-1.5">
      {[
        { name: "Shipment Dispatch #8042", status: "Processing", color: "text-primary" },
        { name: "Driver Payroll Sync", status: "Completed", color: "text-emerald-400" },
      ].map((row, i) => (
        <div key={i} className="flex items-center justify-between text-[10px] px-2 py-1 bg-white/[0.02] rounded border border-white/5">
          <span className="text-foreground/90 font-medium">{row.name}</span>
          <span className={cn("font-mono font-bold text-[9px]", row.color)}>{row.status}</span>
        </div>
      ))}
    </div>
  </div>
);

const ApiIntegrationVisual = () => (
  <div className="space-y-4 p-4">
    <div className="text-[10px] font-mono uppercase tracking-widest text-primary/80 flex items-center gap-2">
      <Puzzle className="h-3.5 w-3.5 text-primary" />
      Connected Third-Party Ecosystem
    </div>

    {/* Pipeline Rows */}
    <div className="space-y-2">
      {[
        { name: "Google Search Console API", tag: "Analytics Sync", color: "border-primary/30 bg-primary/10 text-primary" },
        { name: "LinkedIn Publishing API", tag: "Social Automation", color: "border-blue-500/30 bg-blue-950/30 text-blue-300" },
        { name: "n8n Workflow Engine", tag: "Pipeline Trigger", color: "border-indigo-500/30 bg-indigo-950/30 text-indigo-300" },
      ].map((api, idx) => (
        <div key={idx} className={cn("rounded-xl border p-2.5 flex items-center justify-between text-xs", api.color)}>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="font-bold text-foreground">{api.name}</span>
          </div>
          <span className="text-[9px] font-mono uppercase tracking-wider rounded-md border border-primary/30 px-2 py-0.5 bg-black/40">
            {api.tag}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const WebsiteRedesignVisual = () => (
  <div className="space-y-3 p-4">
    <div className="flex items-center justify-between text-[10px] font-mono text-primary">
      <span>Legacy Outdated Site</span>
      <RefreshCw className="h-3.5 w-3.5 text-primary animate-spin" />
      <span className="text-emerald-400 font-bold">Modernized UI/UX</span>
    </div>

    {/* Before vs After Visual Box */}
    <div className="grid grid-cols-2 gap-2 relative">
      <div className="rounded-xl border border-red-500/20 bg-red-950/10 p-3 opacity-60 grayscale">
        <div className="text-[9px] font-bold text-red-400 mb-1 uppercase">Before Redesign</div>
        <div className="h-2 w-16 bg-red-400/30 rounded mb-1" />
        <div className="h-8 w-full bg-white/5 rounded mb-1" />
        <div className="h-1.5 w-10 bg-red-400/20 rounded" />
      </div>

      <div className="rounded-xl border border-emerald-500/40 bg-gradient-to-br from-primary/20 to-emerald-950/30 p-3 shadow-[0_0_20px_hsl(var(--primary)/0.15)] relative">
        <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
        <div className="text-[9px] font-bold text-emerald-400 mb-1 uppercase">After Modernization</div>
        <div className="h-2.5 w-20 bg-primary rounded mb-1.5" />
        <div className="h-7 w-full bg-primary/20 rounded border border-primary/30 mb-1 flex items-center px-2 text-[8px] text-primary font-bold">
          Mobile-First & High Speed
        </div>
      </div>
    </div>
  </div>
);

const AndroidAppVisual = () => (
  <div className="space-y-3 p-4">
    {/* Android Smartphone Top Status Bar & App Header */}
    <div className="flex items-center justify-between border-b border-primary/20 pb-2 text-[10px] font-mono text-primary/80">
      <div className="flex items-center gap-1.5 font-bold">
        <Smartphone className="h-3.5 w-3.5 text-primary" />
        <span>Android Native UI</span>
      </div>
      <div className="h-1.5 w-12 rounded-full bg-primary/30 border border-primary/40 hidden sm:block" />
      <div className="flex items-center gap-2 text-primary font-bold">
        <span className="text-[9px]">5G</span>
        <Wifi className="h-3 w-3" />
        <BatteryCharging className="h-3 w-3 text-emerald-400" />
      </div>
    </div>

    {/* Mobile Screen Frame & App Interface Mockup */}
    <div className="rounded-2xl border border-primary/30 bg-gradient-to-b from-primary/20 via-black/60 to-black/90 p-3 relative overflow-hidden shadow-[0_0_25px_hsl(var(--primary)/0.15)]">
      <div className="absolute -top-6 -right-6 h-20 w-20 rounded-full bg-primary/10 blur-lg" />
      
      {/* App Top Action Bar */}
      <div className="flex items-center justify-between mb-3 border-b border-white/5 pb-2">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-[9px] font-bold text-primary">
            APP
          </div>
          <div>
            <div className="text-[11px] font-bold text-foreground leading-tight">Business Mobile App</div>
            <div className="text-[8px] font-mono text-primary">Auth & Workflow Active</div>
          </div>
        </div>
        <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 text-[8px] font-mono text-emerald-400 font-bold flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          CONNECTED
        </span>
      </div>

      {/* App Content Cards */}
      <div className="space-y-2 mb-3">
        <div className="rounded-xl border border-primary/20 bg-white/[0.03] p-2 flex items-center justify-between text-[10px]">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
              <Lock className="h-3.5 w-3.5 text-primary" />
            </div>
            <div>
              <span className="font-bold text-foreground block">User Authentication</span>
              <span className="text-[8px] text-muted-foreground">Secure Tokens & Role Control</span>
            </div>
          </div>
          <span className="text-[9px] font-mono text-primary font-bold">Encrypted</span>
        </div>

        <div className="rounded-xl border border-indigo-500/20 bg-white/[0.03] p-2 flex items-center justify-between text-[10px]">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center">
              <Activity className="h-3.5 w-3.5 text-indigo-400" />
            </div>
            <div>
              <span className="font-bold text-foreground block">Real-time Data Sync</span>
              <span className="text-[8px] text-muted-foreground">REST API → PostgreSQL Data</span>
            </div>
          </div>
          <span className="text-[9px] font-mono text-indigo-300 font-bold">12ms latency</span>
        </div>
      </div>

      {/* Data Flow Indicator Bar */}
      <div className="rounded-lg border border-primary/20 bg-black/60 p-2 flex items-center justify-between text-[9px] font-mono text-primary">
        <span className="flex items-center gap-1 text-primary font-bold">
          <Smartphone className="h-3 w-3" /> Android UI
        </span>
        <span className="text-muted-foreground">→ REST API →</span>
        <span className="flex items-center gap-1 text-indigo-300 font-bold">
          <Database className="h-3 w-3" /> Database
        </span>
      </div>
    </div>
  </div>
);

const TechnicalSeoVisual = () => (
  <div className="space-y-3 p-4">
    {/* SEO Top Pipeline Header */}
    <div className="flex items-center justify-between border-b border-primary/20 pb-2 text-[10px] font-mono text-primary/80">
      <div className="flex items-center gap-1.5 font-bold">
        <Search className="h-3.5 w-3.5 text-primary" />
        <span>Search Engine Crawl & Indexation Pipeline</span>
      </div>
      <span className="rounded-full bg-primary/10 border border-primary/30 px-2 py-0.5 text-[8px] font-mono text-primary font-bold flex items-center gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
        SEARCH CONSOLE ACTIVE
      </span>
    </div>

    {/* Search Workflow Steps Grid */}
    <div className="grid grid-cols-2 gap-2 text-[10px]">
      <div className="rounded-xl border border-primary/20 bg-primary/10 p-2.5 space-y-1">
        <div className="flex items-center justify-between text-[9px] font-mono text-primary font-bold">
          <span>01. CRAWL & SITEMAP</span>
          <FileText className="h-3 w-3 text-primary" />
        </div>
        <div className="text-foreground font-semibold">Sitemap.xml & Robots.txt</div>
        <div className="text-[8px] text-muted-foreground">Googlebot 200 OK Status</div>
      </div>

      <div className="rounded-xl border border-blue-500/20 bg-blue-950/20 p-2.5 space-y-1">
        <div className="flex items-center justify-between text-[9px] font-mono text-blue-400 font-bold">
          <span>02. INDEXING & META</span>
          <Globe className="h-3 w-3 text-blue-400" />
        </div>
        <div className="text-foreground font-semibold">Meta Titles & Schema Markup</div>
        <div className="text-[8px] text-muted-foreground">100% Indexed Pages</div>
      </div>
    </div>

    {/* Search Visibility Metrics Indicator */}
    <div className="rounded-xl border border-primary/30 bg-black/60 p-2.5 flex items-center justify-between text-[10px]">
      <div className="flex items-center gap-2">
        <div className="h-7 w-7 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
          <TrendingUp className="h-4 w-4 text-primary" />
        </div>
        <div>
          <div className="font-bold text-foreground">Search Visibility & Speed Tuning</div>
          <div className="text-[8px] text-muted-foreground">Core Web Vitals & Indexation Verified</div>
        </div>
      </div>
      <span className="text-[9px] font-mono text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/30 px-2 py-1 rounded-md">
        Rankings +95%
      </span>
    </div>
  </div>
);

const Services = () => {
  const [activeId, setActiveId] = useState<string>("business-websites");

  const activeService = services.find((s) => s.id === activeId) || services[0];

  const renderVisual = (id: string) => {
    switch (id) {
      case "business-websites":
        return <BusinessWebsitesVisual />;
      case "fullstack-apps":
        return <FullStackAppsVisual />;
      case "custom-saas":
        return <CustomSaaSVisual />;
      case "api-integration":
        return <ApiIntegrationVisual />;
      case "redesign-modernization":
        return <WebsiteRedesignVisual />;
      case "android-app-development":
        return <AndroidAppVisual />;
      case "technical-seo-optimization":
        return <TechnicalSeoVisual />;
      default:
        return <BusinessWebsitesVisual />;
    }
  };

  return (
    <section id="services" className="py-24 section-padding bg-background relative overflow-hidden" aria-labelledby="services-heading">
      {/* Primary Ambient Background Glow */}
      <div className="pointer-events-none absolute top-1/3 left-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[140px] -z-10" />

      <div className="max-w-6xl mx-auto">
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
            <span className="text-xs font-bold uppercase tracking-wider text-primary">SERVICES</span>
          </div>
          <h2 id="services-heading" className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 text-foreground">
            What I Can Build <span className="text-gradient">For Your Business</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Practical web development solutions designed to establish brand credibility, automate workflows, and drive real business growth.
          </p>
        </motion.div>

        {/* Desktop Split Studio */}
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-8 items-start">
          {/* Left Service Selection List */}
          <div className="space-y-3">
            {services.map((service) => {
              const isActive = service.id === activeId;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveId(service.id)}
                  className={cn(
                    "w-full text-left p-3.5 sm:p-4 md:p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group relative overflow-hidden",
                    isActive
                      ? "border-primary/40 bg-gradient-to-r from-primary/20 via-blue-900/10 to-transparent shadow-[0_0_30px_hsl(var(--primary)/0.15)]"
                      : "border-white/10 bg-white/[0.02] hover:border-primary/25 hover:bg-white/[0.04]"
                  )}
                >
                  {/* Active Left Indicator Bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeServiceBar"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-blue-500 rounded-r-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  <div className="flex items-center gap-3 sm:gap-4 min-w-0 pr-2 flex-1">
                    <span
                      className={cn(
                        "font-mono text-xs sm:text-sm font-bold transition-colors shrink-0",
                        isActive ? "text-primary" : "text-muted-foreground/60 group-hover:text-primary/80"
                      )}
                    >
                      {service.number}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3
                        className={cn(
                          "font-display text-sm sm:text-base md:text-lg font-bold truncate transition-colors",
                          isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                        )}
                      >
                        {service.title}
                      </h3>
                      <span className="text-[11px] text-muted-foreground/70 block truncate mt-0.5">
                        {service.shortTag}
                      </span>
                    </div>
                  </div>

                  <div
                    className={cn(
                      "w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ml-2",
                      isActive
                        ? "border-primary/40 bg-primary/10 text-primary scale-105"
                        : "border-white/10 bg-white/[0.02] text-muted-foreground/50 group-hover:border-primary/30 group-hover:text-primary"
                    )}
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Active Showcase Workspace */}
          <div className="sticky top-28 rounded-3xl border border-primary/30 bg-[linear-gradient(160deg,hsl(222_47%_10%/0.95),hsl(222_47%_5%/0.98))] p-4 sm:p-6 md:p-8 backdrop-blur-2xl shadow-[0_0_50px_hsl(var(--primary)/0.15)] relative overflow-hidden">
            {/* Top Primary Line Accent */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="space-y-6"
              >
                {/* Header Tag */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
                    <Sparkles className="w-3.5 h-3.5" />
                    Service {activeService.number}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">{activeService.shortTag}</span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3 leading-tight">
                    {activeService.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {activeService.description}
                  </p>
                </div>

                {/* Custom Interactive SVG/HTML Visual Showcase */}
                <div className="rounded-2xl border border-primary/20 bg-black/40 backdrop-blur-md overflow-hidden">
                  {renderVisual(activeService.id)}
                </div>

                {/* Capabilities List */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                    Core Deliverables & Capabilities
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {activeService.capabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-2 text-xs text-foreground/90 bg-white/[0.02] border border-white/5 rounded-lg p-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-medium">Ready to discuss your project?</span>
                  <Button variant="hero" size="sm" className="rounded-xl font-bold" asChild>
                    <a href="#contact">
                      Start a Project
                      <ArrowUpRight className="ml-1.5 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
