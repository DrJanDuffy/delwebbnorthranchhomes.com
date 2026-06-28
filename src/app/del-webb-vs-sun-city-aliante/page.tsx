import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/../components/navbar";
import Footer from "@/../components/footer";
import Breadcrumbs from "@/../components/Breadcrumbs";
import RealScoutListings from "@/../components/RealScoutListings";
import { Button } from "@/../components/ui/button";
import { SITE_ORIGIN, SITE_PHONE_TEL, SITE_PHONE_DISPLAY } from "@/lib/site";
import { absolutePageTitle } from "@/lib/hyperlocal";
import { stringifySchema } from "@/lib/schema";

const PAGE_TITLE =
  "Del Webb North Ranch vs. Sun City Aliante | Which 55+ Community Wins?";
const PAGE_DESCRIPTION =
  "Comparing the two leading 55+ active adult communities in North Las Vegas. HOA fees, amenities, home sizes, builder reputation, and which is right for your retirement.";

export const metadata: Metadata = {
  title: absolutePageTitle(PAGE_TITLE),
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_ORIGIN}/del-webb-vs-sun-city-aliante` },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_ORIGIN}/del-webb-vs-sun-city-aliante`,
    siteName: "Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy",
    locale: "en_US",
    type: "article",
  },
};

const comparisonFaq = [
  {
    question: "Which is newer — Del Webb North Ranch or Sun City Aliante?",
    answer:
      "Del Webb North Ranch was built between 2020 and 2024 and is fully complete. Sun City Aliante was established earlier and is a larger, more mature community with decades of resale history.",
  },
  {
    question: "Which has lower HOA fees?",
    answer:
      "Del Webb North Ranch HOA is $215/month with no special improvement districts. Sun City Aliante HOA varies by sub-association and typically runs higher when golf and additional amenity fees are included.",
  },
  {
    question: "Which is better for golf?",
    answer:
      "Sun City Aliante has an on-site golf course. Del Webb North Ranch does not have a golf course but is 5 miles from Aliante Golf Club and 12 miles from Las Vegas Golf Club.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: comparisonFaq.map((item) => ({
    "@type": "Question" as const,
    name: item.question,
    acceptedAnswer: { "@type": "Answer" as const, text: item.answer },
  })),
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  author: { "@type": "Person", name: "Dr. Jan Duffy" },
  datePublished: "2026-06-28",
  dateModified: "2026-06-28",
};

const comparisonRows = [
  { factor: "Builder", delWebb: "Del Webb (Pulte Homes)", sunCity: "Pulte Homes" },
  { factor: "Year Built", delWebb: "2020–2024 (fully built)", sunCity: "Established (mature resale market)" },
  { factor: "Total Homes", delWebb: "~394 single-story", sunCity: "7,000+ homes" },
  { factor: "Price Range", delWebb: "$400K–$600K", sunCity: "Varies; wider resale range" },
  { factor: "HOA (approx.)", delWebb: "$215/month", sunCity: "Higher; varies by area + golf" },
  { factor: "Home Size", delWebb: "1,285–2,015 sq ft", sunCity: "Wider range of sizes" },
  { factor: "Golf Course", delWebb: "No (nearby courses)", sunCity: "On-site championship course" },
  { factor: "Clubhouse", delWebb: "10,000 sq ft (opened 2021)", sunCity: "Large established center" },
  { factor: "Community Feel", delWebb: "Tighter, newer community", sunCity: "Larger, more established" },
  { factor: "Age Restriction", delWebb: "55+ (HOPA)", sunCity: "55+ (HOPA)" },
];

export default function ComparisonPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: stringifySchema(articleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: stringifySchema(faqSchema) }}
        />
        <Breadcrumbs
          items={[
            { label: "Del Webb North Ranch", href: "/" },
            { label: "vs. Sun City Aliante", href: "/del-webb-vs-sun-city-aliante" },
          ]}
        />

        <section className="bg-primary text-white py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-playfair">
              Del Webb North Ranch vs. Sun City Aliante
            </h1>
            <p className="text-lg text-gray-100 leading-relaxed">
              Two premier 55+ communities in North Las Vegas — compared side by side so you can choose the right fit for your retirement.
            </p>
          </div>
        </section>

        <RealScoutListings h2Text="Del Webb North Ranch Homes for Sale | North Las Vegas 55+ Listings" />

        <section className="container mx-auto px-4 py-12 md:py-16 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-playfair">
            Side-by-Side Comparison
          </h2>
          <div className="overflow-x-auto rounded-lg border border-stone-200 shadow-sm">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">Factor</th>
                  <th className="px-4 py-3 font-semibold">Del Webb North Ranch</th>
                  <th className="px-4 py-3 font-semibold">Sun City Aliante</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.factor} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                    <td className="px-4 py-3 font-semibold text-primary">{row.factor}</td>
                    <td className="px-4 py-3 text-gray-700">{row.delWebb}</td>
                    <td className="px-4 py-3 text-gray-700">{row.sunCity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3 font-playfair">
                If you want a newer, fully-built Del Webb community
              </h2>
              <p>
                Del Webb North Ranch is the better fit. Every home is single-story, the clubhouse and amenities are fully operational, and the 394-home scale creates a walkable, neighborly environment. Resale inventory is active and homes range from $400K–$600K.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3 font-playfair">
                If on-site golf and a larger established community matter most
              </h2>
              <p>
                Sun City Aliante may be the better fit. Its championship golf course, larger social infrastructure, and decades of resale history appeal to buyers who prioritize golf lifestyle and a bigger resident population.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3 font-playfair">
                If price and HOA value are your top priorities
              </h2>
              <p>
                Del Webb North Ranch offers competitive pricing with a straightforward $215/month HOA and no special improvement districts. Nevada&apos;s no state income tax applies to both communities, but Del Webb&apos;s newer construction and lower HOA simplify monthly budgeting.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild className="min-h-[44px]">
              <Link href="/schedule">Schedule a Del Webb Tour</Link>
            </Button>
            <Button asChild variant="outline" className="min-h-[44px]">
              <a href={SITE_PHONE_TEL}>Call {SITE_PHONE_DISPLAY}</a>
            </Button>
          </div>

          <section className="mt-16">
            <h2 className="text-2xl font-bold text-primary mb-6 font-playfair">Comparison FAQ</h2>
            <div className="space-y-4">
              {comparisonFaq.map((item) => (
                <details
                  key={item.question}
                  className="bg-white rounded-lg border border-stone-200 overflow-hidden"
                >
                  <summary className="px-5 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-stone-50 list-none flex justify-between items-center min-h-[44px]">
                    {item.question}
                    <span className="text-primary">▼</span>
                  </summary>
                  <p className="px-5 pb-4 text-gray-600 leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
