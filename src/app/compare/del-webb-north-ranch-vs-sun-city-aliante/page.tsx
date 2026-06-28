import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/../components/navbar';
import Footer from '@/../components/footer';
import Breadcrumbs from '@/../components/Breadcrumbs';
import { FaqSection, AgentInsights, SeoHubLinks } from '@/../components/seo/SeoContentBlocks';
import { SITE_ORIGIN } from '@/lib/site';
import { altPrefix, metaDescriptionBlock, TITLE_SUFFIX } from '@/lib/hyperlocal';
import {
  buildBreadcrumbSchema,
  buildFaqPageSchema,
  serializeJsonLd,
} from '@/lib/schema';
import { sunCityAlianteComparison, COMPARE_SUN_CITY_URL } from '@/lib/seoContent';

export const metadata: Metadata = {
  title: `Del Webb North Ranch vs Sun City Aliante | ${TITLE_SUFFIX}`,
  description: metaDescriptionBlock(
    'Compare Del Webb North Ranch and Sun City Aliante 55+ communities in North Las Vegas—home age, HOA, amenities, location, and resale inventory'
  ),
  alternates: { canonical: COMPARE_SUN_CITY_URL },
  openGraph: {
    title: `Del Webb North Ranch vs Sun City Aliante | ${TITLE_SUFFIX}`,
    description:
      'Side-by-side comparison of Del Webb North Ranch and Sun City Aliante—two popular North Las Vegas 55+ communities for active adults.',
    url: COMPARE_SUN_CITY_URL,
    siteName: TITLE_SUFFIX,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${SITE_ORIGIN}/images/lifestyle/community-life.jpeg`,
        width: 1200,
        height: 630,
        alt: altPrefix('55+ community lifestyle'),
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Del Webb North Ranch vs Sun City Aliante | ${TITLE_SUFFIX}`,
    description: 'Compare two North Las Vegas 55+ communities side by side.',
  },
};

const { title, intro, rows, faq, competitorName } = sunCityAlianteComparison;

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: SITE_ORIGIN },
  { name: 'Community Comparison', url: COMPARE_SUN_CITY_URL },
]);

export default function ComparisonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildFaqPageSchema(faq)) }}
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
                {title}
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed">{intro}</p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white" aria-labelledby="comparison-table-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 id="comparison-table-heading" className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center font-playfair">
                Side-by-Side Comparison
              </h2>
              <div className="space-y-8">
                {rows.map((row) => (
                  <article
                    key={row.label}
                    className="rounded-lg border border-stone-200 bg-bg-light p-6 shadow-two"
                  >
                    <h3 className="text-xl font-bold text-primary mb-4 font-playfair">{row.label}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-white rounded-lg p-4 border border-stone-200">
                        <p className="text-sm font-semibold text-primary mb-1">Del Webb North Ranch</p>
                        <p className="text-text-dark">{row.delWebb}</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-stone-200">
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
              <p className="text-center mt-8">
                <Link
                  href="/schedule"
                  className="inline-block rounded-md bg-primary px-6 py-3 text-white font-semibold hover:bg-primary/90 transition-colors min-h-[44px]"
                >
                  Tour Del Webb North Ranch
                </Link>
              </p>
            </div>
          </div>
        </section>

        <AgentInsights insights="I specialize in Del Webb North Ranch and help buyers who are also considering Sun City Aliante. The right choice depends on whether you prioritize newer construction and proximity to Craig Ranch Park and the VA hospital, or a long-established Aliante neighborhood with mature landscaping. Tour both with current MLS listings—not outdated averages." />
        <FaqSection items={faq} heading={`Del Webb North Ranch vs ${competitorName} FAQ`} />
        <SeoHubLinks />
      </main>
      <Footer />
    </>
  );
}
