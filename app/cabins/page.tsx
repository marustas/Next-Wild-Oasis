import { Suspense } from 'react';
import CabinList from '../_components/CabinList';
import Spinner from '../_components/Spinner';
import { getCapacityValue } from '../_models/capacity.model';
import Filter from '../_components/Filter';

// doesn't work because filtering makes the page dynamic
// export const revalidate = 3600;

export const metadata = {
  title: 'Cabins',
};

type Props = {
  searchParams: { [key: string]: string | undefined };
};

export default function Page({ searchParams }: Props) {
  const capacityKey = searchParams.capacity ?? 'all';

  const capacity = getCapacityValue(capacityKey);
  return (
    <div>
      <h1 className="text-4xl font-medium text-accent-500">
        Our luxury cabins
      </h1>
      <p className="mb-10 text-lg text-primary-200">
        Cozy and luxurious cabins located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub uinder the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>
      <div className="mb-8 flex justify-end">
        <Filter capacity={capacity} />
      </div>
      <Suspense fallback={<Spinner />}>
        <CabinList capacity={capacity} />
      </Suspense>
    </div>
  );
}
