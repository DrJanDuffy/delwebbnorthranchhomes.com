import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/../components/navbar';
import Footer from '@/../components/footer';
import Breadcrumbs from '@/../components/Breadcrumbs';
import RealScoutListings from '@/../components/RealScoutListings';
import { FaqSection, AgentInsights, SeoHubLinks } from '@/../components/seo/SeoContentBlocks';
import { SITE_ORIGIN } from '@/lib/site';
import { altPrefix, metaDescriptionBlock, TITLE_SUFFIX } from '@/lib/hyperlocal';
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFaqPageSchema,
  serializeJsonLd,
} from '@/lib/schema';
import { marketReportJune2026, MARKET_REPORT_JUNE_2026_URL } from '@/lib/marketReports';

const report = marketReportJune2026;

export const metadata: Metadata = {
  title: `${report.title} | ${TITLE_SUFFIX}`,
  description: metaDescriptionBlock(
    'June 2026 Del Webb North Ranch market report—resale inventory, pricing by Cottage Classic Retreat series, and 55+ buyer trends in North Las Vegas 89086'
  ),
  alternates: { canonical: MARKET_REPORT_JUNE_2026_URL },
  openGraph: {
    title: `${report.title} | ${TITLE_SUFFIX}`,
    description: report.aeoAnswer,
    url: MARKET_REPORT_JUNE_2026_URL,
    siteName: TITLE_SUFFIX,
    locale: 'en_US',
    type: 'article',
    publishedTime: report.datePublished,
    modifiedTime: report.dateModified,
    images: [
      {
        url: `${SITE_ORIGIN}/images/lifestyle/community-life.jpeg`,
        width: 1200,
        height: 630,
        alt: altPrefix('Del Webb North Ranch community'),
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: report.title,
    description: report.aeoAnswer,
    images: [`${SITE_ORIGIN}/images/lifestyle/community-life.jpeg`],
  },
};

const articleSchema = buildArticleSchema({
  headline: report.title,
  description: report.summary,
  url: MARKET_REPORT_JUNE_2026_URL,
  image: `${SITE_ORIGIN}/images/lifestyle/community-life.jpeg`,
  datePublished: report.datePublished,
  dateModified: report.dateModified,
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: SITE_ORIGIN },
  { name: 'Market Report', url: MARKET_REPORT_JUNE_2026_URL },
]);

export default function MarketReportJune2026Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildFaqPageSchema(report.faq)) }}
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
            { label: 'Market Report', href: '/markets/north-las-vegas/market-report-june-2026' },
          ]}
        />
        <section className="bg-primary text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-200 mb-3">
                {report.periodLabel} · North Las Vegas 55+
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                Del Webb North Ranch Market Report | June 2026
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed">{report.aeoAnswer}</p>
            </div>
          </div>
        </section>

        <RealScoutListings h2Text="Current Del Webb North Ranch Listings | June 2026 Market" />

        <section className="py-12 md:py-16 bg-white" aria-labelledby="market-metrics-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 id="market-metrics-heading" className="text-2xl md:text-3xl font-bold text-primary mb-4 text-center font-playfair">
                June 2026 Market Snapshot
              </h2>
              <p className="text-text-dark text-center mb-8 max-w-2xl mx-auto">{report.summary}</p>
              <div className="overflow-x-auto rounded-lg border border-stone-200 shadow-two">
                <table className="w-full text-left">
                  <thead className="bg-bg-light">
                    <tr>
                      <th scope="col" className="px-4 py-3 font-semibold text-primary">
                        Metric
                      </th>
                      <th scope="col" className="px-4 py-3 font-semibold text-primary">
                        June 2026
                      </th>
                      <th scope="col" className="px-4 py-3 font-semibold text-primary hidden sm:table-cell">
                        Notes
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {report.metrics.map((row) => (
                      <tr key={row.label} className="border-t border-stone-200">
                        <td className="px-4 py-3 text-text-dark font-medium">{row.label}</td>
                        <td className="px-4 py-3 text-primary font-semibold">{row.value}</td>
                        <td className="px-4 py-3 text-text-dark text-sm hidden sm:table-cell">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-bg-light" aria-labelledby="collection-pricing-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 id="collection-pricing-heading" className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center font-playfair">
                Pricing by Floor Plan Series
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {report.collectionRows.map((row) => (
                  <article
                    key={row.series}
                    className="rounded-lg border border-stone-200 bg-white p-6 shadow-two"
                  >
                    <h3 className="text-xl font-bold text-primary mb-2 font-playfair">{row.series} Series</h3>
                    <p className="text-primary font-semibold">{row.sqft} sq ft</p>
                    <p className="text-sm text-text-dark mt-2">{row.homes} homes in community</p>
                    <p className="text-text-dark mt-3 text-sm">{row.note}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {report.sections.map((section) => (
                <article key={section.id} id={section.id} className="mb-12 last:mb-0">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-playfair">
                    {section.title}
                  </h2>
                  <p className="text-lg font-medium text-text-dark mb-4">{section.answer}</p>
                  <p className="text-text-dark mb-6">{section.body}</p>
                  <ul className="flex flex-wrap gap-3">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="inline-block rounded-full border border-primary bg-white px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <AgentInsights insights={report.agentInsights} />
        <FaqSection items={report.faq} heading="June 2026 Market FAQ" />
        <section className="py-8 bg-bg-light">
          <div className="container mx-auto px-4">
            <p className="max-w-3xl mx-auto text-sm text-text-dark text-center">{report.disclaimer}</p>
          </div>
        </section>
        <SeoHubLinks />
      </main>
      <Footer />
    </>
  );
}
