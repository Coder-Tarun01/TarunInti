import { CircularGallery, TestimonialItem } from "@/components/ui/circular-gallery";
import { Sparkles } from "lucide-react";

const testimonialData: TestimonialItem[] = [
  {
    id: "balaji-1",
    clientName: "Balaji Ch",
    clientRole: "Owner & Founder — Anitha Spices",
    companyOrProject: "Anitha Spices — Premium Business Website",
    photoUrl: "/clients/balaji.png",
    quote:
      "Honestly, I really loved how the website turned out for Anitha Spices. The design is clean, modern, and feels very professional without being complicated. I especially liked how you presented the products and the overall brand identity of the shop. The website feels smooth, responsive, and clearly made with attention to detail. You’ve done a great job turning a local business into a strong online presence.",
    linkedInUrl: "https://www.linkedin.com/in/balajich0307/",
    rating: 5,
    badge: "Client Project",
  },
  {
    id: "balaji-2",
    clientName: "Balaji Ch",
    clientRole: "Owner & Founder — Anitha Spices",
    companyOrProject: "Anitha Spices — Premium Business Website",
    photoUrl: "/clients/balaji.png",
    quote:
      "Honestly, I really loved how the website turned out for Anitha Spices. The design is clean, modern, and feels very professional without being complicated. I especially liked how you presented the products and the overall brand identity of the shop. The website feels smooth, responsive, and clearly made with attention to detail. You’ve done a great job turning a local business into a strong online presence.",
    linkedInUrl: "https://www.linkedin.com/in/balajich0307/",
    rating: 5,
    badge: "Client Project",
  },
  {
    id: "balaji-3",
    clientName: "Balaji Ch",
    clientRole: "Owner & Founder — Anitha Spices",
    companyOrProject: "Anitha Spices — Premium Business Website",
    photoUrl: "/clients/balaji.png",
    quote:
      "Honestly, I really loved how the website turned out for Anitha Spices. The design is clean, modern, and feels very professional without being complicated. I especially liked how you presented the products and the overall brand identity of the shop. The website feels smooth, responsive, and clearly made with attention to detail. You’ve done a great job turning a local business into a strong online presence.",
    linkedInUrl: "https://www.linkedin.com/in/balajich0307/",
    rating: 5,
    badge: "Client Project",
  },
  {
    id: "balaji-4",
    clientName: "Balaji Ch",
    clientRole: "Owner & Founder — Anitha Spices",
    companyOrProject: "Anitha Spices — Premium Business Website",
    photoUrl: "/clients/balaji.png",
    quote:
      "Honestly, I really loved how the website turned out for Anitha Spices. The design is clean, modern, and feels very professional without being complicated. I especially liked how you presented the products and the overall brand identity of the shop. The website feels smooth, responsive, and clearly made with attention to detail. You’ve done a great job turning a local business into a strong online presence.",
    linkedInUrl: "https://www.linkedin.com/in/balajich0307/",
    rating: 5,
    badge: "Client Project",
  },
  {
    id: "balaji-5",
    clientName: "Balaji Ch",
    clientRole: "Owner & Founder — Anitha Spices",
    companyOrProject: "Anitha Spices — Premium Business Website",
    photoUrl: "/clients/balaji.png",
    quote:
      "Honestly, I really loved how the website turned out for Anitha Spices. The design is clean, modern, and feels very professional without being complicated. I especially liked how you presented the products and the overall brand identity of the shop. The website feels smooth, responsive, and clearly made with attention to detail. You’ve done a great job turning a local business into a strong online presence.",
    linkedInUrl: "https://www.linkedin.com/in/balajich0307/",
    rating: 5,
    badge: "Client Project",
  },
  {
    id: "balaji-6",
    clientName: "Balaji Ch",
    clientRole: "Owner & Founder — Anitha Spices",
    companyOrProject: "Anitha Spices — Premium Business Website",
    photoUrl: "/clients/balaji.png",
    quote:
      "Honestly, I really loved how the website turned out for Anitha Spices. The design is clean, modern, and feels very professional without being complicated. I especially liked how you presented the products and the overall brand identity of the shop. The website feels smooth, responsive, and clearly made with attention to detail. You’ve done a great job turning a local business into a strong online presence.",
    linkedInUrl: "https://www.linkedin.com/in/balajich0307/",
    rating: 5,
    badge: "Client Project",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-20 sm:py-24 section-padding bg-background relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Primary Ambient Background Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[160px] -z-10" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4 shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Endorsements & Feedback</span>
          </div>

          <h2
            id="testimonials-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground"
          >
            What Clients Say <span className="text-gradient">About My Work</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Place your pointer inside the box to scroll, drag, or click through 3D testimonial cards.
          </p>
        </div>

        {/* Centered Framed Box Container for the 3D Stage */}
        <div className="w-full max-w-4xl lg:max-w-5xl mx-auto px-2 sm:px-4 z-10">
          <div className="relative w-full rounded-3xl border border-primary/30 bg-gradient-to-b from-slate-900/85 via-slate-950/95 to-black/98 p-4 sm:p-6 md:p-8 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.7),0_0_40px_hsl(var(--primary)/0.12)] overflow-hidden">
            {/* Ambient Corner Glows inside the Box */}
            <div className="absolute top-0 left-0 w-48 h-48 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary/15 rounded-full blur-3xl pointer-events-none" />

            <CircularGallery testimonials={testimonialData} radius={320} autoRotateSpeed={0} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
