import Image from 'next/image';
import { Cabin } from '../_models/cabin';

type CabinCardProps = {
  cabin: Cabin;
};

export default function CabinCard({ cabin }: CabinCardProps) {
  const { image, discount, name, regularPrice, id, maxCapacity } = cabin;
  return (
    <div className="flex border border-primary-800">
      <div className="relative flex-1">
        <Image
          fill
          src={image}
          alt={`Cabin ${name}`}
          className="flex-1 border-r border-primary-800 object-cover"
        />
      </div>
      <div className="flex-grow">
        <div className="bg-primary-950 px-7 pb-4 pt-5">
          <h3 className="mb-3 text-2xl font-semibold text-accent-500">
            Cabin {name}
          </h3>
          <div className="mb-2 flex items-center gap-3">
            <p className="text-lg text-primary-200">
              {' '}
              <span className="font-bold">For up to {maxCapacity} </span> guests
            </p>
          </div>
          <p className="flex items-baseline justify-end gap-3">
            {discount > 0 ? (
              <>
                <span className="text-3xl font-[350]">
                  ${regularPrice - discount}
                </span>
                <span className="font-semibold text-primary-600 line-through">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-3xl font-[350]">${regularPrice}</span>
            )}
            <span className="text-primary-200">/ night</span>
          </p>
        </div>
        <div className="border-t border-t-primary-800 bg-primary-950 text-right">
          <a
            className="inline-block border-l border-primary-800 px-6 py-4 transition-all hover:bg-accent-600 hover:text-primary-900"
            href={`/cabins/${id}`}
          >
            Details & reservations &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
