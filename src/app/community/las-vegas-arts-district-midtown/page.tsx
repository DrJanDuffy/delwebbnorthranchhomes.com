import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/../components/navbar';
import Footer from '@/../components/footer';
import Breadcrumbs from '@/../components/Breadcrumbs';
import { AgentInsights, FaqSection, SeoHubLinks } from '@/../components/seo/SeoContentBlocks';
import { SITE_ORIGIN } from '@/lib/site';
import { altPrefix, metaDescriptionBlock, TITLE_SUFFIX } from '@/lib/hyperlocal';
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFaqPageSchema,
  buildPlaceSchema,
  serializeJsonLd,
} from '@/lib/schema';
import { midtownArtsDistrictGuide, MIDTOWN_ARTS_DISTRICT_URL } from '@/lib/areaGuides';

const guide = midtownArtsDistrictGuide;

export const metadata: Metadata = {
  title: `Las Vegas Arts District & Midtown | From North Las Vegas | ${TITLE_SUFFIX}`,
  description: metaDescriptionBlock(
    'Las Vegas Arts District and Midtown guide for Del Webb North Ranch residents—First Friday, galleries, dining north of Charleston, and cultural outings from North Las Vegas 89086'
  ),
  alternates: { canonical: MIDTOWN_ARTS_DISTRICT_URL },
  openGraph: {
    title: `Arts District & Midtown Las Vegas | ${TITLE_SUFFIX}`,
    description: guide.aeoAnswer,
    url: MIDTOWN_ARTS_DISTRICT_URL,
    siteName: TITLE_SUFFIX,
    locale: 'en_US',
    type: 'article',
    publishedTime: guide.datePublished,
    modifiedTime: guide.dateModified,
    images: [
      {
        url: `${SITE_ORIGIN}/images/lifestyle/community-life.jpeg`,
        width: 1200,
        height: 630,
        alt: altPrefix('Las Vegas arts and culture outings'),
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Las Vegas Arts District & Midtown Guide',
    description: guide.aeoAnswer,
  },
};

const articleSchema = buildArticleSchema({
  headline: guide.title,
  description: guide.aeoAnswer,
  url: MIDTOWN_ARTS_DISTRICT_URL,
  image: `${SITE_ORIGIN}/images/lifestyle/community-life.jpeg`,
  datePublished: guide.datePublished,
  dateModified: guide.dateModified,
});

const midtownPlaceSchema = {
  ...buildPlaceSchema({
    name: 'Midtown Las Vegas | Arts District',
    description:
      'Midtown is the cultural neighborhood north of Charleston Boulevard in the Las Vegas Arts District—galleries, dining, First Friday, and Midtown Plaza.',
    url: guide.sourceUrl,
  }),
  '@id': `${MIDTOWN_ARTS_DISTRICT_URL}#midtown-place`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    addressCountry: 'US',
  },
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: SITE_ORIGIN },
  { name: 'Community & Area', url: `${SITE_ORIGIN}/community` },
  { name: 'Arts District & Midtown', url: MIDTOWN_ARTS_DISTRICT_URL },
]);

export default function MidtownArtsDistrictPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildFaqPageSchema(guide.faq)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(midtownPlaceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="pt-16 md:pt-20">
        <Breadcrumbs
          items={[
            { label: 'Del Webb North Ranch', href: '/' },
            { label: 'Community & Area', href: '/community' },
            { label: 'Arts District & Midtown', href: '/community/las-vegas-arts-district-midtown' },
          ]}
        />
        <section className="bg-primary text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                Las Vegas Arts District & Midtown | Outings from North Las Vegas
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-4">{guide.aeoAnswer}</p>
              <p className="text-base text-gray-200 leading-relaxed">{guide.intro}</p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {guide.sections.map((section) => (
                <article key={section.id} id={section.id} className="mb-12 last:mb-0">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-playfair">
                    {section.title}
                  </h2>
                  <p className="text-lg font-medium text-text-dark mb-4">{section.answer}</p>
                  <p className="text-text-dark mb-4">{section.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-bg-light" aria-labelledby="midtown-categories-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 id="midtown-categories-heading" className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center font-playfair">
                Midtown at the Arts District: Shop, Dine, Live, Stay
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {guide.categories.map((cat) => (
                  <div key={cat.label} className="rounded-lg border border-stone-200 bg-white p-5 shadow-two">
                    <h3 className="text-lg font-bold text-primary font-playfair">{cat.label}</h3>
                    <p className="text-text-dark mt-2 text-sm">{cat.description}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-text-dark text-center mt-6">
                Source:{' '}
                <a
                  href={guide.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent font-medium"
                >
                  midtownvegas.com
                </a>{' '}
                — independent Arts District destination, not affiliated with Del Webb North Ranch.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white" aria-labelledby="arts-timeline-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 id="arts-timeline-heading" className="text-2xl md:text-3xl font-bold text-primary mb-4 font-playfair">
                A Journey of Transformation: Las Vegas Arts District
              </h2>
              <p className="text-text-dark mb-8">
                From industrial roots to CNN calling the Arts District the most exciting neighborhood in Las Vegas,
                change is part of the district&apos;s identity—including Midtown breaking ground in 2024 and Midtown Plaza
                opening in 2025.
              </p>
              <ol className="space-y-4 border-l-2 border-primary/30 pl-6">
                {guide.timeline.map((item) => (
                  <li key={`${item.year}-${item.event}`} className="text-text-dark">
                    <span className="font-bold text-primary">{item.year}</span> — {item.event}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-primary mb-4 font-playfair">
                Your Home Base: Del Webb North Ranch
              </h2>
              <p className="text-text-dark mb-6">
                Single-story 55+ living in North Las Vegas—with resort amenities at home and Arts District culture a
                drive away when you want it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/schedule"
                  className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Schedule a North Ranch Tour
                </Link>
                <Link
                  href="/community"
                  className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors"
                >
                  Community & Area Guide
                </Link>
              </div>
            </div>
          </div>
        </section>

        <AgentInsights insights={guide.agentInsights} />
        <FaqSection items={guide.faq} heading="Arts District & Midtown FAQ" />
        <SeoHubLinks />
      </main>
      <Footer />
    </>
  );
}
