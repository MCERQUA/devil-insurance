import { MetadataRoute } from "next";
import { SITE, SERVICES } from "@/lib/site";
import { getAllPostSlugs } from "@/lib/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date().toISOString();

  const staticPages = [
    { url: `${base}/`, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${base}/services/`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/service-areas/`, priority: 0.85, changeFrequency: "monthly" as const },
    { url: `${base}/about/`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${base}/contact/`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${base}/quote/`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/faq/`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/blog/`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${base}/privacy/`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${base}/terms/`, priority: 0.3, changeFrequency: "yearly" as const },
  ].map((p) => ({ ...p, lastModified: now }));

  const servicePages = SERVICES.map((s) => ({
    url: `${base}/services/${s.slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const blogPages = getAllPostSlugs().map((slug) => ({
    url: `${base}/blog/${slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}
