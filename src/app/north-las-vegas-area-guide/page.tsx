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

const PAGE_TITLE = "Living in North Las Vegas, NV | Area Guide for 55+ Homebuyers";
const PAGE_DESCRIPTION =
  "Everything 55+ buyers need to know about North Las Vegas — proximity to the Strip, healthcare options, tax advantages, weather, and why Del Webb North Ranch is the standout community.";

export const metadata: Metadata = {
  title: absolutePageTitle(PAGE_TITLE),
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_ORIGIN}/north-las-vegas-area-guide` },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_ORIGIN}/north-las-vegas-area-guide`,
    siteName: "Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy",
    locale: "en_US",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  author: {
    "@type": "Person",
    name: "Dr. Jan Duffy",
    jobTitle: "REALTOR® | Del Webb North Ranch Specialist",
  },
  datePublished: "2026-06-28",
  dateModified: "2026-06-28",
  about: {
    "@type": "Place",
    name: "North Las Vegas",
    address: {
      "@type": "PostalAddress",
      addressLocality: "North Las Vegas",
      addressRegion: "NV",
      addressCountry: "US",
    },
  },
  mentions: {
    "@type": "Residence",
    name: "Del Webb North Ranch",
    url: SITE_ORIGIN,
  },
};

export default function NorthLasVegasAreaGuidePage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: stringifySchema(articleSchema) }}
        />
        <Breadcrumbs
          items={[
            { label: "Del Webb North Ranch", href: "/" },
            { label: "North Las Vegas Area Guide", href: "/north-las-vegas-area-guide" },
          ]}
        />

        <section className="bg-primary text-white py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-playfair">
              Living in North Las Vegas, NV | Area Guide for 55+ Homebuyers
            </h1>
            <p className="text-lg text-gray-100 leading-relaxed">
              North Las Vegas is not the Las Vegas Strip — and that is exactly why retirees love it. This guide covers healthcare, shopping, weather, taxes, and why Del Webb North Ranch stands out among 55+ communities.
            </p>
          </div>
        </section>

        <RealScoutListings h2Text="Homes for Sale at Del Webb North Ranch | North Las Vegas 55+ Listings" />

        <article className="container mx-auto px-4 py-12 md:py-16 max-w-4xl prose prose-lg prose-headings:font-playfair prose-headings:text-primary prose-a:text-primary">
          <h2>North Las Vegas Overview</h2>
          <p>
            North Las Vegas is a city of approximately 280,000 residents in Clark County, Nevada — distinct from the Las Vegas Strip and downtown corridor. The city spans the northern valley with master-planned neighborhoods, desert mountain views, and growing retail and healthcare infrastructure. For 55+ buyers, North Las Vegas offers a quieter suburban lifestyle with lower price points than Summerlin or Henderson while maintaining access to everything Southern Nevada offers.
          </p>

          <h2>Healthcare Near Del Webb North Ranch</h2>
          <p>
            VA Southern Nevada Healthcare System is approximately 2 miles from Del Webb North Ranch — a major advantage for veteran retirees. Centennial Hills Hospital Medical Center (12 miles) provides full-service emergency and specialty care. Valley Hospital Medical Center and multiple urgent care clinics serve the Aliante and Centennial Hills corridors within a 15–20 minute drive.
          </p>

          <h2>Shopping &amp; Daily Essentials</h2>
          <p>
            Smith&apos;s Food and Drug, Walmart Neighborhood Market, Albertsons, Sprouts, Costco, and Target are all within a short drive in the Aliante retail corridor. The Aliante Casino + Hotel area offers dining and entertainment. For larger shopping trips, Centennial Hills and the Las Vegas Strip corridor are 15–25 minutes away.
          </p>

          <h2>Outdoor Recreation</h2>
          <p>
            Craig Ranch Regional Park (5 miles) spans 170 acres with walking paths, dog parks, sports courts, and community gardens. Aliante Nature Discovery Park offers desert trails and wildlife viewing. Red Rock Canyon National Conservation Area and Lake Mead are day-trip destinations for hiking, boating, and scenic drives.
          </p>

          <h2>Weather &amp; Active Adult Living</h2>
          <p>
            North Las Vegas averages 300+ days of sunshine per year. Winters are mild with daytime highs in the 50s–60s°F, making outdoor amenities like pickleball, walking trails, and pool activities usable year-round. Summers are hot but dry; most residents plan outdoor activity for mornings and evenings.
          </p>

          <h2>Nevada Financial Advantages</h2>
          <p>
            Nevada has no state income tax and no inheritance tax — a primary draw for retirees relocating from California, Illinois, and other high-tax states. Property taxes are approximately 1% of assessed value. Combined with Del Webb North Ranch&apos;s $215/month HOA and no special improvement districts, retirement dollars stretch significantly further here.
          </p>

          <h2>Commute &amp; Proximity</h2>
          <p>
            Del Webb North Ranch is approximately 20 minutes from the Las Vegas Strip, 17 miles from Harry Reid International Airport, and well-connected to I-15 and the 215 Beltway. Henderson and Summerlin are 25–35 minutes depending on traffic — close enough for dining and medical specialists, far enough for a quieter home base.
          </p>

          <h2>Why North Las Vegas Over Henderson or Summerlin for 55+ Buyers</h2>
          <p>
            Henderson and Summerlin command premium price points and higher property taxes relative to home size. North Las Vegas offers newer 55+ communities like Del Webb North Ranch at $400K–$600K with full resort amenities already built. The community density at Del Webb (394 homes) creates a tighter social network than sprawling master-planned areas — ideal for buyers who want to know their neighbors.
          </p>

          <div className="not-prose mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild className="min-h-[44px]">
              <Link href="/del-webb-vs-sun-city-aliante">Compare to Sun City Aliante</Link>
            </Button>
            <Button asChild variant="outline" className="min-h-[44px]">
              <a href={SITE_PHONE_TEL}>Call {SITE_PHONE_DISPLAY}</a>
            </Button>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
