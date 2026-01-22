'use client';

type RealScoutListingsProps = {
  h2Text?: string;
  className?: string;
};

export default function RealScoutListings({ 
  h2Text = "Browse Available Homes for Sale in Del Webb North Ranch",
  className = ""
}: RealScoutListingsProps) {
  // Use dangerouslySetInnerHTML as per RealScout integration rules
  const widgetHtml = `<realscout-office-listings agent-encoded-id="QWdlbnQtMjI1MDUw" sort-order="NEWEST" listing-status="For Sale" property-types=",SFR,MF" price-min="500000" price-max="800000"></realscout-office-listings>`;

  return (
    <section className={`py-12 md:py-16 lg:py-20 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6 text-center font-playfair">
            {h2Text}
          </h2>
          <div 
            className="bg-white rounded-lg shadow-lg p-4 md:p-6"
            dangerouslySetInnerHTML={{ __html: widgetHtml }}
          />
        </div>
      </div>
    </section>
  );
}
