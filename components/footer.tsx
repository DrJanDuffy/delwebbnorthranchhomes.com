import Link from "next/link";
import { Phone, Mail, MapPin, Youtube, Calendar, FileText, Instagram, Linkedin, Facebook } from "lucide-react";
import { oldSiteData } from "@/lib/fetchOldSiteData";

export default function Footer() {
  return (
    <footer className="bg-footer-bg text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Site Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-playfair">
              Del Webb North Ranch
            </h3>
            <p className="text-gray-300 mb-4">
              Your premier 55+ active adult community in North Las Vegas.
            </p>
            {/* TODO: Add Equal Housing Opportunity logo */}
            <div className="mt-4 text-sm text-gray-400">
              Equal Housing Opportunity
            </div>
          </div>

          {/* Quick Links - Enhanced for sitelinks */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/homes-for-sale"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Homes for Sale
                </Link>
              </li>
              <li>
                <Link
                  href="/floor-plans"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Floor Plans
                </Link>
              </li>
              <li>
                <Link
                  href="/amenities"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Amenities
                </Link>
              </li>
              <li>
                <Link
                  href="/lifestyle"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Lifestyle
                </Link>
              </li>
              <li>
                <Link
                  href="/home-value"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home Value
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:7025001064"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  (702) 500-1064
                </a>
              </li>
              <li>
                <a
                  href="mailto:sales@delwebbnorthranchhomes.com"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  sales@delwebbnorthranchhomes.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-gray-300">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>
                    2290 Beauty Vista Avenue
                    <br />
                    North Las Vegas, NV 89086
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Resources & Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={oldSiteData.integrations.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  Schedule Appointment
                </a>
              </li>
              <li>
                <a
                  href={oldSiteData.integrations.realscout}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <span className="w-4 h-4">🏠</span>
                  Browse Homes
                </a>
              </li>
              <li>
                <a
                  href={oldSiteData.integrations.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                  YouTube Channel
                </a>
              </li>
              <li>
                <a
                  href={oldSiteData.integrations.brochurePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  Download Brochure
                </a>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.facebook.com/DellWebbNorthRanch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/delwebbnorthranchhomes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/del-webb-north-ranch-homes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={oldSiteData.integrations.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* Related Communities */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Other Communities</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://heyberkshirehomes.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Hey Berkshire Homes
                </a>
              </li>
              <li>
                <a
                  href="https://askberkshirehomes.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Ask Berkshire Homes
                </a>
              </li>
              <li>
                <a
                  href="https://searchforhomesvegas.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Search for Homes Vegas
                </a>
              </li>
              <li>
                <a
                  href="https://californiaforeverbroker.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  California Forever Broker
                </a>
              </li>
              <li>
                <a
                  href="https://californiaforeverrealestateagent.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  California Forever Real Estate
                </a>
              </li>
              <li>
                <a
                  href="https://californiaforeverrealty.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  California Forever Realty
                </a>
              </li>
              <li>
                <a
                  href="https://heartlandlasvegas.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Heartland Las Vegas
                </a>
              </li>
              <li>
                <a
                  href="https://yourdivorcerealtor.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Your Divorce Realtor
                </a>
              </li>
              <li>
                <a
                  href="https://greenvalleyranchinsider.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Green Valley Ranch Insider
                </a>
              </li>
              <li>
                <a
                  href="https://maravillahomesforsale.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Maravilla Homes for Sale
                </a>
              </li>
              <li>
                <a
                  href="https://arieshenderson.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Aries Henderson
                </a>
              </li>
              <li>
                <a
                  href="https://craigranchhomes.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Craig Ranch Homes
                </a>
              </li>
              <li>
                <a
                  href="https://silverstoneranchhomes.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Silverstone Ranch Homes
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Information</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <strong>License:</strong> S.0197614.LLC
              </li>
              <li>
                <strong>Brokerage:</strong> Berkshire Hathaway HomeServices
                Nevada Properties
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/accessibility"
                  className="hover:text-white transition-colors"
                >
                  Accessibility
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap-page"
                  className="hover:text-white transition-colors"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-sm text-gray-400">
          <p>
            © 2026 Del Webb North Ranch | Homes by Dr. Jan Duffy All rights reserved.
          </p>
          <p className="mt-2">
            Berkshire Hathaway HomeServices Nevada Properties | S.0197614.LLC
          </p>
        </div>
      </div>
    </footer>
  );
}
