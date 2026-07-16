import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, ArrowRight } from "lucide-react";
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
    <nav
      aria-label="Primary navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-fade-in motion-reduce:animate-none ${
        isScrolled ? "glass py-3" : "py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between relative h-10 md:h-auto">
        <div className="md:hidden flex-shrink-0">
          <div className="flex items-center justify-center bg-primary/10 w-8 h-8 rounded-lg font-display font-black text-xs text-primary">
            IT
          </div>
        </div>

        <div className="md:static absolute left-1/2 -translate-x-1/2 md:translate-x-0 z-10">
          <a href="#" className="flex items-center gap-2 font-display text-[14px] min-[375px]:text-base sm:text-lg md:text-xl font-bold text-gradient group whitespace-nowrap">
            <div className="hidden md:flex items-center justify-center bg-primary/10 w-9 h-9 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0 font-display font-black text-sm text-primary tracking-tighter">
              IT
            </div>
            INTI TARUN SAI KUMAR
          </a>
        </div>

        <div className="flex items-center gap-2 md:gap-8">
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

          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-primary/10" aria-label="Open navigation menu">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[360px] border-l border-white/10 bg-background/95 backdrop-blur-xl flex flex-col justify-between p-6 overflow-hidden">
                {/* Background glow orbs for depth */}
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse" />
                <div className="absolute bottom-1/3 -left-12 w-36 h-36 bg-blue-500/5 rounded-full blur-2xl -z-10 pointer-events-none" />

                <div className="w-full">
                  <SheetHeader className="text-left mb-8">
                    <SheetTitle className="flex items-center gap-2 font-display text-xl font-bold text-gradient">
                      <div className="flex items-center justify-center bg-primary/10 w-8 h-8 rounded-lg font-display font-black text-xs text-primary animate-pulse">
                        IT
                      </div>
                      Navigation
                    </SheetTitle>
                  </SheetHeader>

                  <div className="flex flex-col gap-1.5">
                    {navLinks.map((link, idx) => (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between p-3.5 px-4 rounded-xl hover:bg-white/[0.03] active:bg-white/[0.06] text-foreground hover:text-primary transition-all duration-300 group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs font-semibold text-primary/70">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <span className="font-display text-base font-bold tracking-tight">
                            {link.name}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </a>
                    ))}
                    
                    <div className="mt-8 space-y-3 px-2">
                      <Button variant="outline" size="lg" className="w-full h-11 border-white/10 hover:bg-white/[0.03] text-sm font-semibold rounded-xl" asChild>
                        <a href="/Tarun_inti.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                          View Resume
                        </a>
                      </Button>
                      <Button variant="hero" size="lg" className="w-full h-11 text-sm font-bold rounded-xl" asChild>
                        <a href="#contact" onClick={() => setIsOpen(false)}>
                          Hire Me
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Available for Hire glass box */}
                <div className="relative p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 text-left backdrop-blur-md overflow-hidden mt-auto">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full blur-xl -z-10" />
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Available for hire</p>
                  </div>
                  <p className="text-xs text-foreground/90 font-medium leading-normal">Let's build something special.</p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
