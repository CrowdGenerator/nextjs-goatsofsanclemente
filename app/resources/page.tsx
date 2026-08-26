import SectionIntro from "../components/SectionIntro";
import ResourceLinkCard from "../components/ResourceLinkCard";

export const metadata = {
  title: "Resources | San Clemente Wildlife & River Foundation",
  description:
    "Trusted resources for wildfire resilience, preparedness, and environmental stewardship in San Clemente.",
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
    <main className="mx-auto max-w-[1180px] px-6 py-16">
      <SectionIntro
        title="Resources"
        subtitle="Explore trusted resources for wildfire resilience, preparedness, and environmental stewardship in San Clemente. These organizations provide guidance, tools, and information to help residents, HOAs, and community members take practical steps."
      />

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
    </main>
  );
}
