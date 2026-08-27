import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/contact", label: "Contact" },
];

const partnerLinks = [
  {
    href: "https://www.facebook.com/groups/4224960284458772/",
    label: "Facebook Group",
  },
  {
    href: "https://www.sanclemente.gov/FormCenter/Public-Works-6/Goat-Grazing-Pilot-Program-67",
    label: "Goat Grazing Pilot",
  },
  {
    href: "https://www.sanclemente.gov",
    label: "City of San Clemente",
  },
];

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-soft-neutral border-t border-sage-panel mt-auto">
      <div className="content-wide px-4 md:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 no-underline" aria-label="Home">
              <Image
                src="/scwrf-logo.png"
                alt="San Clemente Wildfire Resilience Foundation logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="caption mt-3 max-w-xs">
              A California Nonprofit Public Benefit Corporation
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer quick links">
            <h2 className="small-text text-primary-green mb-3">Quick Links</h2>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-charcoal hover:text-primary-green no-underline text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Partner Links */}
          <nav aria-label="Footer partner links">
            <h2 className="small-text text-primary-green mb-3">Partners</h2>
            <ul className="flex flex-col gap-2">
              {partnerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-charcoal hover:text-primary-green no-underline text-sm"
                  >
                    {link.label}
                    <span className="sr-only"> (opens in new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="small-text text-primary-green mb-3">Contact</h2>
            <a
              href="mailto:hello@goatsofsanclemente.com"
              className="text-sm text-body-charcoal hover:text-primary-green no-underline block"
            >
              hello@goatsofsanclemente.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-sage-panel flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="caption mb-0">
            &copy; {currentYear} San Clemente Wildfire Resilience Foundation
          </p>
          <nav aria-label="Footer legal links">
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="caption hover:text-primary-green no-underline"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="caption hover:text-primary-green no-underline"
              >
                Terms
              </Link>
              <span className="caption">EIN: XX-XXXXXXX</span>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
}
