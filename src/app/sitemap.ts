import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nwtr.in";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/how-it-works`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/for-tenants`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/for-owners`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/trust-security`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/properties`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}
