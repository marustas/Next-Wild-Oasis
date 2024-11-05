import React from 'react';

import { getCabins } from '../_lib/data-service';
import CabinCard from './CabinCard';
import { Cabin } from '../_models/cabin';
import { Capacity } from '../_models/capacity.model';

// import { unstable_noStore } from 'next/cache';

export default async function CabinList({ capacity }: { capacity: Capacity }) {
  // unstable_noStore();
  const cabins: Cabin[] = await getCabins();
  const filteredCabins = filterCabins(capacity, cabins);

  if (!filterCabins.length) return null;

  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-12 xl:gap-14">
      {filteredCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

function filterCabins(capacity: Capacity, cabins: Cabin[]): Cabin[] {
  switch (capacity) {
    case Capacity.all:
      return cabins;
    case Capacity.large:
      return cabins.filter((cabin) => cabin.maxCapacity >= 6);
    case Capacity.medium:
      return cabins.filter(
        (cabin) => cabin.maxCapacity > 3 && cabin.maxCapacity < 6
      );
    case Capacity.small:
      return cabins.filter((cabin) => cabin.maxCapacity <= 3);
  }
}
