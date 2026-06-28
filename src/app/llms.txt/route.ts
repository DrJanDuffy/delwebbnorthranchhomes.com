import { SITE_ORIGIN, SITE_PHONE_DISPLAY } from '@/lib/site';

export const dynamic = 'force-dynamic';

export async function GET() {
  const content = `# Del Webb North Ranch — Dr. Jan Duffy
> 55+ active adult community in North Las Vegas, Nevada

## About
Dr. Jan Duffy is an independent Nevada-licensed REALTOR® (S.0197614.LLC) with Berkshire Hathaway HomeServices Nevada Properties. She specializes exclusively in Del Webb North Ranch — a gated 55+ community with 394 single-story homes from $400K–$600K.

- **Brokerage:** Berkshire Hathaway HomeServices Nevada Properties
- **License:** Nevada S.0197614.LLC
- **Phone:** ${SITE_PHONE_DISPLAY}
- **Email:** sales@delwebbnorthranchhomes.com
- **Address:** 2290 Beauty Vista Avenue, North Las Vegas, NV 89086
- **Website:** ${SITE_ORIGIN}

## Services
- Del Webb North Ranch buyer representation (independent of builder sales)
- Resale home sales and free home value estimates
- Community tours and floor plan guidance
- Monthly Del Webb North Ranch market reports

## Coverage Area
North Las Vegas, NV 89086 — Del Webb North Ranch 55+ active adult community

## Key Pages
- [Home](${SITE_ORIGIN}/)
- [FAQ](${SITE_ORIGIN}/faq)
- [Floor Plans](${SITE_ORIGIN}/floor-plans)
- [North Las Vegas Area Guide](${SITE_ORIGIN}/north-las-vegas-area-guide)
- [Market Report](${SITE_ORIGIN}/del-webb-north-ranch-market-report)
- [Del Webb vs Sun City Aliante](${SITE_ORIGIN}/del-webb-vs-sun-city-aliante)
- [Contact](${SITE_ORIGIN}/contact)

## Contact
- **Call/Text:** ${SITE_PHONE_DISPLAY}
- **Website:** ${SITE_ORIGIN}
`;
  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
