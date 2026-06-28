import { SITE_ORIGIN } from '@/lib/site';
import { communityInfo, homesitesByCollection } from '@/lib/communityData';
import type { FaqItem } from '@/lib/schema';

export const MARKET_REPORT_JUNE_2026_URL = `${SITE_ORIGIN}/markets/north-las-vegas/market-report-june-2026`;

export const marketReportJune2026 = {
  slug: 'market-report-june-2026',
  title: 'Del Webb North Ranch Market Report | June 2026',
  periodLabel: 'June 2026',
  datePublished: '2026-06-01',
  dateModified: '2026-06-28',
  aeoAnswer:
    'Del Webb North Ranch resale homes in June 2026 typically list from about $400,000 to $600,000 across Cottage, Classic, and Retreat series. Inventory turns over as residents relocate; buyers should compare floor plan, upgrades, and lot orientation—not just list price.',
  summary:
    'Del Webb North Ranch is fully built out with 394 single-family resale homes in North Las Vegas 89086. June 2026 activity reflects steady 55+ buyer demand, limited new construction nearby, and pricing shaped by series, condition, and outdoor living upgrades.',
  metrics: [
    {
      label: 'Typical list price range',
      value: communityInfo.priceRange,
      note: 'Resale; varies by series, upgrades, and lot',
    },
    {
      label: 'Active inventory',
      value: 'Changes weekly',
      note: 'View current MLS listings on homes for sale',
    },
    {
      label: 'Community size',
      value: `${communityInfo.totalHomes} homes`,
      note: 'Built 2020–2024; resale only',
    },
    {
      label: 'HOA fee',
      value: communityInfo.hoaFee,
      note: `Billed ${communityInfo.hoaBilling.toLowerCase()}`,
    },
    {
      label: 'Floor plan footprint',
      value: '1,285–2,015 sq ft',
      note: 'Single-story; 2–3 bedrooms',
    },
    {
      label: 'Buyer profile',
      value: '55+ active adult',
      note: 'Relocating and local downsizers',
    },
  ],
  sections: [
    {
      id: 'inventory',
      title: 'Resale Inventory at Del Webb North Ranch',
      answer:
        'Every home at Del Webb North Ranch is resale—there are no builder lots left. Listings appear as owners relocate, downsize again, or adjust lifestyle needs, so June inventory is a snapshot, not a fixed count.',
      body: 'Buyers comparing North Las Vegas 55+ communities should focus on which floor plans are actually on the market today. Cottage plans often attract value-focused buyers. Classic and Retreat plans draw buyers who want dens, three bedrooms, or larger entertaining space. Tour the clubhouse and compare specific homes—not community averages.',
      links: [
        { href: '/homes-for-sale', label: 'Current listings' },
        { href: '/floor-plans', label: 'Floor plans' },
      ],
    },
    {
      id: 'pricing',
      title: 'Pricing by Collection (June 2026)',
      answer:
        'Resale pricing at Del Webb North Ranch generally spans the low $400,000s to the low $600,000s, with Retreat series and upgraded lots at the upper end and Cottage series at the entry of the range.',
      body: `Cottage homes (${homesitesByCollection.cottage.sqftRange} sq ft, ${homesitesByCollection.cottage.count} homesites) suit buyers who want efficient two- and three-bedroom living. Classic plans (${homesitesByCollection.classic.sqftRange} sq ft) add optional dens and flexible layouts. Retreat plans (${homesitesByCollection.retreat.sqftRange} sq ft) command premiums when outdoor living, golf views, or premium upgrades are present.`,
      links: [
        { href: '/markets/north-las-vegas/55-plus-cost-of-living', label: 'Cost of living' },
        { href: '/home-value', label: 'Home value estimate' },
      ],
    },
    {
      id: 'buyers',
      title: 'What Buyers Should Know in June 2026',
      answer:
        '55+ buyers still prioritize single-story layout, HOA value, healthcare access, and clubhouse amenities. Del Webb North Ranch sits near VA Southern Nevada, Craig Ranch Regional Park, and Aliante retail—common decision drivers for North Las Vegas relocations.',
      body: 'Nevada has no state income tax, which remains a draw for retirees leaving higher-tax states. When you find a North Ranch home you like, age verification, HOA documents, and resale rules matter—work with a specialist who knows Del Webb North Ranch before you write an offer.',
      links: [
        { href: '/buyers', label: 'Buyer guide' },
        { href: '/schedule', label: 'Schedule a tour' },
      ],
    },
    {
      id: 'sellers',
      title: 'What Sellers Should Know in June 2026',
      answer:
        'Sellers in Del Webb North Ranch compete on condition, floor plan appeal, and pricing strategy—not on new-build incentives, because the community is built out.',
      body: 'Strong presentation, accurate pricing against recent North Ranch resales, and marketing that highlights 55+ lifestyle amenities help homes stand out. Dr. Jan Duffy provides pricing guidance, staging recommendations, and MLS exposure tailored to Del Webb North Ranch buyers.',
      links: [
        { href: '/sellers', label: 'Seller guide' },
        { href: '/home-value', label: 'Free home value' },
      ],
    },
  ],
  collectionRows: [
    {
      series: 'Cottage',
      sqft: homesitesByCollection.cottage.sqftRange,
      homes: homesitesByCollection.cottage.count,
      note: 'Entry to mid-range pricing; efficient layouts',
    },
    {
      series: 'Classic',
      sqft: homesitesByCollection.classic.sqftRange,
      homes: homesitesByCollection.classic.count,
      note: 'Popular for optional dens and three-bedroom plans',
    },
    {
      series: 'Retreat',
      sqft: homesitesByCollection.retreat.sqftRange,
      homes: homesitesByCollection.retreat.count,
      note: 'Largest footprints; premiums for upgrades and views',
    },
  ],
  faq: [
    {
      question: 'What is the Del Webb North Ranch market like in June 2026?',
      answer:
        'Del Webb North Ranch is a built-out 55+ gated community with resale homes typically listing between $400,000 and $600,000. Inventory changes weekly on the North Las Vegas MLS. Buyers should tour current listings and compare floor plans, not rely on outdated averages.',
    },
    {
      question: 'Are Del Webb North Ranch home prices going up or down?',
      answer:
        'Pricing follows North Las Vegas resale trends, floor plan demand, and home condition. Retreat and upgraded Classic homes often lead the upper range; Cottage plans anchor the entry. Request a current MLS snapshot for the specific series you are targeting.',
    },
    {
      question: 'How many homes are for sale at Del Webb North Ranch?',
      answer:
        'Active listing count changes throughout the month. View homes for sale on this site for current Del Webb North Ranch MLS inventory, or schedule a tour with Dr. Jan Duffy for an updated market briefing.',
    },
    {
      question: 'Who helps with Del Webb North Ranch market reports?',
      answer:
        'Dr. Jan Duffy specializes in Del Webb North Ranch 55+ real estate in North Las Vegas. She provides buyer tours, seller pricing guidance, and hyperlocal market analysis for this community—not generic valley-wide averages.',
    },
  ] satisfies FaqItem[],
  agentInsights:
    'In June 2026 tours, buyers still ask about light, lot orientation, and HOA value before they ask about $10,000 in list price. The North Ranch homes that move fastest are priced against real comps in the same series—not against Sun City Aliante or Summerlin averages. I publish these reports so you have context; the live MLS feed is always the source of truth for today’s inventory.',
  disclaimer:
    'Market figures are for general planning and SEO reference. List prices, days on market, and sale prices change daily on the North Las Vegas MLS. This is not financial or tax advice. Contact Dr. Jan Duffy for a current Del Webb North Ranch market analysis.',
};
