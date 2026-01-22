import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/../components/navbar";
import Footer from "@/../components/footer";
import { Button } from "@/../components/ui/button";
import { Home, Search, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found | Del Webb North Ranch | North Las Vegas",
  description:
    "The page you're looking for doesn't exist. Return to Del Webb North Ranch homepage to explore our 55+ community homes.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20 min-h-screen flex items-center justify-center bg-white">
        <div className="container mx-auto px-4 text-center py-16">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4 font-playfair">
                404
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">
                Page Not Found
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                The page you're looking for doesn't exist or has been moved.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild variant="default" size="lg">
                <Link href="/">
                  <Home className="w-5 h-5 mr-2" />
                  Go to Homepage
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/homes-for-sale">
                  <Search className="w-5 h-5 mr-2" />
                  View Homes for Sale
                </Link>
              </Button>
            </div>

            <div className="bg-stone-50 rounded-lg p-6 text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">
                Popular Pages
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/homes-for-sale"
                    className="text-primary hover:text-accent transition-colors"
                  >
                    Homes for Sale
                  </Link>
                </li>
                <li>
                  <Link
                    href="/floor-plans"
                    className="text-primary hover:text-accent transition-colors"
                  >
                    Floor Plans
                  </Link>
                </li>
                <li>
                  <Link
                    href="/amenities"
                    className="text-primary hover:text-accent transition-colors"
                  >
                    Amenities
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-primary hover:text-accent transition-colors"
                  >
                    About Dr. Jan Duffy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-primary hover:text-accent transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
