import type { Listing } from "@/types/listing";
import Image from "next/image";
import Link from "next/link";
import { Bed, Bath, Square, MapPin } from "lucide-react";
import { Button } from "@/../components/ui/button";
import ScheduleTour from "@/../components/ScheduleTour";

type ListingsGridProps = {
  listings: Listing[];
};

export default function ListingsGrid({ listings }: ListingsGridProps) {
  if (listings.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-text-dark mb-4">No listings available at this time.</p>
        <p className="text-text-dark">
          Contact Dr. Jan Duffy to learn about upcoming opportunities.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
}

function ListingCard({ listing }: { listing: Listing }) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatAddress = () => {
    return `${listing.address}, ${listing.city}, ${listing.state} ${listing.zipCode}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-two overflow-hidden hover:shadow-three transition-shadow">
      {/* Image */}
      <div className="relative w-full h-64 bg-bg-light">
        {listing.imageUrl ? (
          <Image
            src={listing.imageUrl}
            alt={`${listing.address} - ${listing.bedrooms} bed, ${listing.bathrooms} bath`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            <Square className="w-16 h-16" />
          </div>
        )}
        {listing.status === "pending" && (
          <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-md text-sm font-semibold">
            Pending
          </div>
        )}
        {listing.status === "sold" && (
          <div className="absolute top-4 right-4 bg-gray-600 text-white px-3 py-1 rounded-md text-sm font-semibold">
            Sold
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Price */}
        <div className="mb-3">
          <p className="text-2xl font-bold text-primary font-playfair">
            {formatPrice(listing.price)}
          </p>
        </div>

        {/* Address */}
        <div className="mb-4">
          <div className="flex items-start gap-2 text-text-dark">
            <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-primary" />
            <p className="text-sm leading-relaxed">{formatAddress()}</p>
          </div>
        </div>

        {/* Details */}
        <div className="flex items-center gap-4 mb-4 text-text-dark">
          <div className="flex items-center gap-1">
            <Bed className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">{listing.bedrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">{listing.bathrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Square className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">
              {listing.squareFeet.toLocaleString()} sq ft
            </span>
          </div>
        </div>

        {/* Series/Floor Plan */}
        {listing.series && (
          <div className="mb-4">
            <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded">
              {listing.series} Series
            </span>
            {listing.floorPlan && (
              <span className="ml-2 text-sm text-text-dark">{listing.floorPlan}</span>
            )}
          </div>
        )}

        {/* Description */}
        {listing.description && (
          <p className="text-sm text-text-dark mb-4 line-clamp-2">
            {listing.description}
          </p>
        )}

        {/* Actions */}
        <div className="flex flex-col gap-2">
          {listing.listingUrl ? (
            <Button asChild variant="default" className="w-full">
              <Link href={listing.listingUrl}>View Details</Link>
            </Button>
          ) : (
            <Button asChild variant="default" className="w-full">
              <Link href={`/homes-for-sale/${listing.id}`}>View Details</Link>
            </Button>
          )}
          <ScheduleTour variant="outline" size="default" className="w-full" />
        </div>
      </div>
    </div>
  );
}
