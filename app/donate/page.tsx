import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Donate | San Clemente Wildfire Resilience Foundation",
  description:
    "Support the San Clemente Wildfire Resilience Foundation. Donation platform coming soon.",
  alternates: { canonical: "/donate" },
  openGraph: {
    title: "Donate | San Clemente Wildfire Resilience Foundation",
    description: "Support the San Clemente Wildfire Resilience Foundation. Donation platform coming soon.",
    url: "https://goatsofsanclemente.com/donate",
    type: "website",
    images: [{ url: "/scwrf-logo.png", alt: "San Clemente Wildfire Resilience Foundation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Donate | San Clemente Wildfire Resilience Foundation",
    description: "Support the San Clemente Wildfire Resilience Foundation. Donation platform coming soon.",
    images: ["/scwrf-logo.png"],
  },
};

export default function DonatePage() {
  return (
    <article>
      {/* Hero / Header */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-pale-green">
        <div className="content-hero mx-auto text-center">
          <h1 className="text-primary-green">Support the Foundation</h1>
        </div>
      </section>

      {/* Coming Soon Message */}
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="content-hero mx-auto text-center">
          <h2 className="text-primary-green mb-6">
            Donation Platform Coming Soon
          </h2>
          <p className="text-body-charcoal text-lg leading-relaxed">
            We&rsquo;re working on setting up a secure donation platform to
            support wildfire resilience programs in San Clemente. Check back
            soon for updates on how you can contribute.
          </p>
        </div>
      </section>

      {/* What Your Support Will Help Build */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-soft-neutral">
        <div className="content-hero mx-auto text-center">
          <h3 className="text-secondary-green mb-4">
            What Your Support Will Help Build
          </h3>
          <p className="text-body-charcoal text-[17px] leading-relaxed">
            Your support will help us build community education programs,
            environmental stewardship initiatives, and youth learning
            opportunities — all focused on making San Clemente more
            wildfire-resilient.
          </p>
        </div>
      </section>

      {/* Alternative CTA */}
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="content-hero mx-auto text-center">
          <p className="text-body-charcoal text-lg leading-relaxed mb-8">
            In the meantime, you can get involved by volunteering or partnering
            with us.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/get-involved" className="btn-secondary">
              Get Involved
            </Link>
            <Link href="/" className="btn-secondary">
              Return to Home
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
