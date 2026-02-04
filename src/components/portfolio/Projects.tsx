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
              className="group relative glass rounded-2xl overflow-hidden glow-effect"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50 group-hover:opacity-70 transition-opacity duration-300`} />
              
              <div className="relative p-6 md:p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-primary text-sm font-medium">{project.role}</span>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mt-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                    <ArrowUpRight className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Impact */}
                <p className="text-foreground/80 text-sm font-medium mb-4 italic">
                  "✨ {project.impact}"
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
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
