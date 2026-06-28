import type { MetadataRoute } from "next";
import { SITE, SERVICES } from "@/lib/site";

export const dynamic = "force-static";

const BLOG_SLUGS = [
  "tempe-home-insurance-guide-2026",
  "east-valley-auto-insurance-rates",
  "tempe-landlord-insurance-what-you-need",
  "arizona-renters-insurance-tempe",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

  const staticPages = [
    { url: base, priority: 1.0 },
    { url: `${base}/services`, priority: 0.9 },
    { url: `${base}/about`, priority: 0.8 },
    { url: `${base}/coverage`, priority: 0.8 },
    { url: `${base}/quote`, priority: 0.9 },
    { url: `${base}/contact`, priority: 0.7 },
    { url: `${base}/blog`, priority: 0.8 },
  ].map((p) => ({ ...p, lastModified: now, changeFrequency: "monthly" as const }));

  const servicePages = SERVICES.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const blogPages = BLOG_SLUGS.map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}
