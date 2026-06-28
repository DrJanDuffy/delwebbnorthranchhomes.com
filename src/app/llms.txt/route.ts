import {
  SITE_ORIGIN,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_SCHEMA,
  SITE_PHONE_SMS,
  SITE_EMAIL,
  GBP_BUSINESS_NAME,
  GBP_DESCRIPTION,
  GBP_HOURS_DISPLAY,
  gbpFormattedAddress,
} from "@/lib/site";

export const dynamic = "force-dynamic";

export async function GET() {
  const content = `# ${GBP_BUSINESS_NAME}
> 55+ active adult community in North Las Vegas, Nevada

## About
${GBP_DESCRIPTION}

- **Brokerage:** Berkshire Hathaway HomeServices Nevada Properties
- **License:** Nevada S.0197614.LLC
- **Phone:** ${SITE_PHONE_DISPLAY}
- **Text:** ${SITE_PHONE_SMS}
- **Email:** ${SITE_EMAIL}
- **Website:** ${SITE_ORIGIN}
- **Address:** ${gbpFormattedAddress()}
- **Hours:** ${GBP_HOURS_DISPLAY}

## Services
- Del Webb North Ranch buyer representation (independent of builder sales)
- Resale home sales and free home value estimates
- Community tours and floor plan guidance
- Monthly Del Webb North Ranch market reports
- Relocation to North Las Vegas 55+ living

## Coverage Area
North Las Vegas, NV 89086 — Del Webb North Ranch 55+ active adult community

## Key Pages
- [Home](${SITE_ORIGIN}/)
- [Homes for Sale](${SITE_ORIGIN}/homes-for-sale)
- [Floor Plans](${SITE_ORIGIN}/floor-plans)
- [FAQ](${SITE_ORIGIN}/faq)
- [North Las Vegas Area Guide](${SITE_ORIGIN}/north-las-vegas-area-guide)
- [Market Report](${SITE_ORIGIN}/del-webb-north-ranch-market-report)
- [Del Webb vs Sun City Aliante](${SITE_ORIGIN}/del-webb-vs-sun-city-aliante)
- [Contact](${SITE_ORIGIN}/contact)
- [About](${SITE_ORIGIN}/about)

## Contact
- **Call:** ${SITE_PHONE_SCHEMA}
- **Text:** ${SITE_PHONE_SMS}
- **Website:** ${SITE_ORIGIN}
- **Address:** ${gbpFormattedAddress()}
`;
  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
