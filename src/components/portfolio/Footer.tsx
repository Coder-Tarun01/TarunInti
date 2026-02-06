import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 section-padding border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="font-display text-lg sm:text-xl font-bold text-gradient whitespace-nowrap">
              INTI TARUN SAI KUMAR
            </div>
            <p className="text-muted-foreground text-xs tracking-wider uppercase">
              Full-Stack Developer
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-6">
              {["About", "Skills", "Projects", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
            <p className="text-muted-foreground/60 text-xs">
              © {currentYear} • Designed & Built with ⚡
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
