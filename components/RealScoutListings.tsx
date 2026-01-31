'use client';

import { useState, useEffect, useRef } from 'react';
import { Home } from 'lucide-react';
import { loadRealScoutScript } from '@/lib/loadRealScoutScript';

type RealScoutListingsProps = {
  h2Text?: string;
  className?: string;
};

export default function RealScoutListings({
  h2Text = 'Browse Available Homes for Sale in Del Webb North Ranch',
  className = '',
}: RealScoutListingsProps) {
  const [inView, setInView] = useState(false);
  const [scriptReady, setScriptReady] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const widgetHtml = `<realscout-office-listings agent-encoded-id="QWdlbnQtMjI1MDUw" sort-order="NEWEST" listing-status="For Sale" property-types=",SFR,MF" price-min="500000" price-max="800000"></realscout-office-listings>`;

  // Defer script until section is in viewport (keeps ~420KB + MUI/Google Fonts off critical path)
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setInView(true);
      },
      { rootMargin: '150px', threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    loadRealScoutScript()
      .then(() => setScriptReady(true))
      .catch(() => setScriptReady(true)); // show widget area even on error so user can retry
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      className={`py-12 md:py-16 lg:py-20 bg-white ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6 text-center font-playfair">
            {h2Text}
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 relative min-h-[280px]">
            {!scriptReady ? (
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-gray-500 p-6"
                aria-live="polite"
                aria-busy="true"
              >
                <Home className="w-12 h-12 text-primary opacity-50 animate-pulse" />
                <p className="text-lg font-semibold">Loading listings…</p>
                <p className="text-sm">Fetching available homes</p>
              </div>
            ) : null}
            <div
              className={scriptReady ? undefined : 'invisible'}
              dangerouslySetInnerHTML={{ __html: widgetHtml }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
