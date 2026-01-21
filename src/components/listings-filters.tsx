'use client'
// Use for: search filters, interactive maps, image galleries, contact forms

import { useState, useMemo } from 'react';
import type { Listing } from '@/types/listing';
import { Search, Filter, X } from 'lucide-react';
import { Button } from '@/../components/ui/button';

type ListingsFiltersProps = {
  listings: Listing[];
  onFilteredListingsChange: (filtered: Listing[]) => void;
};

export default function ListingsFilters({
  listings,
  onFilteredListingsChange,
}: ListingsFiltersProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSeries, setSelectedSeries] = useState<string>('all');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minBedrooms, setMinBedrooms] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredListings = useMemo(() => {
    return listings.filter((listing) => {
      // Search query filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
          listing.address.toLowerCase().includes(query) ||
          listing.city.toLowerCase().includes(query) ||
          listing.description?.toLowerCase().includes(query) ||
          listing.floorPlan?.toLowerCase().includes(query);
        if (!matchesSearch) return false;
      }

      // Series filter
      if (selectedSeries !== 'all' && listing.series !== selectedSeries) {
        return false;
      }

      // Price filters
      if (minPrice && listing.price < parseInt(minPrice)) {
        return false;
      }
      if (maxPrice && listing.price > parseInt(maxPrice)) {
        return false;
      }

      // Bedrooms filter
      if (minBedrooms && listing.bedrooms < parseInt(minBedrooms)) {
        return false;
      }

      return true;
    });
  }, [listings, searchQuery, selectedSeries, minPrice, maxPrice, minBedrooms]);

  // Update parent when filtered results change
  useMemo(() => {
    onFilteredListingsChange(filteredListings);
  }, [filteredListings, onFilteredListingsChange]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedSeries('all');
    setMinPrice('');
    setMaxPrice('');
    setMinBedrooms('');
  };

  const hasActiveFilters =
    searchQuery ||
    selectedSeries !== 'all' ||
    minPrice ||
    maxPrice ||
    minBedrooms;

  return (
    <div className="mb-8">
      {/* Search Bar */}
      <div className="relative mb-4">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search by address, city, or description..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none"
        />
      </div>

      {/* Filter Toggle */}
      <div className="flex items-center justify-between mb-4">
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2"
        >
          <Filter className="w-4 h-4" />
          {showFilters ? 'Hide' : 'Show'} Filters
        </Button>
        {hasActiveFilters && (
          <Button variant="ghost" onClick={clearFilters} className="flex items-center gap-2">
            <X className="w-4 h-4" />
            Clear All
          </Button>
        )}
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <div className="bg-bg-light rounded-lg p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Series Filter */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-2">
                Series
              </label>
              <select
                value={selectedSeries}
                onChange={(e) => setSelectedSeries(e.target.value)}
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:border-primary focus:outline-none"
              >
                <option value="all">All Series</option>
                <option value="Cottage">Cottage</option>
                <option value="Classic">Classic</option>
                <option value="Retreat">Retreat</option>
              </select>
            </div>

            {/* Min Price */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-2">
                Min Price
              </label>
              <input
                type="number"
                placeholder="$400,000"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:border-primary focus:outline-none"
              />
            </div>

            {/* Max Price */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-2">
                Max Price
              </label>
              <input
                type="number"
                placeholder="$600,000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:border-primary focus:outline-none"
              />
            </div>

            {/* Min Bedrooms */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-2">
                Min Bedrooms
              </label>
              <select
                value={minBedrooms}
                onChange={(e) => setMinBedrooms(e.target.value)}
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:border-primary focus:outline-none"
              >
                <option value="">Any</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm text-text-dark">
              Showing <strong>{filteredListings.length}</strong> of{' '}
              <strong>{listings.length}</strong> listings
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
