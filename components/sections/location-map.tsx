import Link from 'next/link';
import { MapPinned, Phone, Clock } from 'lucide-react';
import GoogleLocatorPlus from '@/../components/GoogleLocatorPlus';
import {
  GBP_BUSINESS_NAME,
  GBP_HOURS_DISPLAY,
  GOOGLE_MAPS_DIRECTIONS_URL,
  GOOGLE_REVIEW_LINK,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_TEL,
  gbpFormattedAddress,
} from '@/lib/site';

type LocationMapSectionProps = {
  title?: string;
  description?: string;
  variant?: 'light' | 'muted';
  height?: 'compact' | 'default' | 'full';
  showReviewLink?: boolean;
};

export default function LocationMapSection({
  title = 'Find Del Webb North Ranch on the Map',
  description = `Visit ${GBP_BUSINESS_NAME} at our North Las Vegas community entrance. Use the interactive map to get directions, explore the area, and plan your 55+ community tour.`,
  variant = 'muted',
  height = 'default',
  showReviewLink = true,
}: LocationMapSectionProps) {
  const bgClass = variant === 'light' ? 'bg-white' : 'bg-bg-light';

  return (
    <section
      className={`py-12 md:py-16 lg:py-20 ${bgClass}`}
      aria-labelledby="location-map-heading"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center md:mb-10">
            <h2
              id="location-map-heading"
              className="mb-4 font-playfair text-2xl font-bold text-primary md:text-3xl"
            >
              {title}
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-text-dark">{description}</p>
          </div>

          <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-white p-4 text-center shadow-sm">
              <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-primary">
                Address
              </p>
              <address className="not-italic text-text-dark">{gbpFormattedAddress()}</address>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 text-center shadow-sm">
              <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-primary">
                Phone
              </p>
              <a
                href={SITE_PHONE_TEL}
                className="inline-flex min-h-[44px] items-center justify-center gap-2 text-text-dark transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                {SITE_PHONE_DISPLAY}
              </a>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 text-center shadow-sm">
              <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-primary">
                Hours
              </p>
              <p className="inline-flex items-center justify-center gap-2 text-text-dark">
                <Clock className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                {GBP_HOURS_DISPLAY}
              </p>
            </div>
          </div>

          <GoogleLocatorPlus height={height} />

          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={GOOGLE_MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
              aria-label="Get directions to Del Webb North Ranch on Google Maps"
            >
              <MapPinned className="h-4 w-4 shrink-0" aria-hidden />
              Get directions
            </a>
            <Link
              href="/schedule"
              className="inline-flex min-h-[44px] items-center justify-center rounded-md border-2 border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              Schedule a tour
            </Link>
            {showReviewLink ? (
              <a
                href={GOOGLE_REVIEW_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center rounded-md border-2 border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
                aria-label="Leave a review on Google"
              >
                View Google reviews
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
