import { SITE_ORIGIN } from '@/lib/site';
import type { FaqItem } from '@/lib/schema';

export const MIDTOWN_ARTS_DISTRICT_URL = `${SITE_ORIGIN}/community/las-vegas-arts-district-midtown`;

export const midtownArtsDistrictGuide = {
  slug: 'las-vegas-arts-district-midtown',
  title: 'Las Vegas Arts District & Midtown from North Las Vegas',
  datePublished: '2026-06-01',
  dateModified: '2026-06-28',
  aeoAnswer:
    'Midtown Las Vegas is the evolving cultural neighborhood north of Charleston Boulevard in the Las Vegas Arts District—art galleries, independent restaurants, First Friday events, and Midtown Plaza. Del Webb North Ranch residents in North Las Vegas 89086 reach the Arts District in roughly a 15–20 minute drive for dining, gallery walks, and downtown culture.',
  intro:
    'Del Webb North Ranch sits in North Las Vegas—but valley life includes downtown arts and culture. Midtown, the neighborhood north of Charleston in the Las Vegas Arts District, is where gallery walks, First Friday, and walkable dining meet a rapidly evolving urban core.',
  sections: [
    {
      id: 'what-is-midtown',
      title: 'What Is Midtown Las Vegas?',
      answer:
        'Midtown is the emerging neighborhood just north of Charleston Boulevard in the Las Vegas Arts District—a walkable area with art galleries, privately owned restaurants, events, and new residences at Midtown Plaza.',
      body: 'Midtown at the Arts District positions itself as the most rapidly evolving cultural center in the heart of Las Vegas. For active adults at Del Webb North Ranch, it is a destination for gallery nights, chef-driven dining, and First Friday—not a substitute for North Ranch clubhouse life, but a complement when you want downtown energy.',
    },
    {
      id: 'first-friday',
      title: 'First Friday and Arts District Events',
      answer:
        'First Friday is a long-standing Arts District tradition founded in 2002—monthly art walks, food, and live performances that draw locals from across the Las Vegas Valley.',
      body: 'Midtown promotes ongoing events including art walks, food festivals, pop-up markets, and live performances. First Friday remains a signature experience for residents who enjoy arts and culture outside the gated 55+ community.',
    },
    {
      id: 'from-north-ranch',
      title: 'Visiting from Del Webb North Ranch',
      answer:
        'Del Webb North Ranch is in North Las Vegas zip code 89086—north of the Strip corridor. The Arts District and Midtown are downtown Las Vegas destinations, typically reachable in a short drive when you want gallery nights or independent restaurants.',
      body: 'Many North Ranch residents balance daily life at the clubhouse—pickleball, pools, fitness—with occasional outings to Aliante, Craig Ranch Regional Park, and downtown cultural districts. Midtown fits that second category: plan a First Friday evening or a gallery afternoon, then return to single-story living in your gated North Las Vegas community.',
    },
  ],
  timeline: [
    { year: '1997', event: 'Wes Myles opens the Arts Factory; Mayor Oscar Goodman elected' },
    { year: '1999', event: 'Arts District momentum builds' },
    { year: '2002', event: 'Renamed the Las Vegas Arts District; Cindy Funkhouser founds First Friday' },
    { year: '2009', event: '18b Arts District sign installed on Casino Center Blvd.' },
    { year: '2014', event: 'Anthony Bourdain highlights Makers & Finders on Parts Unknown' },
    { year: '2016', event: 'Majestic Repertory Theatre opens; The English Hotel and The Pepper Club open' },
    { year: '2022', event: 'Continued Arts District growth' },
    { year: '2024', event: 'CNN calls the Arts District the most exciting neighborhood in Las Vegas; Midtown breaks ground' },
    { year: '2025', event: 'Midtown Plaza and The English Residences open' },
    { year: '2026', event: 'Midtown continues evolving as a cultural hub north of Charleston' },
  ],
  categories: [
    { label: 'Shop', description: 'Gallery retail and local makers in the Arts District' },
    { label: 'Dine', description: 'Independently owned restaurants—walkable Midtown dining' },
    { label: 'Live', description: 'Midtown residences and Arts District living (separate from North Ranch 55+)' },
    { label: 'Stay', description: 'The English Hotel and hospitality in Midtown' },
  ],
  faq: [
    {
      question: 'How far is Midtown Las Vegas from Del Webb North Ranch?',
      answer:
        'Midtown and the Las Vegas Arts District are downtown Las Vegas destinations—typically a roughly 15–20 minute drive from Del Webb North Ranch in North Las Vegas 89086, depending on traffic and route. Many North Ranch residents visit for First Friday, dining, and gallery walks.',
    },
    {
      question: 'What is First Friday in the Las Vegas Arts District?',
      answer:
        'First Friday is a monthly Arts District event with art walks, food, vendors, and live performances. It began in 2002 and remains one of the valley’s signature cultural outings—popular with active adults who enjoy arts and social events beyond their 55+ community.',
    },
    {
      question: 'Is Midtown Las Vegas the same as Del Webb North Ranch?',
      answer:
        'No. Midtown is in the Las Vegas Arts District north of Charleston Boulevard in downtown Las Vegas. Del Webb North Ranch is a gated 55+ active adult community in North Las Vegas zip code 89086. They are different neighborhoods serving different housing needs.',
    },
    {
      question: 'Why mention Midtown on a Del Webb North Ranch website?',
      answer:
        'Buyers relocating to North Las Vegas ask what life looks like beyond the community. Arts District and Midtown outings—First Friday, galleries, independent restaurants—help active adults understand the full Las Vegas Valley lifestyle from a North Ranch home base.',
    },
  ] satisfies FaqItem[],
  agentInsights:
    'When out-of-state buyers tour Del Webb North Ranch, they often ask what they will do besides pickleball and the pool. I point them to Craig Ranch Park and Aliante for everyday errands—and to the Arts District and Midtown when they want gallery nights or chef-driven dining downtown. North Ranch is your home base; Midtown is a cultural outing, not a competing 55+ community.',
  sourceUrl: 'https://midtownvegas.com/',
};
