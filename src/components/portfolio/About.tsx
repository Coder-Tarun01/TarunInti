import { motion, Variants } from "@/lib/motion";
import { Code2, Rocket, Users, Zap } from "lucide-react";

const stats = [
  { number: "9+", label: "Months Experience", icon: Rocket },
  { number: "8+", label: "Projects Delivered", icon: Code2 },
  { number: "100%", label: "Client Satisfaction", icon: Users },
  { number: "24h", label: "Response Time", icon: Zap },
];

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  return (
    <section id="about" className="py-24 section-padding" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">About Me</span>
          <h2 id="about-heading" className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Passionate Developer, <span className="text-gradient">Problem Solver</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.p variants={itemVariants} className="text-muted-foreground text-lg leading-relaxed">
              I'm <span className="text-foreground font-semibold">Tarun Inti</span> (<span className="text-foreground font-semibold">INTI Tarun Sai Kumar</span>), a <span className="text-foreground font-semibold">Full-Stack &amp; Freelance Web Developer</span> based in Visakhapatnam, India. With intensive hands-on experience, I specialize in building scalable web applications and AI-integrated products that drive real business impact.
            </motion.p>
            <motion.p variants={itemVariants} className="text-muted-foreground text-lg leading-relaxed">
              My expertise spans the complete development stack—from building responsive UIs with
              <span className="text-primary"> React, Next.js, and Tailwind CSS</span> to engineering robust REST APIs and backends using <span className="text-primary">Node.js, Express, FastAPI, and Python</span> alongside databases (MongoDB, PostgreSQL, MySQL).
            </motion.p>
            <motion.p variants={itemVariants} className="text-muted-foreground text-lg leading-relaxed">
              Beyond traditional MERN stack development, I specialize in <span className="text-primary">AI automation &amp; n8n workflow integration</span> to build intelligent web applications. Whether you need a freelance developer for hire or a full-stack partner for your startup, I bring end-to-end commitment to your build.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
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
