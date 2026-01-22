import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.delwebbnorthranchhomes.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/static/",
          "/_next/",
          "/message/",
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
