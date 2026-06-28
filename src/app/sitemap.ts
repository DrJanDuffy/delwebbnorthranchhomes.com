import { MetadataRoute } from "next";
import { CANONICAL_HOMEPAGE, SITE_ORIGIN } from "@/lib/site";
import { getVirtualToursWithEmbed } from "@/lib/old-site-data";
import { getAllFloorPlanSlugs } from "@/lib/floor-plans";
import { getAllFlyers } from "@/lib/flyers";
import { getAllAmenitySlugs } from "@/lib/seoContent";

/** Blog slugs – must match keys in src/app/blog/[slug]/page.tsx */
const BLOG_SLUGS = [
  "welcome-to-del-webb-north-ranch",
  "why-single-story-living-matters",
  "nevada-tax-benefits-for-retirees",
  "community-clubs-and-activities",
  "choosing-the-right-floor-plan",
  "first-year-living-experience",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const virtualTourWatchPages = getVirtualToursWithEmbed().map((t) => ({
    url: `${SITE_ORIGIN}/virtual-tours/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const floorPlanPages = getAllFloorPlanSlugs().map((slug) => ({
    url: `${SITE_ORIGIN}/floor-plans/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const flyerPages = getAllFlyers().map((f) => ({
    url: `${SITE_ORIGIN}/flyers/${f.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const blogPostPages = BLOG_SLUGS.map((slug) => ({
    url: `${SITE_ORIGIN}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  const amenitySubpages = getAllAmenitySlugs().map((slug) => ({
    url: `${SITE_ORIGIN}/amenities/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const seoGuidePages = [
    {
      url: `${SITE_ORIGIN}/guide/55-plus-living-north-las-vegas`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${SITE_ORIGIN}/markets/north-las-vegas/55-plus-cost-of-living`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${SITE_ORIGIN}/markets/north-las-vegas/market-report-june-2026`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${SITE_ORIGIN}/community/las-vegas-arts-district-midtown`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
    {
      url: `${SITE_ORIGIN}/compare/del-webb-north-ranch-vs-sun-city-aliante`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];

  return [
    // Homepage - Priority 1.0, Daily (trailing slash matches canonical)
    {
      url: CANONICAL_HOMEPAGE,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    // Main Pages - Priority 0.9, Daily
    {
      url: `${SITE_ORIGIN}/homes-for-sale`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE_ORIGIN}/buyers`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_ORIGIN}/sellers`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_ORIGIN}/home-value`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${SITE_ORIGIN}/schedule`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_ORIGIN}/community`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_ORIGIN}/floor-plans`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...floorPlanPages,
    // Secondary Pages - Priority 0.8
    {
      url: `${SITE_ORIGIN}/amenities`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...amenitySubpages,
    ...seoGuidePages,
    {
      url: `${SITE_ORIGIN}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_ORIGIN}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Tertiary Pages - Priority 0.7
    {
      url: `${SITE_ORIGIN}/lifestyle`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE_ORIGIN}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_ORIGIN}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    ...blogPostPages,
    // Lower Priority Pages
    {
      url: `${SITE_ORIGIN}/testimonials`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_ORIGIN}/virtual-tours`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...virtualTourWatchPages,
    {
      url: `${SITE_ORIGIN}/mortgage-calculator`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_ORIGIN}/why-choose-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_ORIGIN}/flyers`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    ...flyerPages,
    {
      url: `${SITE_ORIGIN}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_ORIGIN}/accessibility`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_ORIGIN}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_ORIGIN}/sitemap-page`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];
}
