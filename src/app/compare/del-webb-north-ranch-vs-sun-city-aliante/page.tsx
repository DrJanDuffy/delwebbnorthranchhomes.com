import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/../components/navbar';
import Footer from '@/../components/footer';
import Breadcrumbs from '@/../components/Breadcrumbs';
import RealScoutListings from '@/../components/RealScoutListings';
import {
  AgentInsights,
  ComparisonQuickTable,
  FaqSection,
  SeoHubLinks,
} from '@/../components/seo/SeoContentBlocks';
import { SITE_ORIGIN } from '@/lib/site';
import { altPrefix, metaDescriptionBlock, TITLE_SUFFIX } from '@/lib/hyperlocal';
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFaqPageSchema,
  serializeJsonLd,
} from '@/lib/schema';
import { sunCityAlianteComparison, COMPARE_SUN_CITY_URL } from '@/lib/seoContent';

const comparison = sunCityAlianteComparison;

export const metadata: Metadata = {
  title: `${comparison.title} | North Las Vegas 55+ | ${TITLE_SUFFIX}`,
  description: metaDescriptionBlock(
    'Compare Del Webb North Ranch and Sun City Aliante—home age, HOA, golf, price range, amenities, and which North Las Vegas 55+ community fits your lifestyle'
  ),
  alternates: { canonical: COMPARE_SUN_CITY_URL },
  openGraph: {
    title: `${comparison.title} | ${TITLE_SUFFIX}`,
    description: comparison.aeoAnswer,
    url: COMPARE_SUN_CITY_URL,
    siteName: TITLE_SUFFIX,
    locale: 'en_US',
    type: 'article',
    publishedTime: comparison.datePublished,
    modifiedTime: comparison.dateModified,
    images: [
      {
        url: `${SITE_ORIGIN}/images/lifestyle/community-life.jpeg`,
        width: 1200,
        height: 630,
        alt: altPrefix('55+ community comparison North Las Vegas'),
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: comparison.title,
    description: comparison.aeoAnswer,
    images: [`${SITE_ORIGIN}/images/lifestyle/community-life.jpeg`],
  },
};

const articleSchema = buildArticleSchema({
  headline: comparison.title,
  description: comparison.aeoAnswer,
  url: COMPARE_SUN_CITY_URL,
  image: `${SITE_ORIGIN}/images/lifestyle/community-life.jpeg`,
  datePublished: comparison.datePublished,
  dateModified: comparison.dateModified,
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: SITE_ORIGIN },
  { name: 'Community Comparison', url: COMPARE_SUN_CITY_URL },
]);

export default function ComparisonPage() {
  const { title, intro, rows, faq, competitorName, aeoAnswer, quickCompare, chooseDelWebb, chooseSunCity } =
    comparison;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildFaqPageSchema(faq)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleSchema) }}
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
            { label: 'Community Comparison', href: '/compare/del-webb-north-ranch-vs-sun-city-aliante' },
          ]}
        />
        <section className="bg-primary text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                {title} | North Las Vegas 55+
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-4">{aeoAnswer}</p>
              <p className="text-base text-gray-200 leading-relaxed">{intro}</p>
            </div>
          </div>
        </section>

        <RealScoutListings h2Text="Del Webb North Ranch Homes for Sale | Compare Before You Tour" />

        <section className="py-12 md:py-16 bg-white" aria-labelledby="quick-compare-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 id="quick-compare-heading" className="text-2xl md:text-3xl font-bold text-primary mb-4 text-center font-playfair">
                Quick Comparison: Del Webb North Ranch vs {competitorName}
              </h2>
              <p className="text-text-dark text-center mb-8 max-w-2xl mx-auto">
                Use this table for a fast side-by-side view. Figures are general planning guides—verify HOA
                disclosures and MLS pricing on any home you are considering.
              </p>
              <ComparisonQuickTable rows={quickCompare} competitorName={competitorName} />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-bg-light" aria-labelledby="detailed-comparison-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 id="detailed-comparison-heading" className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center font-playfair">
                Detailed Comparison by Category
              </h2>
              <div className="space-y-8">
                {rows.map((row) => (
                  <article
                    key={row.label}
                    className="rounded-lg border border-stone-200 bg-white p-6 shadow-two"
                  >
                    <h3 className="text-xl font-bold text-primary mb-4 font-playfair">{row.label}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="rounded-lg p-4 border border-stone-200 bg-bg-light">
                        <p className="text-sm font-semibold text-primary mb-1">Del Webb North Ranch</p>
                        <p className="text-text-dark">{row.delWebb}</p>
                      </div>
                      <div className="rounded-lg p-4 border border-stone-200 bg-bg-light">
                        <p className="text-sm font-semibold text-primary mb-1">{competitorName}</p>
                        <p className="text-text-dark">{row.competitor}</p>
                      </div>
                    </div>
                    <p className="text-text-dark text-sm">
                      <span className="font-semibold text-primary">Takeaway: </span>
                      {row.verdict}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white" aria-labelledby="who-should-choose-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 id="who-should-choose-heading" className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center font-playfair">
                Which North Las Vegas 55+ Community Is Right for You?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <article className="rounded-lg border border-stone-200 p-6 shadow-two">
                  <h3 className="text-xl font-bold text-primary mb-4 font-playfair">
                    Choose Del Webb North Ranch if…
                  </h3>
                  <ul className="space-y-3">
                    {chooseDelWebb.map((item) => (
                      <li key={item} className="flex gap-2 text-text-dark">
                        <span className="text-primary font-bold" aria-hidden>
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6">
                    <Link href="/schedule" className="text-primary hover:text-accent font-medium">
                      Schedule a North Ranch tour →
                    </Link>
                  </p>
                </article>
                <article className="rounded-lg border border-stone-200 p-6 shadow-two">
                  <h3 className="text-xl font-bold text-primary mb-4 font-playfair">
                    Consider {competitorName} if…
                  </h3>
                  <ul className="space-y-3">
                    {chooseSunCity.map((item) => (
                      <li key={item} className="flex gap-2 text-text-dark">
                        <span className="text-primary font-bold" aria-hidden>
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-sm text-text-dark">
                    Dr. Jan Duffy specializes in Del Webb North Ranch and can discuss how {competitorName}{' '}
                    compares for your goals during a consultation.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-three mb-6">
                <Image
                  src="/images/lifestyle/community-life.jpeg"
                  alt={altPrefix('Active adult lifestyle at Del Webb North Ranch')}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 896px"
                  loading="lazy"
                />
              </div>
              <p className="text-text-dark text-center">
                Compare current resale listings,{' '}
                <Link href="/markets/north-las-vegas/market-report-june-2026" className="text-primary hover:text-accent font-medium">
                  June 2026 market trends
                </Link>
                , and{' '}
                <Link href="/markets/north-las-vegas/55-plus-cost-of-living" className="text-primary hover:text-accent font-medium">
                  cost of living
                </Link>{' '}
                before you choose between Del Webb North Ranch and {competitorName}.
              </p>
            </div>
          </div>
        </section>

        <AgentInsights insights="Buyers ask me this comparison every week. Sun City Aliante wins on golf and decades of resident clubs. Del Webb North Ranch wins on newer floor plans, gated scale, and proximity to Craig Ranch Park and the VA. I do not treat either community as ‘better’—I treat your floor plan, budget, and daily routine as the decision filter. Tour North Ranch with me first; we will talk honestly about whether Aliante makes more sense." />
        <FaqSection items={faq} heading={`Del Webb North Ranch vs ${competitorName} FAQ`} />

        <section className="py-12 md:py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-playfair">
                Ready to Tour Del Webb North Ranch?
              </h2>
              <p className="text-lg text-gray-100 mb-6">
                See North Ranch resale homes in person and get a straight comparison with {competitorName} for your
                budget and lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/schedule"
                  className="inline-flex items-center justify-center min-h-[48px] px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Schedule a Tour
                </Link>
                <Link
                  href="/homes-for-sale"
                  className="inline-flex items-center justify-center min-h-[48px] px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  View Homes for Sale
                </Link>
              </div>
            </div>
          </div>
        </section>

        <SeoHubLinks />
      </main>
      <Footer />
    </>
  );
}
