import Hero from "./components/Hero";
import SectionIntro from "./components/SectionIntro";
import LocalContextPanel from "./components/LocalContextPanel";
import PracticalStepsList from "./components/PracticalStepsList";
import MissionCardGrid from "./components/MissionCardGrid";
import ProgramCard from "./components/ProgramCard";
import FutureProgramNotice from "./components/FutureProgramNotice";
import CoreValueGrid from "./components/CoreValueGrid";

export default function Home() {
  return (
    <div>
      {/* ── 1. Hero ── */}
      <Hero
        eyebrow="SAN CLEMENTE"
        title="Wildfire Resilience Foundation"
        intro="A citizen-led nonprofit for wildfire prevention, preparedness, stewardship and community action"
        vision="A wildfire-resilient San Clemente where informed residents, healthy native landscapes, strong partnerships, and shared preparation protect people, neighborhoods, and nature for future generations."
      />

      {/* ── 2. Why This Matters ── */}
      <section className="bg-soft-neutral py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionIntro
            title="Why a Grassroots Wildfire Resilience Organization"
            subtitle="San Clemente neighborhoods sit near coastal canyons, open space, and wildland plants. Public agencies provide expertise, emergency response, and public safety. But many choices that shape wildfire safety happen at homes, schools, businesses, HOAs, and open spaces. These choices matter every day, long before a fire starts."
          />

          <LocalContextPanel
            title="The Local Context"
            showMap={true}
            citationSource="City of San Clemente / State Fire Marshal"
            citationDate="March 24, 2025"
            content={
              <p>
                The 2025 CAL FIRE/Office of the State Fire Marshal map shows that
                large parts of San Clemente are in Very High Fire Hazard Severity
                Zones. Home insurance costs are also rising fast. Together, these
                facts make steady wildfire prevention and preparation more urgent.
              </p>
            }
          />
        </div>
      </section>

      {/* ── 3. What Wildfire Resilience Means ── */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionIntro
            title="From Wildfire Prevention to Wildfire Resilience"
            subtitle="Wildfire prevention is essential, but resilience goes further. It means helping the whole community reduce risk and prepare before a fire starts. Residents, HOAs, schools, businesses, nonprofit groups, public agencies, and landscape contractors all have a part to play."
          />

          <PracticalStepsList
            items={[
              "Home hardening, defensible space, Zone Zero, fuel reduction, and home emergency plans.",
              "Careful open-space management that removes dangerous and invasive plants while protecting native habitat.",
              "Native plant care that supports habitat, healthy soil, water savings, and erosion control.",
              "Neighborhoods and HOAs taking practical steps toward Firewise USA® recognition.",
            ]}
          />
        </div>
      </section>

      {/* ── 4. Our Mission ── */}
      <section className="bg-soft-neutral py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionIntro title="Our Guiding Framework" />

          <MissionCardGrid
            cards={[
              {
                title: "Vision",
                content:
                  "A wildfire-resilient San Clemente where informed residents, healthy native landscapes, strong partnerships, and shared preparation protect people, neighborhoods, and nature for future generations.",
              },
              {
                title: "Purpose",
                content:
                  "Keep wildfire resilience a community priority. The Foundation gives residents and local partners a trusted voice and a practical way to work together. This helps San Clemente reduce wildfire risk, prepare for emergencies, care for nature, and protect quality of life.",
              },
              {
                title: "Mission",
                content:
                  "Educate, connect and mobilize the community. We connect residents and partners with facts, education, and ways to help. Our work supports wildfire prevention, defensible space, Firewise USA®, native habitat, fuel reduction, emergency preparation, volunteer service, and shared community action.",
              },
            ]}
          />
        </div>
      </section>

      {/* ── 5. How We Help ── */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionIntro title="How We Help" />

          <div className="max-w-[680px] space-y-6">
            <p className="text-body-charcoal text-[17px] leading-relaxed">
              The Foundation is San Clemente&apos;s nonprofit community connector
              and advocate. We bring residents, the City, OCFA, HOAs, schools,
              businesses, nonprofits, and other partners together. We help people
              find clear information, join useful programs, volunteer safely, and
              support shared goals.
            </p>
            <p className="text-body-charcoal text-[17px] leading-relaxed">
              The Foundation does not replace or direct the City, OCFA,
              regulators, HOAs, schools, contractors, or other groups. Each
              partner keeps its own authority, duties, and decisions.
            </p>
          </div>
        </div>
      </section>

      {/* ── 6. Programs We Hope to Build ── */}
      <section className="bg-soft-neutral py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionIntro
            title="Programs We Hope to Build"
            subtitle="These are long-term ideas, not current promises. The Foundation will start small and grow with care."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProgramCard
              title="Community Education and Preparedness"
              isFuture={true}
              description="In time, we may offer workshops on home hardening, defensible space, Zone Zero, evacuation plans, and home emergency plans. We may help neighborhoods learn about Firewise USA® and plan simple wildfire safety steps together."
            />
            <ProgramCard
              title="Environmental Education and Stewardship"
              isFuture={true}
              description="We may share information about native plants, water-wise yards, and landscapes that can better handle fire. With skilled partners, we may offer lessons for residents, HOAs, landscape companies, and public works staff on habitat care, erosion, careful clearing, and native plant protection."
            />
            <ProgramCard
              title="Youth and Career Learning"
              isFuture={true}
              description="With partner groups, schools and youth may join outdoor learning, FFA, 4-H, service, summer, internship, and leadership programs. These programs may cover gardens, animal care, targeted grazing, plant care, natural resources, education, and public service."
            />
          </div>

          <div className="mt-10">
            <FutureProgramNotice />
          </div>
        </div>
      </section>

      {/* ── 7. Core Values ── */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionIntro
            title="Core Values"
            subtitle="The principles that guide everything we do."
          />

          <CoreValueGrid
            values={[
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
            ]}
          />
        </div>
      </section>
    </div>
  );
}
