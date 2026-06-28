import {
  SITE_ORIGIN,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_SCHEMA,
} from "@/lib/site";

export const dynamic = "force-dynamic";

export async function GET() {
  const content = `# Del Webb North Ranch — Dr. Jan Duffy
> 55+ active adult community in North Las Vegas
## About
Dr. Jan Duffy is a Nevada-licensed real estate professional (S.0197614.LLC) with Berkshire Hathaway HomeServices Nevada Properties. She specializes in Del Webb North Ranch and helps buyers 55+ find homes in this North Las Vegas active adult community.
- **Brokerage:** Berkshire Hathaway HomeServices Nevada Properties
- **License:** Nevada S.0197614.LLC
- **Phone:** ${SITE_PHONE_DISPLAY}
- **Website:** ${SITE_ORIGIN}
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
- **Call/Text:** ${SITE_PHONE_SCHEMA}
- **Website:** ${SITE_ORIGIN}
`;
  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
