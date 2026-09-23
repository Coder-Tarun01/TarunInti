import { Helmet } from "react-helmet-async";
import { PERSON, SITE_NAME, SITE_URL } from "@/lib/seo-config";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: PERSON.name,
      alternateName: [...PERSON.alternateNames],
      jobTitle: PERSON.jobTitle,
      url: SITE_URL,
      email: PERSON.email,
      sameAs: [PERSON.github, PERSON.linkedin],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Visakhapatnam",
        addressRegion: "Andhra Pradesh",
        addressCountry: "India",
      },
      homeLocation: {
        "@type": "Place",
        name: "Visakhapatnam, India",
      },
      knowsAbout: [
        "React",
        "Next.js",
        "Node.js",
        "Express.js",
        "FastAPI",
        "Python",
        "TypeScript",
        "JavaScript",
        "MERN Stack",
        "REST APIs",
        "Tailwind CSS",
        "AI-Integrated Web Development",
        "n8n Automation",
        "Full Stack Development",
        "Frontend Development",
        "Backend Development",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      description:
        "Full Stack & Freelance Web Developer portfolio of Tarun Inti (taruninti) showcasing production-ready React, MERN stack, and AI-integrated applications.",
      inLanguage: "en-US",
      publisher: {
        "@id": `${SITE_URL}/#person`,
      },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profilepage`,
      url: SITE_URL,
      name: `${PERSON.name} – ${PERSON.jobTitle} Portfolio`,
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
      about: {
        "@id": `${SITE_URL}/#person`,
      },
      mainEntity: {
        "@id": `${SITE_URL}/#person`,
      },
    },
  ],
};

const JsonLd = () => (
  <Helmet>
    <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
  </Helmet>
);

export default JsonLd;
