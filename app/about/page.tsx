import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import VisionCallout from "../components/VisionCallout";
import GuidingIdeaBanner from "../components/GuidingIdeaBanner";
import SectionIntro from "../components/SectionIntro";
import PartnerRoleTable from "../components/PartnerRoleTable";
import CoreValueGrid from "../components/CoreValueGrid";

export const metadata: Metadata = {
  title: "About Us | San Clemente Wildfire Resilience Foundation",
  description:
    "Learn about the San Clemente Wildfire Resilience Foundation's vision, mission, core values, and role as a community connector for wildfire preparedness.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | San Clemente Wildfire Resilience Foundation",
    description:
      "Learn about the San Clemente Wildfire Resilience Foundation's vision, mission, core values, and role as a community connector for wildfire preparedness.",
    url: "https://goatsofsanclemente.com/about",
    type: "website",
    images: [{ url: "/scwrf-logo.png", alt: "San Clemente Wildfire Resilience Foundation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | San Clemente Wildfire Resilience Foundation",
    description:
      "Learn about the San Clemente Wildfire Resilience Foundation's vision, mission, core values, and role as a community connector for wildfire preparedness.",
    images: ["/scwrf-logo.png"],
  },
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
      "We are nonpartisan and serve all of San Clemente. We give residents safe and useful ways to volunteer and help their community.",
  },
  {
    title: "Facts and Trusted Guidance",
    description:
      "We use and share state law, agency guidance, and reliable facts. This helps people understand their choices and make informed decisions.",
  },
  {
    title: "Care for Nature",
    description:
      "We speak up for wildfire prevention that also protects native plants and habitat. We promote good care of open space. We do not clear land or plant landscaping.",
  },
  {
    title: "Clear Roles",
    description:
      "We work with the City, OCFA, HOAs, schools, and other partners. We respect each group\u2019s role and do not replace public agencies or contractors.",
  },
  {
    title: "Safe and Useful Volunteer Service",
    description:
      "Every volunteer role will have a clear purpose, safe steps, and responsible leaders. We use time, money, and other resources with care.",
  },
  {
    title: "Start Small and Grow With Care",
    description:
      "We start with work we can do well. We learn as we go and grow only when we have the people, partners, and funds to do it right.",
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
          <p className="mt-4 text-body-charcoal text-[17px] leading-relaxed">
            <Link href="/wildfire-resilience" className="text-primary-green hover:underline font-medium">
              Learn more about wildfire resilience in San Clemente — local hazard context, defensible space, and home hardening →
            </Link>
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
                    alt={`${member.name}, ${member.title} — placeholder photo`}
                    width={112}
                    height={112}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-primary-green font-bold text-[18px] leading-snug">
                  {member.name}
                </h3>
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
