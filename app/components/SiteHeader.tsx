"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/wildfire-resilience", label: "Wildfire Resilience" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/partners", label: "Partners" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/resources", label: "Resources" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-sage-panel">
      <div className="content-wide flex items-center justify-between px-4 md:px-6 lg:px-8 h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="Home">
          <Image
            src="/scwrf-logo.png"
            alt="San Clemente Wildfire Resilience Foundation logo"
            width={44}
            height={44}
            className="h-[44px] w-auto"
            priority
          />
          <span className="hidden sm:inline font-semibold text-primary-green text-base leading-tight">
            San Clemente<br className="sm:hidden" /> Wildfire Resilience
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-body-charcoal hover:text-primary-green rounded-md transition-colors no-underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side: Contact + Donate (desktop) */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <Link
            href="/contact"
            className="text-sm text-muted-gray hover:text-primary-green no-underline"
          >
            Contact
          </Link>
          <Link href="/donate" className="btn-primary !py-2 !px-5 !text-sm">
            Donate
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center min-h-[44px] min-w-[44px] p-2 rounded-md text-body-charcoal hover:bg-pale-green transition-colors"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-sage-panel bg-white">
          <nav className="px-4 py-3 flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-3 text-base font-medium text-body-charcoal hover:text-primary-green hover:bg-pale-green rounded-md no-underline transition-colors min-h-[44px] flex items-center"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="px-3 py-3 text-sm text-muted-gray hover:text-primary-green hover:bg-pale-green rounded-md no-underline transition-colors min-h-[44px] flex items-center"
            >
              Contact
            </Link>
            <div className="pt-2 px-3">
              <Link
                href="/donate"
                onClick={() => setMenuOpen(false)}
                className="btn-primary w-full !text-sm min-h-[44px]"
              >
                Donate
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
