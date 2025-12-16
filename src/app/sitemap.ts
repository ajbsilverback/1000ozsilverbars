import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { resources } from "@/data/resources";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.domain;

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/live-silver-prices`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/where-to-buy-1000-oz-silver-bars`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ];

  const resourcePages = resources.map((resource) => ({
    url: `${baseUrl}/resources/${resource.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...resourcePages];
}
