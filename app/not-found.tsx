import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
};

const helpfulLinks = [
  { label: "Home", href: "/" },
  { label: "Wildfire Resilience", href: "/wildfire-resilience" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <section className="py-24 md:py-32 px-6 bg-white">
      <div className="mx-auto max-w-[600px] text-center">
        <h1 className="text-primary-green mb-6">Page Not Found</h1>

        <p className="text-body-charcoal text-lg leading-relaxed mb-8">
          We couldn&rsquo;t find that page. It may have been moved or doesn&rsquo;t exist.
        </p>

        <p className="text-body-charcoal text-[17px] leading-relaxed mb-6">
          Here are some helpful links to get you back on track:
        </p>

        <nav aria-label="Helpful links">
          <ul className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-4 sm:gap-x-8 sm:gap-y-4">
            {helpfulLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-primary-green font-semibold text-[17px] underline underline-offset-2 hover:text-secondary-green transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
