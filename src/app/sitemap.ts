import type { MetadataRoute } from "next";
import { selectedWork, siteUrl } from "@/content/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const workPages: MetadataRoute.Sitemap = selectedWork.map((item) => ({
    url: `${siteUrl}/work/${item.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    ...workPages,
  ];
}
