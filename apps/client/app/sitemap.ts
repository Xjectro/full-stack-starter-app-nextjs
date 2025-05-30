import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: process.env.NEXT_PUBLIC_CLIENT_URL!,
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 1,
    },
  ];
}
