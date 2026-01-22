import type { Metadata } from "next";
import Navbar from "@/../components/navbar";
import Footer from "@/../components/footer";
import Link from "next/link";
import { FileText, Home, Search, Building, MapPin, Users, BookOpen, HelpCircle, Phone, Calendar, MessageSquare, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Sitemap | Del Webb North Ranch | Site Navigation | North Las Vegas",
  description:
    "Complete sitemap of Del Webb North Ranch website. Find all pages including homes for sale, floor plans, amenities, lifestyle, and more.",
  alternates: {
    canonical: "https://www.delwebbnorthranchhomes.com/sitemap-page",
  },
  openGraph: {
    title: "Sitemap | Del Webb North Ranch",
    description: "Complete navigation guide to all pages on Del Webb North Ranch website.",
    url: "https://www.delwebbnorthranchhomes.com/sitemap-page",
    siteName: "Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Sitemap | Del Webb North Ranch",
    description: "Complete navigation guide to our website.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const sitePages = [
  {
    category: "Main Pages",
    icon: Home,
    pages: [
      { href: "/", label: "Home", description: "Discover Del Webb North Ranch 55+ community" },
      { href: "/homes-for-sale", label: "Homes for Sale", description: "Browse current listings in Del Webb North Ranch" },
      { href: "/floor-plans", label: "Floor Plans", description: "Explore 9 single-story floor plans" },
      { href: "/amenities", label: "Amenities", description: "Resort-style amenities and community features" },
      { href: "/lifestyle", label: "Lifestyle", description: "Active adult living in North Las Vegas" },
    ],
  },
  {
    category: "About & Information",
    icon: Users,
    pages: [
      { href: "/about", label: "About Dr. Jan Duffy", description: "Meet your REALTOR® and learn about expertise" },
      { href: "/testimonials", label: "Testimonials", description: "Client reviews and success stories" },
      { href: "/blog", label: "Blog", description: "Community news, insights, and tips" },
      { href: "/faq", label: "FAQ", description: "Frequently asked questions about Del Webb North Ranch" },
    ],
  },
  {
    category: "Contact & Services",
    icon: Phone,
    pages: [
      { href: "/contact", label: "Contact", description: "Get in touch with Dr. Jan Duffy" },
      { href: "/schedule", label: "Schedule a Tour", description: "Book a private community tour" },
    ],
  },
  {
    category: "Legal & Policies",
    icon: Shield,
    pages: [
      { href: "/privacy", label: "Privacy Policy", description: "How we protect your information" },
      { href: "/terms", label: "Terms of Service", description: "Website usage terms and conditions" },
      { href: "/accessibility", label: "Accessibility Statement", description: "Our commitment to website accessibility" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20 min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-stone-100 py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-playfair">
                Site Map
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                Find all pages and resources on Del Webb North Ranch website
              </p>
            </div>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {sitePages.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <div key={category.category} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-primary font-playfair">
                          {category.category}
                        </h2>
                      </div>
                      <ul className="space-y-4">
                        {category.pages.map((page) => (
                          <li key={page.href}>
                            <Link
                              href={page.href}
                              className="block group hover:bg-stone-50 rounded-lg p-3 transition-colors"
                            >
                              <div className="font-semibold text-gray-900 group-hover:text-primary transition-colors mb-1">
                                {page.label}
                              </div>
                              <div className="text-sm text-gray-600">{page.description}</div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

              {/* XML Sitemap Link */}
              <div className="mt-12 bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <FileText className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-playfair">
                      XML Sitemap
                    </h3>
                    <p className="text-text-dark mb-4">
                      For search engines and developers, our XML sitemap is available at:
                    </p>
                    <a
                      href="/sitemap.xml"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium"
                    >
                      <FileText className="w-4 h-4" />
                      https://www.delwebbnorthranchhomes.com/sitemap.xml
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-8 text-center">
                <p className="text-text-dark mb-4">Need help finding something?</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Contact Us
                  </Link>
                  <Link
                    href="/faq"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <HelpCircle className="w-4 h-4" />
                    View FAQ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
