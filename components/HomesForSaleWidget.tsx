'use client';

export default function HomesForSaleWidget() {
  // Use dangerouslySetInnerHTML as per RealScout integration rules
  const widgetHtml = `<realscout-office-listings agent-encoded-id="QWdlbnQtMjI1MDUw" sort-order="NEWEST" listing-status="For Sale" property-types=",SFR,MF" price-min="500000" price-max="800000"></realscout-office-listings>`;

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-bg-light">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 font-playfair">
              Homes for Sale in Del Webb North Ranch
            </h2>
            <p className="text-lg text-text-dark">
              View current listings updated daily from the MLS
            </p>
          </div>

          {/* RealScout Web Component - Using dangerouslySetInnerHTML per integration rules */}
          <div 
            className="bg-white rounded-lg shadow-lg p-4 md:p-6"
            dangerouslySetInnerHTML={{ __html: widgetHtml }}
          />
        </div>
      </div>
    </section>
  );
}
