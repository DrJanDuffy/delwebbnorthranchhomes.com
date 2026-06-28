import { SITE_ORIGIN } from '@/lib/site';
import { communityInfo } from '@/lib/communityData';
import type { FaqItem } from '@/lib/schema';

export const SEO_HUB_LINKS = [
  { href: '/guide/55-plus-living-north-las-vegas', label: '55+ Living Guide' },
  { href: '/markets/north-las-vegas/55-plus-cost-of-living', label: 'Cost of Living' },
  { href: '/markets/north-las-vegas/market-report-june-2026', label: 'Market Report' },
  { href: '/compare/del-webb-north-ranch-vs-sun-city-aliante', label: 'Community Comparison' },
  { href: '/community', label: 'Community & Area' },
  { href: '/floor-plans', label: 'Floor Plans' },
  { href: '/homes-for-sale', label: 'Homes for Sale' },
  { href: '/faq', label: 'FAQ' },
] as const;

export const AGENT_INSIGHTS_DEFAULT =
  'After hundreds of tours at Del Webb North Ranch, I help buyers compare floor plans by light, lot orientation, and resale value—not just square footage. Schedule a tour and I will walk you through current North Las Vegas 55+ listings with honest guidance on which homes are worth pursuing.';

export const guideFaq: FaqItem[] = [
  {
    question: 'What is 55+ living in North Las Vegas like?',
    answer:
      'North Las Vegas 55+ living centers on single-story homes, low-maintenance HOAs, and resort-style clubhouses. Del Webb North Ranch offers gated security, pools, pickleball, fitness, and social clubs in zip code 89086—minutes from the VA hospital, Craig Ranch Regional Park, and Aliante shopping.',
  },
  {
    question: 'How do I choose a 55+ community in North Las Vegas?',
    answer:
      'Compare HOA fees, home age, floor plan sizes, amenity packages, and resale inventory. Tour at least two communities, review recent sales, and work with a local REALTOR® who specializes in Del Webb North Ranch and nearby active adult neighborhoods before you make an offer.',
  },
  {
    question: 'Can someone under 55 live in Del Webb North Ranch?',
    answer:
      'At least one resident must be 55 or older per community rules. Other household members may be younger subject to HOA guidelines. Dr. Jan Duffy can explain age-verification and resale rules during a private community tour.',
  },
  {
    question: 'Are Del Webb North Ranch homes resale only?',
    answer:
      'Yes. Del Webb North Ranch is built out with 394 single-family resale homes—no new builder lots remain. Inventory turns over as residents relocate or downsize, so new listings appear regularly on the North Las Vegas MLS.',
  },
  {
    question: 'What floor plan series are available?',
    answer:
      'Del Webb North Ranch offers Cottage (1,285–1,509 sq ft), Classic (1,451–1,770 sq ft), and Retreat (1,716–2,015 sq ft) series—nine floor plans total. Compare plans, view virtual tours, and tour available resale homes with a local specialist.',
  },
  {
    question: 'How do I schedule a tour of Del Webb North Ranch?',
    answer:
      'Schedule an in-person consultation with Dr. Jan Duffy online or call (702) 500-1064. Tours typically include the clubhouse, amenities, and available resale homes so you can experience North Las Vegas 55+ living before you buy.',
  },
];

export const guideSections = [
  {
    id: 'buying-process',
    title: 'How to Buy a 55+ Home in North Las Vegas',
    answer:
      'Start with a community tour, compare floor plans, get pre-approved, then review current MLS resale listings. Del Webb North Ranch is resale-only, so timing and pricing strategy matter. A local specialist helps with HOA documents, age verification, and offer strategy.',
    body: 'Most buyers spend several weeks researching communities before touring. Focus on single-story layout, HOA value, and proximity to healthcare and recreation. Del Webb North Ranch sits near the VA Southern Nevada Healthcare System and Craig Ranch Regional Park—common priorities for 55+ buyers relocating to North Las Vegas.',
    links: [
      { href: '/buyers', label: 'Buyer guide' },
      { href: '/homes-for-sale', label: 'Current listings' },
      { href: '/schedule', label: 'Schedule a tour' },
    ],
  },
  {
    id: 'floor-plans',
    title: 'Floor Plans at Del Webb North Ranch',
    answer:
      'Nine single-story floor plans span three collections: Cottage, Classic, and Retreat—from about 1,285 to 2,015 sq ft. Compare bedrooms, baths, and outdoor living before you tour resale homes on the market.',
    body: 'Cottage plans suit buyers who want efficient two-bedroom living. Classic adds optional dens and three-bedroom layouts. Retreat plans offer the largest footprints for entertaining. View each plan page for square footage, price range, and virtual tours where available.',
    links: [
      { href: '/floor-plans', label: 'All floor plans' },
      { href: '/floor-plans/haven', label: 'Haven floor plan' },
      { href: '/floor-plans/pursuit', label: 'Pursuit floor plan' },
    ],
  },
  {
    id: 'amenities-lifestyle',
    title: 'Amenities and Active Adult Lifestyle',
    answer:
      'The 10,000 sq ft clubhouse includes pools, spa, fitness center, pickleball, billiards, social rooms, and event lawn. Low-maintenance exteriors let residents focus on clubs, fitness, and North Las Vegas recreation instead of yard work.',
    body: 'Amenity depth is a major reason buyers choose Del Webb North Ranch over older North Las Vegas communities. Tour the clubhouse and outdoor spaces to see how resident clubs and fitness programs fit your retirement lifestyle.',
    links: [
      { href: '/amenities', label: 'All amenities' },
      { href: '/amenities/resort-pool', label: 'Resort pool' },
      { href: '/lifestyle', label: 'Lifestyle' },
    ],
  },
  {
    id: 'compare-communities',
    title: 'Compare North Las Vegas 55+ Communities',
    answer:
      'Buyers often compare Del Webb North Ranch with established communities such as Sun City Aliante. Newer construction, HOA structure, and resale inventory differ—use comparison pages and tours to decide which North Las Vegas 55+ community fits your budget and lifestyle.',
    body: 'Hyperlocal comparison beats generic national guides. Review HOA fees, home ages, floor plan sizes, and drive times to healthcare before you choose. Dr. Jan Duffy specializes in Del Webb North Ranch and can discuss nearby alternatives honestly.',
    links: [
      { href: '/compare/del-webb-north-ranch-vs-sun-city-aliante', label: 'Del Webb vs Sun City Aliante' },
      { href: '/markets/north-las-vegas/55-plus-cost-of-living', label: 'Cost of living' },
      { href: '/community', label: 'Area guide' },
    ],
  },
] as const;

export const costOfLivingRows = [
  { category: 'Typical home price (Del Webb North Ranch)', amount: communityInfo.priceRange, note: 'Resale; varies by series and condition' },
  { category: 'HOA fee', amount: communityInfo.hoaFee, note: `Billed ${communityInfo.hoaBilling.toLowerCase()}` },
  { category: 'Property tax (Clark County)', amount: communityInfo.propertyTaxRate, note: 'Estimate; consult tax professional' },
  { category: 'Nevada state income tax', amount: 'None', note: 'Common draw for retirees' },
  { category: 'Utilities (typical single-story)', amount: '$200–$350/mo', note: 'Varies by season and usage' },
  { category: 'Healthcare (VA Southern Nevada)', amount: '~2 miles', note: 'Major medical center nearby' },
  { category: 'Grocery & shopping (Aliante)', amount: '~5 miles', note: 'Retail, dining, services' },
] as const;

export const costOfLivingFaq: FaqItem[] = [
  {
    question: 'What is the cost of living in Del Webb North Ranch?',
    answer:
      'Resale homes typically range from $400,000 to $600,000 with HOA fees around $215 per month (billed quarterly). Nevada has no state income tax. Budget for property taxes, utilities, and healthcare—many residents value proximity to VA Southern Nevada and Centennial Hills medical services.',
  },
  {
    question: 'How much are HOA fees at Del Webb North Ranch?',
    answer:
      'HOA fees are approximately $215 per month, billed quarterly. The fee supports gated security, clubhouse amenities, pools, fitness, pickleball, landscaping of common areas, and community maintenance—typical for a full-amenity North Las Vegas 55+ community.',
  },
  {
    question: 'Are property taxes high in North Las Vegas?',
    answer:
      'Clark County property taxes are generally moderate compared with many states—often around 1% of assessed value, but exact amounts depend on assessed value and exemptions. Consult a Nevada tax professional for a projection on a specific Del Webb North Ranch resale home.',
  },
  {
    question: 'Does Nevada tax retirement income?',
    answer:
      'Nevada has no state income tax, which is a common reason active adults relocate to North Las Vegas 55+ communities. Federal taxes may still apply; speak with a financial advisor about your full retirement tax picture.',
  },
];

export type ComparisonRow = {
  label: string;
  delWebb: string;
  competitor: string;
  verdict: string;
};

export const sunCityAlianteComparison = {
  slug: 'del-webb-north-ranch-vs-sun-city-aliante',
  competitorName: 'Sun City Aliante',
  title: 'Del Webb North Ranch vs Sun City Aliante',
  datePublished: '2026-06-01',
  dateModified: '2026-06-28',
  aeoAnswer:
    'Del Webb North Ranch (built 2020–2024, 394 homes, $400K–$600K) offers newer single-story resale homes in 89086 near Craig Ranch Park and the VA hospital. Sun City Aliante (built 2003–2008, 2,028 homes) is an established Aliante 55+ community with golf, mature landscaping, and a larger social network—often at a lower entry price.',
  intro:
    'Both are popular 55+ choices in North Las Vegas, but they serve different buyer priorities. Del Webb North Ranch is a newer, gated Del Webb community (built 2020–2024) in zip code 89086. Sun City Aliante is an established Del Webb-era community in the Aliante master plan with 2,028 resale homes and championship golf access.',
  quickCompare: [
    { factor: 'Year built', delWebb: '2020–2024', sunCity: '2003–2008' },
    { factor: 'Total homes', delWebb: '394', sunCity: '2,028' },
    { factor: 'Typical price range', delWebb: communityInfo.priceRange, sunCity: 'Often $300K–$450K (varies)' },
    { factor: 'HOA structure', delWebb: '~$215/mo (single association)', sunCity: 'Sun City HOA + Aliante master (dual fees)' },
    { factor: 'Golf on-site', delWebb: 'No community course', sunCity: 'Surrounds Aliante Golf Club' },
    { factor: 'Pool style', delWebb: 'Outdoor resort + heated lap pool', sunCity: 'Indoor lap pool & spa' },
    { factor: 'Healthcare proximity', delWebb: '~2 mi to VA Southern Nevada', sunCity: 'Aliante / Centennial Hills access' },
    { factor: 'Best for', delWebb: 'Newer construction & North Ranch floor plans', sunCity: 'Golf lifestyle & established clubs' },
  ],
  chooseDelWebb: [
    'You want a home built between 2020 and 2024 with modern Del Webb floor plans',
    'Proximity to Craig Ranch Regional Park and VA Southern Nevada matters',
    'You prefer a smaller, gated 394-home community in zip code 89086',
    'Pickleball, outdoor pools, and a 10,000 sq ft clubhouse fit your daily routine',
  ],
  chooseSunCity: [
    'Golf-course living and Aliante master-plan amenities are top priorities',
    'You value a large, mature 55+ social network built since 2003',
    'A lower entry price point on older resale stock fits your budget',
    'Indoor pool, tennis, and decades of resident clubs match your lifestyle',
  ],
  rows: [
    {
      label: 'Location',
      delWebb: 'North Las Vegas, NV 89086 (Beauty Vista Ave)',
      competitor: 'Aliante, North Las Vegas (Aliante Parkway area)',
      verdict:
        'Del Webb North Ranch is closer to Craig Ranch Regional Park and the VA hospital corridor; Sun City Aliante is anchored in the Aliante master plan with its own retail core.',
    },
    {
      label: 'Home age & construction',
      delWebb: 'Built 2020–2024; newer resale inventory',
      competitor: 'Established community with older resale stock',
      verdict:
        'Buyers wanting newer construction and modern floor plans often start at Del Webb North Ranch; buyers wanting a long-established social network may prefer Sun City Aliante.',
    },
    {
      label: 'Price range',
      delWebb: communityInfo.priceRange,
      competitor: 'Varies widely by size, age, and upgrades',
      verdict:
        'Compare specific MLS listings—not community averages—when budgeting. Tour both areas to see what your dollar buys today.',
    },
    {
      label: 'HOA & amenities',
      delWebb: `$215/mo; 10,000 sq ft clubhouse, pools, pickleball, fitness`,
      competitor: 'Mature clubhouse, golf, pools, extensive clubs',
      verdict:
        'Both offer resort-style 55+ amenities. Compare HOA value against the amenities you will actually use—golf vs pickleball, club schedule, and travel distance.',
    },
    {
      label: 'Inventory type',
      delWebb: 'Resale only—394 single-family homes, built out',
      competitor: 'Resale homes across multiple series and ages',
      verdict:
        'Work with a local REALTOR® to compare current MLS availability in both communities before you decide.',
    },
    {
      label: 'Home size range',
      delWebb: '1,285–2,015 sq ft (Cottage, Classic, Retreat)',
      competitor: 'Approx. 1,100–2,100+ sq ft; varied floor plans',
      verdict:
        'Del Webb North Ranch offers three defined series with consistent modern layouts. Sun City Aliante has broader variation across nearly two decades of construction.',
    },
    {
      label: 'Security',
      delWebb: 'Gated; virtual concierge and roving security',
      competitor: 'Controlled-access Sun City neighborhood within Aliante',
      verdict:
        'Both restrict through-traffic. Tour each community to compare entry experience and peace-of-mind features.',
    },
    {
      label: 'Best for',
      delWebb: 'Buyers wanting newer Del Webb homes near VA healthcare and Craig Ranch Park',
      competitor: 'Buyers wanting an established Aliante 55+ neighborhood with mature landscaping',
      verdict:
        'There is no universal winner—tour both communities and compare specific homes, not marketing brochures.',
    },
  ] satisfies ComparisonRow[],
  faq: [
    {
      question: 'Is Del Webb North Ranch or Sun City Aliante better?',
      answer:
        'Neither community wins for every buyer. Del Webb North Ranch suits buyers wanting newer 2020–2024 construction near Craig Ranch Park and the VA hospital. Sun City Aliante suits buyers prioritizing golf, mature landscaping, and an established 2,000+ home social network in Aliante. Tour both with current MLS listings.',
    },
    {
      question: 'Is Del Webb North Ranch newer than Sun City Aliante?',
      answer:
        'Yes. Del Webb North Ranch homes were built between 2020 and 2024. Sun City Aliante homes were built between 2003 and 2008. Newer construction vs mature neighborhood character is a common deciding factor for North Las Vegas buyers.',
    },
    {
      question: 'Which community has lower HOA fees?',
      answer:
        'HOA fees change over time. Del Webb North Ranch HOA is about $215 per month (billed quarterly) through a single association. Sun City Aliante residents typically pay a Sun City HOA plus an Aliante master association fee—compare current disclosures for any home, not community averages.',
    },
    {
      question: 'Does Sun City Aliante have golf?',
      answer:
        'Yes. Sun City Aliante surrounds the Aliante Golf Club, a major draw for golf-focused active adults. Del Webb North Ranch does not include a community golf course but offers pickleball, pools, fitness, and Craig Ranch Regional Park nearby.',
    },
    {
      question: 'Which community is closer to healthcare?',
      answer:
        'Del Webb North Ranch is about two miles from VA Southern Nevada Healthcare System—a common priority for 55+ buyers. Sun City Aliante offers access through the Aliante and Centennial Hills medical corridor. Compare drive times from specific homes you are considering.',
    },
    {
      question: 'Can Dr. Jan Duffy help me compare both communities?',
      answer:
        'Dr. Jan Duffy specializes in Del Webb North Ranch and helps buyers tour North Ranch resale homes while discussing how Sun City Aliante compares for budget, floor plan needs, and lifestyle priorities in North Las Vegas.',
    },
  ] satisfies FaqItem[],
};

export type AmenityPage = {
  slug: string;
  name: string;
  title: string;
  description: string;
  image: string;
  aeoAnswer: string;
  body: string;
  faq: FaqItem[];
};

export const amenityPages: AmenityPage[] = [
  {
    slug: 'resort-pool',
    name: 'Resort-Style Pool',
    title: 'Resort-Style Pool | Del Webb North Ranch Amenities',
    description:
      'Del Webb North Ranch resort-style pool in North Las Vegas 55+ community—heated lap pool, spa, and clubhouse access for active adults.',
    image: '/images/amenities/resort-pool.jpeg',
    aeoAnswer:
      'Del Webb North Ranch features a resort-style pool and separate heated lap pool at the 10,000 sq ft clubhouse. Residents use the pools for fitness, socializing, and year-round outdoor living in this North Las Vegas 55+ gated community.',
    body: 'The resort-style pool is a centerpiece of outdoor living at Del Webb North Ranch. Paired with a heated lap pool and spa, it supports both exercise and relaxation—without leaving the gated 55+ community in zip code 89086.',
    faq: [
      {
        question: 'Does Del Webb North Ranch have a resort-style pool?',
        answer:
          'Yes. The community clubhouse includes a resort-style pool plus a heated lap pool and spa. Pool access is part of the HOA amenity package for residents of this North Las Vegas 55+ community.',
      },
      {
        question: 'Is the pool open year-round?',
        answer:
          'Las Vegas weather supports outdoor pool use most of the year. Lap pool heating extends comfortable swimming into cooler months. Tour the clubhouse to see current amenity hours and resident programs.',
      },
    ],
  },
  {
    slug: 'pickleball-courts',
    name: 'Pickleball Courts',
    title: 'Pickleball Courts | Del Webb North Ranch Amenities',
    description:
      'Lighted pickleball courts at Del Webb North Ranch 55+ community in North Las Vegas—active adult sports and social play.',
    image: '/images/amenities/pickleball-courts.jpeg',
    aeoAnswer:
      'Del Webb North Ranch offers lighted pickleball courts at the community clubhouse. Pickleball is one of the most active resident sports in North Las Vegas 55+ communities, with clubs and scheduled play throughout the week.',
    body: 'Pickleball has become a defining active-adult amenity in Southern Nevada. Del Webb North Ranch invested in lighted courts so residents can play morning or evening, stay fit, and build social connections on-site.',
    faq: [
      {
        question: 'Are there pickleball courts at Del Webb North Ranch?',
        answer:
          'Yes. The community includes lighted pickleball courts near the clubhouse. Residents organize clubs and open play—common for 55+ buyers comparing North Las Vegas active adult communities.',
      },
    ],
  },
  {
    slug: 'fitness-center',
    name: 'Fitness Center',
    title: 'Fitness Center | Del Webb North Ranch Amenities',
    description:
      'Fitness center and fitness-on-demand at Del Webb North Ranch clubhouse—55+ wellness in North Las Vegas.',
    image: '/images/amenities/clubhouse.jpeg',
    aeoAnswer:
      'The Del Webb North Ranch clubhouse includes a fitness center and fitness-on-demand room. Residents use on-site equipment and group fitness instead of driving across North Las Vegas for daily workouts.',
    body: 'On-site fitness is a top priority for many 55+ buyers. The clubhouse fitness center supports strength, cardio, and group classes—paired with walking trails and pools for a full wellness routine.',
    faq: [
      {
        question: 'Is there a fitness center at Del Webb North Ranch?',
        answer:
          'Yes. The 10,000 sq ft clubhouse includes a fitness center and fitness-on-demand space. Tour the clubhouse to see equipment, class schedules, and how residents use wellness amenities daily.',
      },
    ],
  },
  {
    slug: 'clubhouse',
    name: 'Clubhouse',
    title: 'Clubhouse & Social Rooms | Del Webb North Ranch',
    description:
      '10,000 sq ft clubhouse at Del Webb North Ranch—billiards, social rooms, and events for North Las Vegas 55+ living.',
    image: '/images/amenities/clubhouse-main-entrance.jpeg',
    aeoAnswer:
      'Del Webb North Ranch opened its 10,000 sq ft clubhouse in October 2021. It includes billiards, social rooms, fitness, pools, and event space— the social hub for this gated North Las Vegas 55+ community.',
    body: 'The clubhouse is where resident clubs, events, and daily social life converge. For buyers comparing 55+ communities, touring the clubhouse reveals whether the lifestyle matches your expectations.',
    faq: [
      {
        question: 'How large is the Del Webb North Ranch clubhouse?',
        answer:
          'The clubhouse is 10,000 sq ft and opened October 16, 2021. It houses fitness, pools, billiards, social rooms, and community events—central to active adult life in North Las Vegas 89086.',
      },
    ],
  },
  {
    slug: 'dog-park',
    name: 'Dog Park',
    title: 'Dog Park | Del Webb North Ranch Amenities',
    description:
      'On-site dog park at Del Webb North Ranch 55+ community in North Las Vegas—pet-friendly active adult living.',
    image: '/images/amenities/dog-park.jpeg',
    aeoAnswer:
      'Del Webb North Ranch welcomes pets per city rules and includes an on-site dog park. Pet owners appreciate fenced play space without leaving the gated North Las Vegas 55+ community.',
    body: 'Pet policy matters to many relocating buyers. Del Webb North Ranch allows pets following City of North Las Vegas rules and provides a dedicated dog park for daily exercise and socializing.',
    faq: [
      {
        question: 'Are dogs allowed at Del Webb North Ranch?',
        answer:
          'Yes. Pets are welcome following City of North Las Vegas rules. The community includes a dog park. Review HOA pet guidelines for any specific breed or leash requirements before you buy.',
      },
    ],
  },
];

export function getAmenityBySlug(slug: string): AmenityPage | undefined {
  return amenityPages.find((page) => page.slug === slug);
}

export function getAllAmenitySlugs(): string[] {
  return amenityPages.map((page) => page.slug);
}

export function getFloorPlanFaq(planName: string, series: string, sqft: string): FaqItem[] {
  return [
    {
      question: `How large is the ${planName} floor plan?`,
      answer: `The ${planName} is a ${series} Series home at approximately ${sqft} sq ft in Del Webb North Ranch, North Las Vegas. Tour available resale homes to see layout, upgrades, and lot orientation—not just the base plan dimensions.`,
    },
    {
      question: `Is the ${planName} floor plan available for sale?`,
      answer: `The ${planName} is one of nine floor plans at Del Webb North Ranch. Resale availability changes weekly on the North Las Vegas MLS. View current homes for sale or schedule a tour with Dr. Jan Duffy to see ${planName} layouts on the market.`,
    },
  ];
}

export const GUIDE_URL = `${SITE_ORIGIN}/guide/55-plus-living-north-las-vegas`;
export const COST_OF_LIVING_URL = `${SITE_ORIGIN}/markets/north-las-vegas/55-plus-cost-of-living`;
export const COMPARE_SUN_CITY_URL = `${SITE_ORIGIN}/compare/del-webb-north-ranch-vs-sun-city-aliante`;
