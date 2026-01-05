import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/../components/navbar";
import Footer from "@/../components/footer";
import { Button } from "@/../components/ui/button";
import Link from "next/link";
import ScrollAnimation from "@/../components/scroll-animation";
import {
  Activity,
  Users,
  Sparkles,
  Waves,
  Dumbbell,
  UtensilsCrossed,
  TreePine,
  Gamepad2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Amenities | Del Webb North Ranch | Resort-Style 55+ Living",
  description:
    "Discover resort-style amenities at Del Webb North Ranch. Pool, fitness center, pickleball courts, clubhouse, walking trails, and more in North Las Vegas.",
};

const amenities = [
  {
    category: "Stay Active",
    icon: <Activity className="w-8 h-8" />,
    items: [
      {
        name: "Resort-Style Pool",
        description: "Large pool with plenty of space for swimming and lounging",
        image: "/images/amenities/pool.jpg",
      },
      {
        name: "Heated Lap Pool",
        description: "Perfect for morning swims and year-round exercise",
        image: "/images/amenities/lap-pool.jpg",
      },
      {
        name: "Fitness Center",
        description: "Modern equipment for your daily workout routine",
        image: "/images/amenities/fitness.jpg",
      },
      {
        name: "Pickleball Courts",
        description: "Lighted courts for evening games and tournaments",
        image: "/images/amenities/pickleball.jpg",
      },
      {
        name: "Bocce Courts",
        description: "Classic lawn game courts for friendly competition",
        image: "/images/amenities/bocce.jpg",
      },
    ],
  },
  {
    category: "Stay Connected",
    icon: <Users className="w-8 h-8" />,
    items: [
      {
        name: "Clubhouse",
        description: "Spacious gathering place for clubs, classes, and events",
        image: "/images/amenities/clubhouse.jpg",
      },
      {
        name: "Outdoor Firepit",
        description: "Cozy gathering spot for evening conversations",
        image: "/images/amenities/firepit.jpg",
      },
      {
        name: "Event Lawn",
        description: "Large lawn for community celebrations and gatherings",
        image: "/images/amenities/event-lawn.jpg",
      },
      {
        name: "Billiards Room",
        description: "Relaxed space for games and socializing",
        image: "/images/amenities/billiards.jpg",
      },
    ],
  },
  {
    category: "Stay Relaxed",
    icon: <Sparkles className="w-8 h-8" />,
    items: [
      {
        name: "Spa",
        description: "Relax and unwind in the community spa",
        image: "/images/amenities/spa.jpg",
      },
      {
        name: "Walking Trails",
        description: "Scenic trails with beautiful mountain views",
        image: "/images/amenities/trails.jpg",
      },
      {
        name: "Dog Park",
        description: "Dedicated space for your furry friends to play",
        image: "/images/amenities/dog-park.jpg",
      },
    ],
  },
];

const blurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

function AmenityCard({
  amenity,
  index,
}: {
  amenity: (typeof amenities)[0]["items"][0];
  index: number;
}) {
  return (
    <ScrollAnimation delay={index * 50}>
      <div className="bg-white rounded-lg shadow-two hover:shadow-three transition-shadow overflow-hidden">
        <div className="relative h-48 bg-bg-light">
          <Image
            src={amenity.image}
            alt={amenity.name}
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL={blurDataURL}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-primary mb-2 font-playfair">
            {amenity.name}
          </h3>
          <p className="text-text-dark leading-relaxed">
            {amenity.description}
          </p>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default function AmenitiesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-primary text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                Your Private Resort, Minutes From Home
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                Del Webb North Ranch offers resort-style amenities designed to
                help you live your best life. Every amenity is fully built and
                ready to enjoy.
              </p>
            </div>
          </div>
        </section>

        {/* Amenities by Category */}
        {amenities.map((category, categoryIndex) => (
          <section
            key={category.category}
            className={`py-12 md:py-16 lg:py-20 ${
              categoryIndex % 2 === 0 ? "bg-white" : "bg-bg-light"
            }`}
          >
            <div className="container mx-auto px-4">
              <div className="mb-8 md:mb-12">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-success/10 rounded-full">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary font-playfair">
                    {category.category}
                  </h2>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {category.items.map((amenity, index) => (
                  <AmenityCard
                    key={amenity.name}
                    amenity={amenity}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Full Amenities List */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center font-playfair">
                Complete Amenities List
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-bg-light p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-4 font-playfair">
                    Recreation & Fitness
                  </h3>
                  <ul className="space-y-2 text-text-dark">
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">✓</span>
                      <span>Resort-style pool</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">✓</span>
                      <span>Heated lap pool</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">✓</span>
                      <span>Spa</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">✓</span>
                      <span>Fitness center with modern equipment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">✓</span>
                      <span>Lighted pickleball courts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">✓</span>
                      <span>Bocce courts</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-bg-light p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-4 font-playfair">
                    Community Spaces
                  </h3>
                  <ul className="space-y-2 text-text-dark">
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">✓</span>
                      <span>Clubhouse for events and classes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">✓</span>
                      <span>Billiards room</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">✓</span>
                      <span>Outdoor firepit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">✓</span>
                      <span>Event lawn</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">✓</span>
                      <span>Scenic walking trails</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">✓</span>
                      <span>Dog park</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-playfair">
                Experience These Amenities for Yourself
              </h2>
              <p className="text-lg text-gray-100 mb-6">
                Schedule a tour with Dr. Jan Duffy to see the amenities and
                community in person.
              </p>
              <Button
                asChild
                variant="accent"
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white"
              >
                <Link href="/contact">Schedule Your Tour</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
