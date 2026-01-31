"use client";

import Link from "next/link";
import Navbar from "@/../components/navbar";
import Footer from "@/../components/footer";
import { Button } from "@/../components/ui/button";
import { Home, RefreshCw, Phone, Search, FileText } from "lucide-react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20 min-h-screen flex items-center justify-center bg-white">
        <div className="container mx-auto px-4 text-center py-16">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-playfair">
              Something went wrong
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We couldn’t load this page. Please try again or use the links below to get back on track.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button onClick={reset} variant="default" size="lg" className="min-h-[48px]">
                <RefreshCw className="w-5 h-5 mr-2" />
                Try again
              </Button>
              <Button asChild variant="outline" size="lg" className="min-h-[48px]">
                <Link href="/">
                  <Home className="w-5 h-5 mr-2" />
                  Homepage
                </Link>
              </Button>
            </div>
            <div className="bg-stone-50 rounded-lg p-6 text-left">
              <h2 className="text-xl font-bold text-gray-900 mb-4 font-playfair">
                Quick links
              </h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/buyers" className="text-primary hover:text-accent transition-colors flex items-center gap-2">
                    <FileText className="w-4 h-4" /> For Buyers
                  </Link>
                </li>
                <li>
                  <Link href="/sellers" className="text-primary hover:text-accent transition-colors flex items-center gap-2">
                    <FileText className="w-4 h-4" /> For Sellers
                  </Link>
                </li>
                <li>
                  <Link href="/homes-for-sale" className="text-primary hover:text-accent transition-colors flex items-center gap-2">
                    <Search className="w-4 h-4" /> Homes for Sale
                  </Link>
                </li>
                <li>
                  <a href="tel:7025001064" className="text-primary hover:text-accent transition-colors flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Call (702) 500-1064
                  </a>
                </li>
                <li>
                  <Link href="/contact" className="text-primary hover:text-accent transition-colors">
                    Contact
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
