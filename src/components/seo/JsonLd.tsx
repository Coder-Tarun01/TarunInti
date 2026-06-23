import { Helmet } from "react-helmet-async";
import { PERSON, SITE_NAME, SITE_URL } from "@/lib/seo-config";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: PERSON.name,
      alternateName: PERSON.fullName,
      jobTitle: PERSON.jobTitle,
      url: SITE_URL,
      email: PERSON.email,
      sameAs: [PERSON.github, PERSON.linkedin],
      knowsAbout: [
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "Full Stack Development",
        "Web Application Development",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      description:
        "Full Stack Developer portfolio showcasing production-ready web applications and projects.",
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
