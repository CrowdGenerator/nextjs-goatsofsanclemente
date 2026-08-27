import type { Metadata } from "next";
import Link from "next/link";
import FutureProgramNotice from "../components/FutureProgramNotice";
import ProgramCard from "../components/ProgramCard";

export const metadata: Metadata = {
  title: "Programs | San Clemente Wildfire Resilience Foundation",
  description:
    "Explore future wildfire community education, environmental stewardship, and youth learning programs for San Clemente wildfire preparedness being developed by the San Clemente Wildfire Resilience Foundation.",
  alternates: { canonical: "/programs" },
  openGraph: {
    title: "Programs | San Clemente Wildfire Resilience Foundation",
    description:
      "Explore future wildfire community education, environmental stewardship, and youth learning programs for San Clemente wildfire preparedness being developed by the San Clemente Wildfire Resilience Foundation.",
    url: "https://goatsofsanclemente.com/programs",
    type: "website",
    images: [{ url: "/scwrf-logo.png", alt: "San Clemente Wildfire Resilience Foundation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Programs | San Clemente Wildfire Resilience Foundation",
    description:
      "Explore future wildfire community education, environmental stewardship, and youth learning programs for San Clemente wildfire preparedness being developed by the San Clemente Wildfire Resilience Foundation.",
    images: ["/scwrf-logo.png"],
  },
};

export default function ProgramsPage() {
  return (
    <article>
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="content-hero mx-auto">
          <h1>Programs</h1>
        </div>
      </section>
      <div className="content-hero mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">

      <FutureProgramNotice className="mb-12" />

      <div className="space-y-8">
        <ProgramCard
          title="Community Education and Preparedness"
          description="In time, we may offer wildfire community education workshops on home hardening San Clemente, defensible space, Zone Zero wildfire preparedness, evacuation plans, and home emergency plans. We may help neighborhoods learn about Firewise USA San Clemente and plan simple wildfire safety steps together."
          isFuture={true}
          headingLevel="h2"
        />

        <ProgramCard
          title="Environmental Education and Stewardship"
          description="We may share information about native plants, water-wise yards, and landscapes that can better handle fire. With skilled partners, we may offer lessons for residents, HOAs, landscape companies, and public works staff on habitat care, erosion, careful clearing, and native plant protection."
          isFuture={true}
          headingLevel="h2"
        />

        <ProgramCard
          title="Youth and Career Learning"
          description="With partner groups, schools and youth may join outdoor learning, FFA, 4-H, service, summer, internship, and leadership programs. These programs may cover gardens, animal care, targeted grazing, plant care, natural resources, education, and public service."
          isFuture={true}
          headingLevel="h2"
        />
      </div>

      {/* Get Involved CTA */}
      <div className="mt-12 bg-pale-green rounded-lg p-6 sm:p-8 text-center">
        <h2 className="text-primary-green font-bold text-xl mb-3">
          Want to help build these programs?
        </h2>
        <p className="text-body-charcoal text-[17px] leading-relaxed mb-6 max-w-[600px] mx-auto">
          Our wildfire community education and stewardship programs depend on
          volunteers, partners, and community interest. Want to help? Get
          involved with the Foundation and support San Clemente wildfire
          preparedness.
        </p>
        <Link href="/get-involved" className="btn-primary">
          Get Involved
        </Link>
      </div>
      </div>
    </article>
  );
}
