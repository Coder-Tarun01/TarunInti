import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Career Build Job Portal",
    description: "A comprehensive job portal platform with advanced search, filters, and seamless user experience for job seekers and employers.",
    role: "Frontend Lead",
    techStack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    impact: "Streamlined job application process with intuitive UI/UX",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "VFNCC Cultural Platform",
    description: "A vibrant cultural event website showcasing community activities, event registrations, and cultural heritage.",
    role: "UI Developer",
    techStack: ["React", "CSS3", "JavaScript", "Responsive Design"],
    impact: "Increased community engagement through modern web presence",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Logistics Management System",
    description: "A comprehensive logistics and fleet management solution with real-time tracking and automated dispatch.",
    role: "Frontend Developer",
    techStack: ["React", "Next.js", "Tailwind", "REST APIs"],
    impact: "Improved operational efficiency and tracking capabilities",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Horilla HRMS Platform",
    description: "Enterprise-grade Human Resource Management System with full employee lifecycle management and analytics.",
    role: "Full React Frontend",
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    impact: "Collaborated with DevOps team on large-scale deployment",
    gradient: "from-orange-500/20 to-red-500/20",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative glass rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Base gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50`} />
              
              {/* Default content - visible by default */}
              <div className="relative p-6 md:p-8 transition-all duration-500 group-hover:opacity-0 group-hover:scale-95">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-primary text-sm font-medium">{project.role}</span>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mt-1">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <ArrowUpRight className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Hover overlay - full details */}
              <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-primary/20 p-6 md:p-8 flex flex-col justify-between opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-primary text-sm font-semibold uppercase tracking-wider">{project.role}</span>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <p className="text-primary text-sm font-medium flex items-center gap-2">
                    <span className="text-lg">✨</span> {project.impact}
                  </p>
                </div>

                {/* Tech Stack with staggered animation */}
                <div className="space-y-3">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Tech Stack</span>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/20 text-primary border border-primary/30 transform transition-all duration-300"
                        style={{ transitionDelay: `${techIndex * 50}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View project indicator */}
                <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-primary flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Want to see more or discuss a custom project?
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">
              Let's Talk
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
