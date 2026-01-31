import { MetadataRoute } from "next";
import { SITE_ORIGIN } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
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
    sitemap: `${SITE_ORIGIN}/sitemap.xml`,
  };
}
