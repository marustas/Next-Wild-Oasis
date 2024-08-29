import CabinCard from '../_components/CabinCard';
import { CabinPageProps } from '../_models/cabin';

export const metadata = {
  title: 'Cabins',
};

export default function Page({ cabins = [] }: CabinPageProps) {
  return (
    <div>
      <h1 className="text-4xl text-accent-500 font-medium">Our luxury cabins</h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy and luxurious cabins located right in the heart of the Italian Dolomites. Imagine waking up to beautiful
        mountain views, spending your days exploring the dark forests around, or jsut relaxing in your private hot tub
        uinder the stars. Enjoy nature&apos;s beauty in your own little home away form home. The perfect spot for a
        peaceful, calm vacation. Welcome to paradise.
      </p>
      {cabins.length > 0 && (
        <div className="grdi sm:grid-cols-1 md: grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {cabins.map((cabin) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
      )}
    </div>
  );
}
