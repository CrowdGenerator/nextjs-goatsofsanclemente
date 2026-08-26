import type { Metadata } from "next";
import Image from "next/image";
import VisionCallout from "../components/VisionCallout";
import GuidingIdeaBanner from "../components/GuidingIdeaBanner";
import SectionIntro from "../components/SectionIntro";
import PartnerRoleTable from "../components/PartnerRoleTable";
import CoreValueGrid from "../components/CoreValueGrid";

export const metadata: Metadata = {
  title: "About the Foundation",
  description:
    "Learn about the San Clemente Wildfire Resilience Foundation — our vision, mission, purpose, core values, leadership, and how we work with city partners to build a wildfire-resilient community.",
};

const boardMembers = [
  { name: "Bob Smith", title: "Chair" },
  { name: "Bob A. Smith", title: "Vice Chair" },
  { name: "Bob Smith Jr.", title: "Treasurer" },
  { name: "Dr. Bob Smith", title: "Secretary" },
];

const partnerRoleRows = [
  {
    foundation: "Share trusted guidance in plain language.",
    partners:
      "Authority over public safety, land use, inspections, emergency response, and property rules.",
  },
  {
    foundation:
      "Bring residents, volunteers, experts, businesses, nonprofits, and agencies together.",
    partners: "Technical expertise, professional standards, command, and daily operations.",
  },
  {
    foundation: "Support volunteers, community programs, and neighborhood action.",
    partners:
      "Control of their own rules, budgets, approvals, staff, and agreements.",
  },
  {
    foundation: "Share community needs and ideas with partners.",
    partners: "Responsibility for their own services and decisions.",
  },
];

const coreValues = [
  {
    title: "Community First",
    description:
      "We are nonpartisan and serve all of San Clemente. Every resident, neighborhood, and partner matters in building wildfire resilience.",
  },
  {
    title: "Facts and Trusted Guidance",
    description:
      "We use and share state law, agency guidance, and reliable facts. Our education is clear, accurate, and easy to act on.",
  },
  {
    title: "Care for Nature",
    description:
      "We speak up for wildfire prevention that also protects native plants and habitat. Healthy landscapes and safe communities go hand in hand.",
  },
  {
    title: "Clear Roles",
    description:
      "We work with the City, OCFA, HOAs, schools, and other partners — each with their own authority. The Foundation connects, supports, and advocates without replacing anyone's role.",
  },
  {
    title: "Safe and Useful Volunteer Service",
    description:
      "Every volunteer role will have a clear purpose, safe steps, and responsible leaders. We prepare people before they serve and support them while they serve.",
  },
  {
    title: "Start Small and Grow With Care",
    description:
      "We start with work we can do well and grow as trust, resources, and community readiness allow. Quality and accountability come before speed.",
  },
];

export default function AboutPage() {
  return (
    <article>
      {/* 1. Page Title */}
      <section className="py-10 md:py-24 px-4 sm:px-6">
        <div className="content-reading">
          <h1>About the Foundation</h1>
        </div>
      </section>

      {/* 2. Vision Section */}
      <section className="py-10 md:py-20 px-4 sm:px-6">
        <div className="content-reading">
          <VisionCallout label="VISION | THE FUTURE WE SEEK">
            A wildfire-resilient San Clemente where informed residents, healthy
            native landscapes, strong partnerships, and shared preparation
            protect people, neighborhoods, and nature for future generations.
          </VisionCallout>
        </div>
      </section>

      {/* 3. Purpose Section */}
      <section className="py-10 md:py-20 px-4 sm:px-6">
        <div className="content-reading">
          <SectionIntro title="PURPOSE | WHY WE EXIST" />
          <p className="text-body-charcoal text-lg leading-relaxed font-semibold mt-4">
            Keep wildfire resilience a community priority.
          </p>
          <p className="text-body-charcoal text-[17px] leading-relaxed mt-4">
            The Foundation gives residents and local partners a trusted voice and
            a practical way to work together. This helps San Clemente reduce
            wildfire risk, prepare for emergencies, care for nature, and protect
            quality of life.
          </p>
        </div>
      </section>

      {/* 4. Mission Section */}
      <section className="py-10 md:py-20 px-4 sm:px-6">
        <div className="content-reading">
          <SectionIntro title="MISSION | WHAT WE DO" />
          <p className="text-body-charcoal text-lg leading-relaxed font-semibold mt-4">
            Educate, connect and mobilize the community.
          </p>
          <p className="text-body-charcoal text-[17px] leading-relaxed mt-4">
            We connect residents and partners with facts, education, and ways to
            help. Our work supports wildfire prevention, defensible space,
            Firewise USA®, native habitat, fuel reduction, emergency
            preparation, volunteer service, and shared community action.
          </p>
        </div>
      </section>

      {/* 5. Guiding Idea */}
      <GuidingIdeaBanner text="Make wildfire resilience clear, practical, and part of daily life — not only an emergency concern." />

      {/* 6. Organizational Role */}
      <section className="py-12 md:py-24 px-4 sm:px-6">
        <div className="content-reading">
          <SectionIntro
            title="How We Work With the City, OCFA, HOAs, Schools and Other Partners"
            subtitle="The Foundation is San Clemente's nonprofit community connector and advocate."
          />
        </div>
        <div className="content-wide mt-8">
          <PartnerRoleTable rows={partnerRoleRows} />
        </div>
      </section>

      {/* 7. Core Values */}
      <section className="py-12 md:py-24 px-4 sm:px-6">
        <div className="content-reading">
          <SectionIntro title="Core Values" />
        </div>
        <div className="content-wide mt-8">
          <CoreValueGrid values={coreValues} />
        </div>
      </section>

      {/* 8. Our Focus */}
      <section className="py-10 md:py-20 px-4 sm:px-6">
        <div className="content-reading">
          <SectionIntro title="Our Focus" />
          <p className="text-body-charcoal text-[17px] leading-relaxed mt-4">
            We focus on San Clemente. We connect residents and partners, support
            safe volunteer work, and directly promote wildfire prevention,
            preparedness, education, and care for the environment.
          </p>
        </div>
      </section>

      {/* 9. Board / Leadership */}
      <section className="py-12 md:py-24 px-4 sm:px-6 bg-soft-neutral">
        <div className="content-reading">
          <SectionIntro title="Leadership" />
        </div>
        <div className="content-wide mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {boardMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white border border-gray-200 rounded-lg p-6 text-center"
              >
                <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden bg-pale-green flex items-center justify-center">
                  <Image
                    src="/scwrf-logo.png"
                    alt={`${member.name} — ${member.title}`}
                    width={112}
                    height={112}
                    className="object-contain"
                  />
                </div>
                <h4 className="text-primary-green font-bold text-[18px] leading-snug">
                  {member.name}
                </h4>
                <p className="text-muted-gray text-[15px] mt-1">
                  {member.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
