import { motion } from "framer-motion";
import { useState } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML/CSS", level: 98 },
      { name: "JavaScript", level: 92 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "Python", level: 75 },
      { name: "REST APIs", level: 88 },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", level: 82 },
      { name: "PostgreSQL", level: 78 },
      { name: "MySQL", level: 75 },
    ],
  },
];

interface SkillCardProps {
  category: typeof skillCategories[0];
  categoryIndex: number;
}

const SkillCard = ({ category, categoryIndex }: SkillCardProps) => {
  const [animationKey, setAnimationKey] = useState(0);

  const handleMouseEnter = () => {
    setAnimationKey(prev => prev + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: categoryIndex * 0.15 }}
      viewport={{ once: true }}
      className="glass rounded-2xl p-6 transition-all duration-300 hover:border-primary/50"
      onMouseEnter={handleMouseEnter}
    >
      <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-primary" />
        {category.title}
      </h3>
      <div className="space-y-5">
        {category.skills.map((skill, skillIndex) => (
          <div key={`${skill.name}-${animationKey}`}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-foreground font-medium">{skill.name}</span>
              <motion.span
                className="text-primary text-sm font-semibold"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: skillIndex * 0.08 }}
              >
                {skill.level}%
              </motion.span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{
                  duration: 1,
                  delay: skillIndex * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="h-full rounded-full relative overflow-hidden"
                style={{ background: "var(--gradient-primary)" }}
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  transition={{
                    duration: 1.5,
                    delay: 0.5 + skillIndex * 0.1,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 section-padding bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">My Skills</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Technologies I <span className="text-gradient">Master</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit that enables me to build anything from stunning landing pages
            to complex full-stack applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <SkillCard key={category.title} category={category} categoryIndex={categoryIndex} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
