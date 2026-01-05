import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

// Placeholder blur data URL (1x1 transparent PNG)
const blurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

export default function Hero() {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-bg.jpg"
          alt="Del Webb North Ranch community entrance with beautiful landscaping"
          fill
          priority
          className="object-cover"
          placeholder="blur"
          blurDataURL={blurDataURL}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 font-playfair leading-tight">
            Your Next Chapter Starts Here
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-gray-100 leading-relaxed px-2">
            Discover luxury single-story living in a vibrant 55+ community with
            mountain views, resort-style amenities, and neighbors who become
            friends.
          </p>
          <div className="mb-6 md:mb-8">
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-accent">
              Homes from $400K-$600K in North Las Vegas
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-4">
            <Button
              asChild
              variant="accent"
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white w-full sm:w-auto sm:min-w-[200px] text-base md:text-lg py-3 md:py-4"
            >
              <Link href="/contact" className="flex items-center justify-center">
                Schedule Your Private Tour
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto sm:min-w-[200px] text-base md:text-lg py-3 md:py-4"
            >
              <Link href="/homes-for-sale">View Available Homes</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
