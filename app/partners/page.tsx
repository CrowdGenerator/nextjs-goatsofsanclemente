import Image from "next/image";
import PartnerRoleTable from "../components/PartnerRoleTable";
import PartnerCTA from "../components/PartnerCTA";

export const metadata = {
  title: "Partners",
  description:
    "Partners of the San Clemente Wildfire Resilience Foundation — working together with residents, the City, OCFA, HOAs, schools, and community organizations for wildfire resilience.",
};

const partnerRows = [
  {
    foundation: "Share trusted guidance in plain language.",
    partners:
      "Authority over public safety, land use, inspections, emergency response, and property rules.",
  },
  {
    foundation:
      "Bring residents, volunteers, experts, businesses, nonprofits, and agencies together.",
    partners:
      "Technical expertise, professional standards, command, and daily operations.",
  },
  {
    foundation:
      "Support volunteers, community programs, and neighborhood action.",
    partners:
      "Control of their own rules, budgets, approvals, staff, and agreements.",
  },
  {
    foundation: "Share community needs and ideas with partners.",
    partners: "Responsibility for their own services and decisions.",
  },
];

const partners = [
  "City of San Clemente",
  "OCFA",
  "CAL FIRE",
  "Firewise USA",
  "Local HOAs",
  "Local Schools",
];

export default function PartnersPage() {
  return (
    <article>
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="content-reading">
          <h1>Partners</h1>
        </div>
      </section>
      <div className="mx-auto max-w-[820px] px-4 sm:px-6 pb-12 md:pb-16">

      {/* How We Work With Partners */}
      <section className="mb-10">
        <h2 className="text-primary-green font-bold text-[clamp(22px,2.8vw,26px)] leading-[1.3] mb-3">
          How We Work With Partners
        </h2>
        <p className="text-body-charcoal text-[17px] leading-[1.6] max-w-[680px]">
          The Foundation is San Clemente&apos;s nonprofit community connector and
          advocate. We bring residents, the City, OCFA, HOAs, schools,
          businesses, nonprofits, and other partners together. We help people
          find clear information, join useful programs, volunteer safely, and
          support shared goals.
        </p>
      </section>

      {/* A Clear Boundary */}
      <section className="mb-10">
        <h2 className="text-primary-green font-bold text-[clamp(22px,2.8vw,26px)] leading-[1.3] mb-3">
          A Clear Boundary
        </h2>
        <p className="text-body-charcoal text-[17px] leading-[1.6] max-w-[680px]">
          The Foundation does not replace or direct the City, OCFA, regulators,
          HOAs, schools, contractors, or other groups. Each partner keeps its
          own authority, duties, and decisions.
        </p>
      </section>

      {/* Foundation / Partner Roles */}
      <section className="mb-10">
        <h2 className="text-primary-green font-bold text-[clamp(22px,2.8vw,26px)] leading-[1.3] mb-4">
          Foundation / Partner Roles
        </h2>
        <PartnerRoleTable rows={partnerRows} />
      </section>

      {/* The Result */}
      <section className="mb-10">
        <h2 className="text-primary-green font-bold text-[clamp(22px,2.8vw,26px)] leading-[1.3] mb-3">
          The Result
        </h2>
        <p className="text-body-charcoal text-[17px] leading-[1.6] max-w-[680px]">
          Residents have a clear place to connect and take part. Partner groups
          can reach more people. San Clemente can build a shared culture of
          safety, care, and preparation without copying the work of public
          agencies.
        </p>
      </section>

      {/* Our Partners */}
      <section className="mb-10">
        <h2 className="text-primary-green font-bold text-[clamp(22px,2.8vw,26px)] leading-[1.3] mb-6">
          Our Partners
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((name) => (
            <div
              key={name}
              className="flex flex-col items-center justify-center bg-gray-100 rounded-lg p-6 border border-gray-200"
            >
              <div className="relative w-20 h-20 mb-3">
                <Image
                  src="/scwrf-logo.png"
                  alt={`${name} logo placeholder`}
                  fill
                  className="object-contain"
                  sizes="80px"
                />
              </div>
              <span className="text-body-charcoal font-semibold text-[15px] text-center">
                {name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Partner CTA */}
      <PartnerCTA
        title="Partner With Us"
        description="Interested in working together? We welcome partnerships with organizations that share our commitment to wildfire resilience in San Clemente."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
      </div>
    </article>
  );
}
