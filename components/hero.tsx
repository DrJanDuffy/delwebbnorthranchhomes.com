import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import ScheduleTour from "./ScheduleTour";

// Placeholder blur data URL (1x1 transparent PNG)
const blurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

export default function Hero() {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/amenities/resort-pool.jpeg"
          alt="Del Webb North Ranch resort-style pool area with beautiful landscaping and mountain views"
          fill
          priority
          className="object-cover"
          placeholder="blur"
          blurDataURL={blurDataURL}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 font-playfair leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            Del Webb North Ranch | 55+ Homes for Sale in North Las Vegas
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light italic mb-4 md:mb-6 text-white/95 leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
            Your Next Chapter Starts Here
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-gray-100 leading-relaxed px-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            Discover luxury single-story living in a vibrant 55+ community with
            mountain views, resort-style amenities, and neighbors who become
            friends.
          </p>
          <div className="mb-6 md:mb-8">
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              Homes from $400K-$600K in North Las Vegas
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-4">
            <div className="w-full sm:w-auto sm:min-w-[200px]">
              <ScheduleTour
                variant="accent"
                size="lg"
                className="w-full sm:w-auto text-base md:text-lg py-3 md:py-4"
              />
            </div>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto sm:min-w-[200px] min-h-[44px] text-base md:text-lg py-3 md:py-4"
            >
              <Link href="/homes-for-sale">View Available Homes</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
