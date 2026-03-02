import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: "career-build",
    title: "Career Build Job Portal",
    description: "A comprehensive job portal platform with advanced search, filters, and seamless user experience for job seekers and employers.",
    role: "Frontend Lead",
    techStack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    impact: "Streamlined job application process with intuitive UI/UX",
    gradient: "from-cyan-500/20 to-blue-500/20",
    link: "https://mycareerbuild.com/",
    image: "/mycareerbuild.png",
  },
  {
    id: "vfncc",
    title: "VFNCC Cultural Platform",
    description: "A vibrant cultural event website showcasing community activities, event registrations, and cultural heritage.",
    role: "UI Developer",
    techStack: ["React", "CSS3", "JavaScript", "Responsive Design"],
    impact: "Increased community engagement through modern web presence",
    gradient: "from-purple-500/20 to-pink-500/20",
    link: "https://vfncc.org/",
    image: "/vfncc.png",
  },
  {
    id: "techliv",
    title: "Techliv – IoT & Smart Homes",
    description: "A static website for Smart Home & Industrial IoT solutions, showcasing products and services for connected living.",
    role: "Frontend Developer",
    techStack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    impact: "Clean, informative presence for IoT and smart home solutions",
    gradient: "from-amber-500/20 to-orange-500/20",
    link: "https://techliv.net/",
    image: "/techliv.png",
  },
  {
    id: "portfolio",
    title: "Premium Developer Portfolio",
    description: "A high-end, responsive portfolio featuring advanced animations, glassmorphism, and premium aesthetics to showcase professional work.",
    role: "Full Stack Developer",
    techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "TypeScript"],
    impact: "Created a stunning visual identity and seamless user experience",
    gradient: "from-primary/20 to-teal-500/20",
    link: "https://taruninti.vercel.app/",
    image: "/portfolio.png",
  },
  {
    id: "logistics",
    title: "Logistics Management System",
    description: "A comprehensive logistics and fleet management solution with real-time tracking and automated dispatch.",
    role: "Frontend Developer",
    techStack: ["React", "Next.js", "Tailwind", "REST APIs"],
    impact: "Improved operational efficiency and tracking capabilities",
    link: "https://shipgen.net/",
    image: "/logistics.png",
  },
  {
    id: "horilla",
    title: "Horilla HRMS Platform",
    description: "Enterprise-grade Human Resource Management System with full employee lifecycle management and analytics.",
    role: "Full React Frontend",
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    impact: "Collaborated with DevOps team on large-scale deployment",
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    id: "sonicsync",
    title: "SonicSync – Synchronized Audio",
    description: "A multi-device synchronized audio playback system for Android, allowing a host to broadcast music to multiple speakers in perfect sync.",
    role: "Solo Creator & Developer",
    techStack: ["Kotlin", "Rust", "Sync Algorithms", "Android"],
    impact: "Achieved perfect audio synchronization with automatic drift correction",
    gradient: "from-blue-600/20 to-indigo-600/20",
    image: "/sonicsync1.png",
    link: "https://github.com/Coder-Tarun01/koyila",
  },
  {
    id: "ocr",
    title: "Tarun's OCR – Intel Scanner",
    description: "High-performance OCR application featuring advanced table detection and layout analysis by integrating a custom Rust engine with ML Kit.",
    role: "Solo Creator & Developer",
    techStack: ["Kotlin", "Rust", "ML Kit", "OpenCV", "Android"],
    impact: "Restored advanced table detection and high-accuracy mode using a custom Rust engine",
    gradient: "from-amber-600/20 to-orange-600/20",
    image: "/Tarunsocr1.jpeg",
    link: "https://github.com/Coder-Tarun01/OCR",
  },
];

const Projects = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="projects" className="py-24 section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">My Work</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects that showcase my expertise in building
            scalable, user-focused web applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 project-card-container"
        >
          {projects.map((project, index) => {
            const CardWrapper = "link" in project && project.link ? motion.a : motion.div;
            const wrapperProps =
              "link" in project && project.link
                ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
                : {};
            const isImageProject = "image" in project && project.image;

            return (
              <CardWrapper
                key={project.title}
                id={project.id}
                variants={itemVariants}
                onMouseMove={!isImageProject ? handleMouseMove : undefined}
                className={`group relative glass rounded-3xl overflow-hidden cursor-pointer block border-white/5 transition-all duration-500 min-h-[320px] lg:h-[310px] ${!isImageProject ? 'project-card' : 'hover:shadow-2xl hover:scale-[1.02]'}`}
                {...wrapperProps}
              >
                {isImageProject ? (
                  <>
                    {/* Default View for Image Project */}
                    <div className="relative p-8 h-full flex flex-col justify-between z-10 transition-opacity duration-500 group-hover:opacity-0">
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                            <span className="text-primary text-xs font-bold uppercase tracking-widest">{project.role}</span>
                          </div>
                          <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                            <ArrowUpRight className="w-5 h-5 text-muted-foreground" />
                          </div>
                        </div>
                        <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed line-clamp-2">
                          {project.description}
                        </p>
                      </div>
                      <div className="mt-8">
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <span key={tech} className="px-3 py-1.5 rounded-lg text-xs font-bold bg-white/5 text-muted-foreground border border-white/10">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Hover Image Overlay */}
                    <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transform scale-110 group-hover:scale-100 transition-transform duration-700 grayscale blur-[2px] md:grayscale-0 md:blur-0 group-hover:grayscale-0 group-hover:blur-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-display text-2xl font-bold text-white">{project.title}</h3>
                          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                            <ArrowUpRight className="w-5 h-5" />
                          </div>
                        </div>
                        <p className="text-white/80 text-sm line-clamp-2">{project.impact}</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Background Gradient Layer */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />

                    {/* Visual Content */}
                    <div className="relative p-8 h-full flex flex-col justify-between z-10">
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                            <span className="text-primary text-xs font-bold uppercase tracking-widest">{project.role}</span>
                          </div>
                          <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                            <ArrowUpRight className="w-5 h-5" />
                          </div>
                        </div>

                        <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h3>

                        <p className="text-muted-foreground leading-relaxed line-clamp-2 group-hover:text-foreground/80 transition-colors">
                          {project.description}
                        </p>

                        <div className="flex items-center gap-3 py-3 px-4 rounded-2xl bg-white/5 border border-white/10 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                          <span className="text-lg">✨</span>
                          <span className="text-sm font-medium text-foreground/90">{project.impact}</span>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="tech-tag px-3 py-1.5 rounded-lg text-xs font-bold bg-white/5 text-muted-foreground border border-white/10 group-hover:border-primary/30 group-hover:text-primary transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-primary/20 transition-all duration-500" />
                  </>
                )}
              </CardWrapper>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Want to see more or discuss a custom project?
          </p>
          <Button variant="hero" size="lg" className="rounded-full px-8" asChild>
            <a href="#contact">
              Let's Talk
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
