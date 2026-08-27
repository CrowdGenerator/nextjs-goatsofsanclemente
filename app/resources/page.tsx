import type { Metadata } from "next";
import ResourceLinkCard from "../components/ResourceLinkCard";

export const metadata: Metadata = {
  title: "Resources | San Clemente Wildfire Resilience Foundation",
  description:
    "Trusted wildfire resilience resources for San Clemente residents — Firewise USA, CAL FIRE, OCFA, defensible space guides, and home hardening information.",
  alternates: { canonical: "/resources" },
  openGraph: {
    title: "Resources | San Clemente Wildfire Resilience Foundation",
    description:
      "Trusted wildfire resilience resources for San Clemente residents — Firewise USA, CAL FIRE, OCFA, defensible space guides, and home hardening information.",
    url: "https://goatsofsanclemente.com/resources",
    type: "website",
    images: [{ url: "/scwrf-logo.png", alt: "San Clemente Wildfire Resilience Foundation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resources | San Clemente Wildfire Resilience Foundation",
    description:
      "Trusted wildfire resilience resources for San Clemente residents — Firewise USA, CAL FIRE, OCFA, defensible space guides, and home hardening information.",
    images: ["/scwrf-logo.png"],
  },
};

const resources = [
  {
    title: "Firewise USA",
    description:
      "The Firewise USA program provides a framework to help neighborhoods organize, take local action, and reduce wildfire risk.",
    href: "https://www.nfpa.org/public-education-and-research/wildfire/firewise",
  },
  {
    title: "CAL FIRE",
    description:
      "California's Department of Forestry and Fire Protection provides wildfire prevention, emergency response, and environmental stewardship resources.",
    href: "https://www.fire.ca.gov",
  },
  {
    title: "Orange County Fire Authority (OCFA)",
    description:
      "OCFA provides fire protection, emergency medical services, and fire prevention services to San Clemente and surrounding communities.",
    href: "https://www.ocfa.org",
  },
  {
    title: "City of San Clemente",
    description:
      "The City of San Clemente provides local government services, public safety, and community resources for residents.",
    href: "https://www.sanclemente.gov",
  },
  {
    title: "Defensible Space Guide",
    description:
      "Learn how to create defensible space around your home to reduce wildfire risk and protect your property.",
    href: "https://www.fire.ca.gov/what-we-do/engineering-and-building/defensible-space",
  },
  {
    title: "Home Hardening Guide",
    description:
      "Discover how to harden your home against wildfire with fire-resistant materials and construction techniques.",
    href: "https://www.fire.ca.gov/what-we-do/engineering-and-building/home-hardening",
  },
];

export default function ResourcesPage() {
  return (
    <article>
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="content-reading">
          <h1>Resources</h1>
          <p className="mt-3 text-muted-gray text-[17px] leading-[1.6] max-w-[680px]">
            Explore trusted resources for wildfire resilience, preparedness, and environmental stewardship in San Clemente. These organizations provide guidance, tools, and information to help residents, HOAs, and community members take practical steps.
          </p>
        </div>
      </section>
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 pb-12 md:pb-16">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <ResourceLinkCard
            key={resource.title}
            title={resource.title}
            description={resource.description}
            href={resource.href}
          />
        ))}
      </div>
      </div>
    </article>
  );
}
