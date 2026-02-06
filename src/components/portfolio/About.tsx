import { motion } from "framer-motion";
import { Code2, Rocket, Users, Zap } from "lucide-react";

const stats = [
  { number: "7+", label: "Months Experience", icon: Rocket },
  { number: "4+", label: "Projects Delivered", icon: Code2 },
  { number: "100%", label: "Client Satisfaction", icon: Users },
  { number: "24h", label: "Response Time", icon: Zap },
];

const About = () => {
  return (
    <section id="about" className="py-24 section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">About Me</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Passionate Developer, <span className="text-gradient">Problem Solver</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a <span className="text-foreground font-semibold">Full-Stack Developer</span> with
              over 7 months of intensive hands-on experience, rapidly growing from Junior to Full-time
              developer. I specialize in building bold, interactive web experiences that not only look
              stunning but also drive real business results.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              My expertise spans the entire development stack—from crafting pixel-perfect UIs with
              <span className="text-primary"> React, Next.js, and Tailwind</span> to building robust
              backends with <span className="text-primary">Node.js, Express, and various databases</span>.
              I've collaborated with DevOps teams on large-scale projects and maintained complex codebases.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Beyond my core skills, I leverage AI to tackle any challenge—there's no problem I can't
              solve. When you work with me, you get a developer who's committed to your success.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="glow-border-card glass rounded-2xl p-6 text-center group hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient mb-1">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
