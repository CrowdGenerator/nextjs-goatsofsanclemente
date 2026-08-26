import Link from "next/link";

interface HeroProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  vision?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function Hero({
  eyebrow = "SAN CLEMENTE",
  title,
  intro,
  vision,
  primaryCta = { label: "Learn About Wildfire Resilience", href: "/wildfire-resilience" },
  secondaryCta = { label: "Get Involved", href: "/get-involved" },
}: HeroProps) {
  return (
    <section className="bg-white py-12 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="content-hero">
        {eyebrow && (
          <p className="eyebrow mb-4">{eyebrow}</p>
        )}

        <h1 className="text-primary-green mb-6">{title}</h1>

        {intro && (
          <p className="text-body-charcoal text-lg leading-relaxed max-w-3xl mb-6">
            {intro}
          </p>
        )}

        {vision && (
          <p className="text-body-charcoal text-xl italic leading-relaxed max-w-3xl mb-10">
            {vision}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href={primaryCta.href} className="btn-primary">
            {primaryCta.label}
          </Link>
          <Link href={secondaryCta.href} className="btn-secondary">
            {secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
