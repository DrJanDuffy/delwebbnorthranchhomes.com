'use client';

import { oldSiteData } from '@/lib/fetchOldSiteData';
import { ExternalLink, Home } from 'lucide-react';
import { Button } from './ui/button';

export default function HomesForSaleWidget() {
  const { realscout } = oldSiteData.integrations;

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-bg-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 font-playfair">
              Homes for Sale in Del Webb North Ranch
            </h2>
            <p className="text-lg text-text-dark">
              View current listings updated daily from the MLS
            </p>
          </div>

          {/* RealScout Embed - Option 1: iFrame */}
          <div className="bg-white rounded-lg shadow-three p-4 md:p-6 mb-6 md:mb-8">
            <iframe
              src="https://drjanduffy.realscout.com/listings?community=del-webb-north-ranch"
              className="w-full h-[600px] md:h-[800px] border-0 rounded-lg"
              title="Del Webb North Ranch Listings"
              allow="clipboard-read; clipboard-write"
            />
          </div>

          {/* Alternative: Link to RealScout */}
          <div className="text-center bg-white rounded-lg shadow-two p-6 md:p-8">
            <Home className="w-12 h-12 text-primary mx-auto mb-4" />
            <p className="text-text-dark mb-6 text-lg">
              Want to see all available homes and get instant alerts?
            </p>
            <Button
              asChild
              variant="default"
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
            >
              <a
                href={realscout}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Set Up Your Home Search
                <ExternalLink className="w-5 h-5" />
              </a>
            </Button>
            <p className="text-sm text-gray-600 mt-4">
              Create a free account to save favorites, set up alerts, and get
              notified when new homes match your criteria.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
