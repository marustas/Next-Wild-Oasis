import Image from 'next/image';
import Link from 'next/link';
import background from '@/public/bg.png';

export default function Page() {
  return (
    <main className="mt-24">
      <Image
        placeholder="blur"
        className="object-cover"
        quality={80}
        fill
        src={background}
        alt="Mountains and forests with two cabins"
      />
      <div className="relative z-10 text-center">
        <h1 className="text-primary-50 text-8xl mb-10 font-normal tracking-tight">Welcome to Paradise</h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-8 py-6 text-primary-800 font-semibold text-lg hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
