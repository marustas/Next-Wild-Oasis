import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex items-center gap-16">
        <li>
          <Link
            className="transition-colors hover:text-accent-400"
            href="/cabins"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            className="transition-colors hover:text-accent-400"
            href="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="transition-colors hover:text-accent-400"
            href="/account"
          >
            Guest Area
          </Link>
        </li>
      </ul>
    </nav>
  );
}
