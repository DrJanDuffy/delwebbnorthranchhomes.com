import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/../components/navbar";
import Footer from "@/../components/footer";
import { Button } from "@/../components/ui/button";
import Link from "next/link";
import ScrollAnimation from "@/../components/scroll-animation";
import { Home, Maximize2, Car, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Floor Plans | Del Webb North Ranch | 9 Single-Story Designs",
  description:
    "Explore all 9 floor plans at Del Webb North Ranch. Cottage, Classic, and Retreat series from 1,285 to 2,015 sq ft. View Matterport virtual tours.",
};

const floorPlans = [
  // Cottage Series
  {
    series: "Cottage",
    name: "Canyon",
    sqft: "1,285",
    beds: 2,
    baths: 2,
    garage: 2,
    description:
      "Efficient and comfortable, perfect for those seeking cozy living without compromise.",
  },
  {
    series: "Cottage",
    name: "Overlook",
    sqft: "1,400",
    beds: 2,
    baths: 2,
    garage: 2,
    description:
      "Spacious two-bedroom with open living areas and modern finishes.",
  },
  {
    series: "Cottage",
    name: "Peak",
    sqft: "1,509",
    beds: 2,
    baths: 2.5,
    garage: 2,
    description:
      "Largest in the Cottage series with 2.5 baths and expanded living space.",
  },
  // Classic Series
  {
    series: "Classic",
    name: "Getaway",
    sqft: "1,451",
    beds: 2,
    baths: 2,
    garage: 2,
    description:
      "Room to spread out with optional den for hobbies or home office.",
  },
  {
    series: "Classic",
    name: "Solitude",
    sqft: "1,620",
    beds: 3,
    baths: 2,
    garage: 2,
    description:
      "Three-bedroom design with flexible space for guests or family.",
  },
  {
    series: "Classic",
    name: "Expedition",
    sqft: "1,770",
    beds: 3,
    baths: 2.5,
    garage: 2,
    description:
      "Spacious three-bedroom with 2.5 baths and generous living areas.",
  },
  // Retreat Series
  {
    series: "Retreat",
    name: "Sanctuary",
    sqft: "1,716",
    beds: 3,
    baths: 2,
    garage: 2,
    description:
      "Perfect for entertaining with open concept and premium finishes.",
  },
  {
    series: "Retreat",
    name: "Haven",
    sqft: "1,850",
    beds: 3,
    baths: 2.5,
    garage: 2,
    description:
      "Spacious living for those who love to host or want extra room.",
  },
  {
    series: "Retreat",
    name: "Preserve",
    sqft: "2,015",
    beds: 3,
    baths: 2.5,
    garage: 2,
    description:
      "Largest floor plan with ample space for visiting family and entertaining.",
  },
];

const blurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

function FloorPlanCard({
  plan,
  index,
}: {
  plan: (typeof floorPlans)[0];
  index: number;
}) {
  return (
    <ScrollAnimation delay={index * 50}>
      <div className="bg-white rounded-lg shadow-two hover:shadow-three transition-shadow overflow-hidden">
        {/* Image Placeholder */}
        <div className="relative h-64 bg-bg-light">
          <Image
            src={`/images/floor-plans/${plan.series.toLowerCase()}-${plan.name.toLowerCase()}.jpg`}
            alt={`${plan.name} floor plan - ${plan.sqft} sq ft`}
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL={blurDataURL}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded text-sm font-semibold">
            {plan.series} Series
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold text-primary mb-2 font-playfair">
            {plan.name}
          </h3>
          <p className="text-xl font-semibold text-accent mb-4">
            {plan.sqft} sq ft
          </p>

          {/* Specs */}
          <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <Home className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-gray-500">Bedrooms</p>
                <p className="font-semibold text-text-dark">{plan.beds}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-gray-500">Bathrooms</p>
                <p className="font-semibold text-text-dark">{plan.baths}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Car className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-gray-500">Garage</p>
                <p className="font-semibold text-text-dark">{plan.garage}</p>
              </div>
            </div>
          </div>

          <p className="text-text-dark mb-4 leading-relaxed">
            {plan.description}
          </p>

          {/* Matterport Tour Button */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              asChild
              variant="default"
              className="flex-1 bg-primary hover:bg-primary/90"
            >
              <Link
                href={`#tour-${plan.name.toLowerCase()}`}
                className="flex items-center justify-center gap-2"
              >
                <Maximize2 className="w-4 h-4" />
                Virtual Tour
              </Link>
            </Button>
            <Button asChild variant="outline" className="flex-1">
              <Link href="/contact">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default function FloorPlansPage() {
  const cottagePlans = floorPlans.filter((p) => p.series === "Cottage");
  const classicPlans = floorPlans.filter((p) => p.series === "Classic");
  const retreatPlans = floorPlans.filter((p) => p.series === "Retreat");

  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-primary text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                Explore Our Floor Plans
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                Nine thoughtfully designed single-story floor plans ranging from
                1,285 to 2,015 square feet. Every home features 2-3 bedrooms,
                2-2.5 baths, and a 2-car garage.
              </p>
            </div>
          </div>
        </section>

        {/* Cottage Series */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 text-center font-playfair">
                Cottage Series
              </h2>
              <p className="text-center text-text-dark max-w-2xl mx-auto">
                1,285 - 1,509 sq ft | Efficient, comfortable, easy to maintain
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {cottagePlans.map((plan, index) => (
                <FloorPlanCard key={plan.name} plan={plan} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Classic Series */}
        <section className="py-12 md:py-16 lg:py-20 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 text-center font-playfair">
                Classic Series
              </h2>
              <p className="text-center text-text-dark max-w-2xl mx-auto">
                1,451 - 1,770 sq ft | Room to spread out with optional dens
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {classicPlans.map((plan, index) => (
                <FloorPlanCard
                  key={plan.name}
                  plan={plan}
                  index={index + cottagePlans.length}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Retreat Series */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 text-center font-playfair">
                Retreat Series
              </h2>
              <p className="text-center text-text-dark max-w-2xl mx-auto">
                1,716 - 2,015 sq ft | Spacious living for entertaining
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {retreatPlans.map((plan, index) => (
                <FloorPlanCard
                  key={plan.name}
                  plan={plan}
                  index={index + cottagePlans.length + classicPlans.length}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Matterport Tours Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 text-center font-playfair">
                Virtual Tours
              </h2>
              <p className="text-center text-text-dark mb-8">
                Take a 3D virtual tour of our model homes using Matterport
                technology. Explore every room from the comfort of your home.
              </p>

              {/* Matterport Embed Placeholder */}
              <div className="bg-white rounded-lg shadow-three p-4 md:p-6 mb-8">
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Maximize2 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-text-dark font-semibold mb-2">
                      Matterport Virtual Tour
                    </p>
                    <p className="text-sm text-gray-500">
                      {/* TODO: Add Matterport embed code */}
                      Matterport tour embed will be displayed here
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button asChild variant="default" size="lg">
                  <Link href="/contact">Schedule an In-Person Tour</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-playfair">
                Ready to See These Floor Plans in Person?
              </h2>
              <p className="text-lg text-gray-100 mb-6">
                Schedule a private tour with Dr. Jan Duffy to walk through our
                model homes and see which floor plan fits your lifestyle.
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
