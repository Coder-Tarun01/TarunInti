import { motion, AnimatePresence, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, Linkedin, Github, Phone, FileText } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { EnvelopeAnimation } from "@/components/ui/envelope-animation";


const WhatsAppIcon = (props: React.ComponentProps<'svg'>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="none"
    {...props}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.151-.174.2-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.2 0-.523.074-.797.372-.271.297-1.047 1.021-1.047 2.48 0 1.461 1.06 2.875 1.21 3.074.15.198 2.081 3.199 5.065 4.488.705.305 1.256.488 1.688.624.71.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.416-.074-.129-.272-.206-.572-.356z" />
    <path d="M11.944 0C5.347 0 0 5.373 0 12c0 2.213.619 4.286 1.706 6.069l-1.082 3.923 4.098-1.066A11.954 11.954 0 0 0 11.944 24c6.597 0 11.944-5.373 11.944-12S18.541 0 11.944 0zM12 21.821a9.8 9.8 0 0 1-4.991-1.378l-.358-.213-2.219.578.59-2.148-.231-.368A9.776 9.776 0 0 1 2.181 12c0-5.414 4.404-9.819 9.819-9.819 5.415 0 9.819 4.404 9.819 9.819 0 5.414-4.404 9.821-9.819 9.821z" />
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mrelnnlg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });

        // Reset after 6 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 6000);
      } else {
        setIsSubmitting(false);
        toast.error("Something went wrong. Please try again later.");
      }
    } catch (error) {
      setIsSubmitting(false);
      toast.error("Failed to send message. Please verify your connection.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 section-padding bg-secondary/20" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 id="contact-heading" className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Let's Build Something <span className="text-gradient">Amazing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Drop me a message and let's discuss
            how I can help bring your project to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
            viewport={{ once: true }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
                  className="glass rounded-2xl p-6 md:p-12 text-center min-h-[350px] md:min-h-[400px] flex flex-col items-center justify-center"
                >
                  {/* Success animation container */}
                  <div className="mb-8">
                    <EnvelopeAnimation />
                  </div>

                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3"
                  >
                    Message Sent! <span className="text-gradient">🎉</span>
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-muted-foreground text-lg"
                  >
                    I'll get back to you within <span className="text-primary font-semibold">24 hours</span>
                  </motion.p>

                  {/* Progress bar for auto-dismiss */}
                  <motion.div
                    initial={{ scaleX: 1 }}
                    animate={{ scaleX: 0 }}
                    transition={{ duration: 6, ease: "linear" }}
                    className="absolute bottom-0 left-0 right-0 h-1 bg-primary/50 origin-left rounded-b-2xl"
                  />
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  onSubmit={handleSubmit}
                  aria-label="Contact form"
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
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Premium Simple Contact Cards */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="glass rounded-2xl p-6 border-white/5 hover:border-primary/50 transition-colors duration-500 group relative overflow-hidden cursor-pointer"
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] w-[50%]" />
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 relative z-10 text-center sm:text-left">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
                  <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-semibold text-foreground/80 group-hover:text-foreground transition-colors">Email</h3>
                  <a
                    href="mailto:tarunsaikumarinti3@gmail.com"
                    className="text-primary font-bold text-base sm:text-lg block hover:underline underline-offset-4 break-words"
                  >
                    tarunsaikumarinti3@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="glass rounded-2xl p-6 border-white/5 hover:border-primary/50 transition-colors duration-500 group relative overflow-hidden cursor-pointer"
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] w-[50%]" />
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 relative z-10 text-center sm:text-left">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
                  <Phone className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-500" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-foreground/80 group-hover:text-foreground transition-colors">Phone</h3>
                  <a
                    href="tel:+919848151735"
                    className="text-primary font-bold text-lg sm:text-xl block hover:underline underline-offset-4"
                  >
                    +91 9848151735
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center sm:items-start"
            >
              <h3 className="font-display font-bold text-foreground mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, href: "https://www.linkedin.com/in/tarun-inti-/", label: "LinkedIn" },
                  { icon: Github, href: "https://github.com/Coder-Tarun01", label: "GitHub" },
                  { icon: WhatsAppIcon, href: "https://wa.me/919848151735", label: "WhatsApp" },
                  { icon: FileText, href: "/Tarun_inti.pdf", label: "Resume" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section >
  );
};

export default Contact;
