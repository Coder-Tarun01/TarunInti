import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send, Linkedin, Github, Twitter, CheckCircle2, Sparkles } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    
    // Reset after 4 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 section-padding bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Let's Build Something <span className="text-gradient">Amazing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Drop me a message and let's discuss 
            how I can help bring your project to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="glass rounded-2xl p-8 md:p-12 text-center min-h-[400px] flex flex-col items-center justify-center"
                >
                  {/* Success animation container */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                    className="relative mb-6"
                  >
                    {/* Outer ring */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: [0, 1.2, 1], opacity: [0, 0.5, 0.3] }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                      className="absolute inset-0 w-24 h-24 rounded-full border-2 border-primary/30"
                    />
                    {/* Inner circle with icon */}
                    <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center relative">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                      >
                        <CheckCircle2 className="w-12 h-12 text-primary" />
                      </motion.div>
                    </div>
                    {/* Sparkles */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ 
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                          x: [0, (i % 2 === 0 ? 1 : -1) * (30 + i * 10)],
                          y: [0, (i < 3 ? -1 : 1) * (20 + i * 5)]
                        }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                        className="absolute top-1/2 left-1/2"
                      >
                        <Sparkles className="w-4 h-4 text-primary" />
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3"
                  >
                    Message Sent! <span className="text-gradient">🎉</span>
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-muted-foreground text-lg"
                  >
                    I'll get back to you within <span className="text-primary font-semibold">24 hours</span>
                  </motion.p>

                  {/* Progress bar for auto-dismiss */}
                  <motion.div
                    initial={{ scaleX: 1 }}
                    animate={{ scaleX: 0 }}
                    transition={{ duration: 4, ease: "linear" }}
                    className="absolute bottom-0 left-0 right-0 h-1 bg-primary/50 origin-left rounded-b-2xl"
                  />
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="name" className="block text-foreground font-medium mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="h-12 bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-foreground font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="h-12 bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-foreground font-medium mb-2">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      required
                      className="min-h-[150px] bg-secondary/50 border-border focus:border-primary resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full relative overflow-hidden"
                    disabled={isSubmitting}
                  >
                    <AnimatePresence mode="wait">
                      {isSubmitting ? (
                        <motion.div
                          key="loading"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center gap-2"
                        >
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                          />
                          Sending...
                        </motion.div>
                      ) : (
                        <motion.span
                          key="send"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center gap-2"
                        >
                          Send Message
                          <Send className="w-4 h-4" />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Quick contact cards */}
            <div className="glass rounded-2xl p-6 glow-effect">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground">Email Me</h3>
                  <p className="text-muted-foreground text-sm">For project inquiries</p>
                </div>
              </div>
              <a
                href="mailto:hello@yourname.dev"
                className="text-primary hover:underline font-medium"
              >
                hello@yourname.dev
              </a>
            </div>

            <div className="glass rounded-2xl p-6 glow-effect">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground">Response Time</h3>
                  <p className="text-muted-foreground text-sm">I reply fast!</p>
                </div>
              </div>
              <p className="text-foreground font-medium">
                Usually within <span className="text-gradient">24 hours</span>
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-display font-bold text-foreground mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Github, href: "#", label: "GitHub" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
