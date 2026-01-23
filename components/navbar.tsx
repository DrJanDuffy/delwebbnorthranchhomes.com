"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

// Main navigation links (6-8 links ideal for sitelinks)
const mainNavLinks = [
  { href: "/", label: "Home" },
  { href: "/homes-for-sale", label: "Homes for Sale" },
  { href: "/floor-plans", label: "Floor Plans" },
  { href: "/amenities", label: "Amenities" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// Dropdown menus (moved Amenities to main nav, keeping Lifestyle in dropdown)
const dropdownMenus = [
  {
    label: "More",
    items: [
      { href: "/lifestyle", label: "Lifestyle" },
      { href: "/home-value", label: "Home Value" },
      { href: "/flyers", label: "Flyers & Brochures" },
      { href: "/blog", label: "Blog" },
      { href: "/faq", label: "FAQ" },
    ],
  },
];

// All links for mobile menu
const allNavLinks = [
  { href: "/", label: "Home" },
  { href: "/homes-for-sale", label: "Homes for Sale" },
  { href: "/floor-plans", label: "Floor Plans" },
  { href: "/amenities", label: "Amenities" },
  { href: "/lifestyle", label: "Lifestyle" },
  { href: "/home-value", label: "Home Value" },
  { href: "/flyers", label: "Flyers & Brochures" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Check if a link is active
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  // Check if dropdown contains active link
  const isDropdownActive = (items: { href: string }[]) => {
    return items.some((item) => isActive(item.href));
  };

  // Handle dropdown toggle
  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isSticky
          ? "bg-white shadow-sticky py-3"
          : "bg-white/95 backdrop-blur-sm py-4"
      )}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg sm:text-xl md:text-2xl font-bold text-primary font-playfair"
            aria-label="Del Webb North Ranch Home"
          >
            Del Webb North Ranch
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            {mainNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm xl:text-base font-medium transition-colors relative",
                  isActive(link.href)
                    ? "text-primary"
                    : "text-text-dark hover:text-primary"
                )}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary" />
                )}
              </Link>
            ))}

            {/* Dropdown Menus */}
            {dropdownMenus.map((menu) => {
              const isActiveMenu = isDropdownActive(menu.items);
              const isOpenMenu = openDropdown === menu.label;

              return (
                <div key={menu.label} className="relative">
                  <button
                    onClick={() => toggleDropdown(menu.label)}
                    className={cn(
                      "flex items-center gap-1 text-sm xl:text-base font-medium transition-colors relative",
                      isActiveMenu
                        ? "text-primary"
                        : "text-text-dark hover:text-primary"
                    )}
                  >
                    {menu.label}
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform",
                        isOpenMenu && "rotate-180"
                      )}
                    />
                    {isActiveMenu && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary" />
                    )}
                  </button>

                  {/* Dropdown Content */}
                  {isOpenMenu && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                      {menu.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "block px-4 py-2 text-sm transition-colors",
                            isActive(item.href)
                              ? "text-primary bg-primary/5 font-medium"
                              : "text-text-dark hover:text-primary hover:bg-gray-50"
                          )}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop CTA & Phone */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <a
              href="tel:7025001064"
              className="flex items-center gap-2 text-sm xl:text-base text-text-dark hover:text-primary transition-colors"
              aria-label="Call (702) 500-1064"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">(702) 500-1064</span>
            </a>
            <Button
              asChild
              variant="default"
              size="sm"
              className="bg-primary hover:bg-primary/90 text-sm xl:text-base"
            >
              <Link href="/contact">Schedule a Tour</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-text-dark hover:text-primary transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
            aria-expanded={isOpen ? 'true' : 'false'}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col gap-1">
              {allNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-3 py-3 rounded-md font-medium transition-colors min-h-[44px] flex items-center",
                    isActive(link.href)
                      ? "text-primary bg-primary/10 font-semibold"
                      : "text-text-dark hover:text-primary hover:bg-gray-50"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 pt-2 border-t border-gray-200">
                <a
                  href="tel:7025001064"
                  className="flex items-center gap-2 text-text-dark hover:text-primary transition-colors px-3 py-3 rounded-md min-h-[44px]"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">(702) 500-1064</span>
                </a>
                <Button
                  asChild
                  variant="default"
                  className="w-full mt-2 bg-primary hover:bg-primary/90"
                >
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Schedule a Tour
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
