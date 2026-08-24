import type { MetadataRoute } from "next";
import { articleHref, articles, categories } from "@/lib/articles";
import { locales, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteConfig.url, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/guides`, changeFrequency: "weekly", priority: 0.9 },
    ...categories.map((category) => ({
      url: `${siteConfig.url}/guides?category=${encodeURIComponent(category)}`,
      changeFrequency: "weekly" as const,
      priority: 0.7
    })),
    ...locales
      .filter((locale) => locale.code !== "en")
      .map((locale) => ({
        url: `${siteConfig.url}/lang/${locale.code}`,
        changeFrequency: "monthly" as const,
        priority: 0.5
      }))
  ];

  return [
    ...staticRoutes,
    ...articles.map((article) => ({
      url: `${siteConfig.url}${articleHref(article)}`,
      changeFrequency: article.status === "pending" ? ("monthly" as const) : ("weekly" as const),
      priority: article.status === "pending" ? 0.5 : 0.8
    }))
  ];
}
