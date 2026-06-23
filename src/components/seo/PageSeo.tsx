import { Helmet } from "react-helmet-async";
import {
  SEO_DEFAULTS,
  SITE_NAME,
  getCanonicalUrl,
  getOgImageUrl,
} from "@/lib/seo-config";

interface PageSeoProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  path?: string;
  noIndex?: boolean;
  ogImagePath?: string;
  ogType?: "website" | "profile";
}

const PageSeo = ({
  title = SEO_DEFAULTS.title,
  description = SEO_DEFAULTS.description,
  keywords = SEO_DEFAULTS.keywords,
  author = SEO_DEFAULTS.author,
  path = "/",
  noIndex = false,
  ogImagePath = SEO_DEFAULTS.ogImagePath,
  ogType = "website",
}: PageSeoProps) => {
  const canonicalUrl = getCanonicalUrl(path);
  const ogImageUrl = getOgImageUrl(ogImagePath);
  const robotsContent = noIndex ? "noindex, nofollow" : "index, follow";

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content={SEO_DEFAULTS.locale} />

      <meta name="twitter:card" content={SEO_DEFAULTS.twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:image:alt" content={`${SITE_NAME} – ${description}`} />
    </Helmet>
  );
};

export default PageSeo;
