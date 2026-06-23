import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, Code2, ArrowRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      aria-label="Primary navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass py-3" : "py-5"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between relative h-10 md:h-auto">
        {/* Mobile Left Icon */}
        <div className="md:hidden flex-shrink-0">
          <div className="bg-primary/10 p-1.5 rounded-lg">
            <Code2 className="w-5 h-5 text-primary" />
          </div>
        </div>

        {/* Center Name (Mobile) / Full Logo (Desktop) */}
        <div className="md:static absolute left-1/2 -translate-x-1/2 md:translate-x-0 z-10">
          <a href="#" className="flex items-center gap-2 font-display text-[14px] min-[375px]:text-base sm:text-lg md:text-xl font-bold text-gradient group whitespace-nowrap">
            <div className="hidden md:block bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
              <Code2 className="w-6 h-6 text-primary" />
            </div>
            INTI TARUN SAI KUMAR
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 md:gap-8">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="hidden sm:flex border-primary/20 hover:bg-primary/5" asChild>
                <a href="/Tarun_inti.pdf" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </Button>
              <Button variant="hero" size="default" asChild>
                <a href="#contact">Hire Me</a>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button using Sheet */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-primary/10" aria-label="Open navigation menu">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l border-primary/20 bg-background/95 backdrop-blur-xl">
                <SheetHeader className="text-left mb-8">
                  <SheetTitle className="flex items-center gap-2 font-display text-xl font-bold text-gradient">
                    <Code2 className="w-5 h-5 text-primary" />
                    Navigation
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-2">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between p-4 rounded-xl hover:bg-primary/10 text-foreground font-semibold text-lg transition-all group"
                    >
                      {link.name}
                      <ArrowRight className="w-5 h-5 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </motion.a>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-6 px-2 space-y-3"
                  >
                    <Button variant="outline" size="xl" className="w-full border-primary/20" asChild>
                      <a href="/Tarun_inti.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                        View Resume
                      </a>
                    </Button>
                    <Button variant="hero" size="xl" className="w-full" asChild>
                      <a href="#contact" onClick={() => setIsOpen(false)}>
                        Hire Me
                      </a>
                    </Button>
                  </motion.div>
                </div>

                {/* Decorative bottom section */}
                <div className="absolute bottom-10 left-10 right-10 p-6 rounded-2xl bg-secondary/30 border border-white/5 space-y-2 text-left">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Available for hire</p>
                  <p className="text-sm font-semibold text-foreground">Let's build something special.</p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
