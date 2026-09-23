const normalizeSiteUrl = (url: string) => url.replace(/\/+$/, "");

export const SITE_URL = normalizeSiteUrl(
  import.meta.env.VITE_SITE_URL ?? "https://taruninti.in",
);

export const SITE_NAME = "Tarun.dev";

export const PERSON = {
  name: "Tarun Inti",
  fullName: "INTI Tarun Sai Kumar",
  username: "taruninti",
  alternateNames: [
    "Tarun",
    "INTI Tarun Sai Kumar",
    "Tarun Inti",
    "taruninti",
    "TarunInti",
    "tarun sai kumar",
    "itsk",
    "tarun sai",
    "inti tarun",
    "intitarun",
    "tarun portfolio",
    "Tarun Inti Portfolio",
    "Tarun Inti Developer",
  ],
  jobTitle: "Full Stack & Freelance Web Developer",
  location: "Visakhapatnam, India",
  email: "tarunsaikumarinti3@gmail.com",
  github: "https://github.com/Coder-Tarun01",
  linkedin: "https://www.linkedin.com/in/tarun-inti-/",
} as const;

export const SEO_DEFAULTS = {
  title: "Tarun Inti – Full Stack & Freelance Web Developer",
  description:
    "Tarun Inti (INTI Tarun Sai Kumar / taruninti) – Full Stack & Freelance MERN Stack Developer based in Visakhapatnam, India. Building scalable React, Node.js, and AI-integrated web applications for startups and businesses.",
  keywords: [
    // Primary / Broad
    "Full Stack Developer",
    "Full Stack Web Developer",
    "MERN Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Freelance Web Developer",
    "Web Developer for Hire",
    "JavaScript Developer",
    "Frontend Developer",
    "Backend Developer",
    // Niche / High-Intent
    "MERN Stack Developer for Hire",
    "React + Node.js Full Stack Developer",
    "AI-Integrated Web Developer",
    "Freelance MERN Developer India",
    "Full Stack Developer with AI Automation",
    "REST API Developer",
    "Tailwind CSS Developer",
    "n8n Automation Developer",
    "Full Stack Developer Portfolio India",
    "Full Stack Developer Portfolio Visakhapatnam",
    "Hire React Node Developer for Startup",
    // Personal / Brand
    "taruninti",
    "Tarun Inti",
    "INTI Tarun Sai Kumar",
    "tarun sai kumar",
    "tarun",
    "tarun portfolio",
    "tarun sai portfolio",
    "itsk",
    "tarun inti freelancer",
    "tarun inti full stack developer",
    "tarun sai",
    "inti tarun",
    "intitarun",
    "Tarun Inti Portfolio",
    "Tarun Inti Developer",
  ].join(", "),
  author: PERSON.fullName,
  ogImagePath: "/og-image.png",
  locale: "en_US",
  twitterCard: "summary_large_image" as const,
};

export const NOT_FOUND_SEO = {
  title: "Page Not Found | Tarun.dev",
  description:
    "The page you are looking for does not exist. Return to Tarun's Full Stack Developer portfolio.",
};

export const getCanonicalUrl = (path = "/") => {
  if (path === "/" || path === "") {
    return `${SITE_URL}/`;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath}`;
};

export const getOgImageUrl = (imagePath = SEO_DEFAULTS.ogImagePath) => {
  if (imagePath.startsWith("http")) {
    return imagePath;
  }

  return `${SITE_URL}${imagePath.startsWith("/") ? imagePath : `/${imagePath}`}`;
};
