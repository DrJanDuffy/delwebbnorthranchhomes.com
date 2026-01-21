'use client'
// Use for: search filters, interactive maps, image galleries, contact forms

import { useState } from 'react';
import type { Listing } from '@/types/listing';
import ListingsGrid from './listings-grid';
import ListingsFilters from './listings-filters';

type ListingsPageClientProps = {
  initialListings: Listing[];
};

export default function ListingsPageClient({
  initialListings,
}: ListingsPageClientProps) {
  const [filteredListings, setFilteredListings] = useState<Listing[]>(initialListings);

  return (
    <>
      <ListingsFilters
        listings={initialListings}
        onFilteredListingsChange={setFilteredListings}
      />
      <ListingsGrid listings={filteredListings} />
    </>
  );
}
