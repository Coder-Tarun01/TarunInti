const normalizeSiteUrl = (url: string) => url.replace(/\/+$/, "");

export const SITE_URL = normalizeSiteUrl(
  import.meta.env.VITE_SITE_URL ?? "https://taruninti.vercel.app",
);

export const SITE_NAME = "Tarun.dev";

export const PERSON = {
  name: "Tarun",
  fullName: "INTI Tarun Sai Kumar",
  jobTitle: "Full Stack Developer",
  email: "tarunsaikumarinti3@gmail.com",
  github: "https://github.com/Coder-Tarun01",
  linkedin: "https://www.linkedin.com/in/tarun-inti-/",
} as const;

export const SEO_DEFAULTS = {
  title: "Tarun | Full Stack Developer – React, Next.js & Node.js Portfolio",
  description:
    "Portfolio of Tarun (INTI Tarun Sai Kumar), Full Stack Developer building scalable, production-ready web apps with React, Next.js, Node.js, and TypeScript. Explore projects and hire for your next build.",
  keywords: [
    "Tarun",
    "INTI Tarun Sai Kumar",
    "Full Stack Developer",
    "React developer",
    "Next.js developer",
    "Node.js developer",
    "TypeScript developer",
    "web developer portfolio",
    "freelance developer India",
    "production-ready web applications",
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
