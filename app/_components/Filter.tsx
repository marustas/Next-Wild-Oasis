'use client';

import React, { useEffect, useState } from 'react';
import {
  Capacity,
  getCapacityKey,
  getCapacityValue,
} from '../_models/capacity.model';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function Filter({ capacity }: { capacity: Capacity }) {
  const [size, setSize] = useState(capacity);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  function handleSelect(key: string): void {
    const newSize = Capacity[getCapacityKey(key)];
    setSize(newSize);
  }

  useEffect(() => {
    function setSearchParams() {
      const params = new URLSearchParams(searchParams.toString());
      params.set('capacity', size);
      router.push(pathname + '?' + params.toString());
    }

    setSearchParams();
  }, [size]);

  return (
    <div className="flex border border-primary-800">
      {Object.keys(Capacity).map((key) => (
        <button
          className={`px-5 py-2 hover:bg-primary-800 ${getCapacityKey(key) === size && 'bg-primary-700'}`}
          key={key}
          onClick={() => handleSelect(key)}
        >
          {mapCapacityToText(getCapacityValue(key))}
        </button>
      ))}
    </div>
  );
}

function mapCapacityToText(capacity: Capacity): string {
  switch (capacity) {
    case Capacity.all:
      return `any number of guests`;
    case Capacity.large:
      return `6 and more guests`;
    case Capacity.medium:
      return `3 - 6 guests`;
    case Capacity.small:
      return `3 and less guests`;
  }
}
