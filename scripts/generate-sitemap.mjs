import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

const siteUrl = (process.env.VITE_SITE_URL ?? "https://taruninti.vercel.app").replace(
  /\/+$/,
  "",
);
const lastmod = new Date().toISOString().split("T")[0];

const routes = [
  {
    loc: `${siteUrl}/`,
    changefreq: "monthly",
    priority: "1.0",
  },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${route.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

const outputPath = resolve(process.cwd(), "public", "sitemap.xml");
writeFileSync(outputPath, sitemap, "utf8");

console.log(`Generated sitemap at ${outputPath}`);
