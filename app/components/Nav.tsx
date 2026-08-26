import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-orange-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="btn-logo text-xl font-bold">
              Goats of San Clemente
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="/" className="nav-link px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link href="/about" className="nav-link px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <Link href="/blog" className="nav-link px-3 py-2 rounded-md text-sm font-medium">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
