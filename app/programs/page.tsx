import FutureProgramNotice from "../components/FutureProgramNotice";
import ProgramCard from "../components/ProgramCard";

export const metadata = {
  title: "Programs",
  description:
    "Future program ideas from the San Clemente Wildfire Resilience Foundation — community education, environmental stewardship, and youth learning.",
};

export default function ProgramsPage() {
  return (
    <article>
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="content-reading">
          <h1>Programs</h1>
        </div>
      </section>
      <div className="mx-auto max-w-[820px] px-4 sm:px-6 pb-12 md:pb-16">

      <FutureProgramNotice className="mb-12" />

      <div className="space-y-8">
        <ProgramCard
          title="Community Education and Preparedness"
          description="In time, we may offer workshops on home hardening, defensible space, Zone Zero, evacuation plans, and home emergency plans. We may help neighborhoods learn about Firewise USA® and plan simple wildfire safety steps together."
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
      </div>
    </article>
  );
}
