import {
  SITE_ORIGIN,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_SCHEMA,
  SITE_PHONE_SMS,
  GBP_BUSINESS_NAME,
  GBP_DESCRIPTION,
  GBP_HOURS_DISPLAY,
  gbpFormattedAddress,
} from "@/lib/site";

export const dynamic = "force-dynamic";

export async function GET() {
  const content = `# ${GBP_BUSINESS_NAME}
> 55+ active adult community in North Las Vegas
## About
${GBP_DESCRIPTION}
- **Brokerage:** Berkshire Hathaway HomeServices Nevada Properties
- **License:** Nevada S.0197614.LLC
- **Phone:** ${SITE_PHONE_DISPLAY}
- **Text:** ${SITE_PHONE_SMS}
- **Website:** ${SITE_ORIGIN}
- **Address:** ${gbpFormattedAddress()}
- **Hours:** ${GBP_HOURS_DISPLAY}
## Services
- Del Webb North Ranch home buying and selling
- Community tours and personalized showings
- Home valuation and market analysis
- Relocation to North Las Vegas 55+ living
## Coverage Area
North Las Vegas, Las Vegas, Henderson, and surrounding Southern Nevada communities
## Key Pages
- [Home](${SITE_ORIGIN}/)
- [Homes for Sale](${SITE_ORIGIN}/homes-for-sale)
- [Floor Plans](${SITE_ORIGIN}/floor-plans)
- [Contact](${SITE_ORIGIN}/contact)
- [About](${SITE_ORIGIN}/about)
- [FAQ](${SITE_ORIGIN}/faq)
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
