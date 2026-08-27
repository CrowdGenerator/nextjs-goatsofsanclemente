import type { Metadata } from "next";
import SectionIntro from "../components/SectionIntro";
import LocalContextPanel from "../components/LocalContextPanel";
import PracticalStepsList from "../components/PracticalStepsList";
import VisionCallout from "../components/VisionCallout";

export const metadata: Metadata = {
  title: "Wildfire Resilience | San Clemente Wildfire Resilience Foundation",
  description:
    "Understanding wildfire resilience in San Clemente — local hazard context, practical steps for home hardening, defensible space, and community preparedness.",
  alternates: { canonical: "/wildfire-resilience" },
  openGraph: {
    title: "Wildfire Resilience | San Clemente Wildfire Resilience Foundation",
    description:
      "Understanding wildfire resilience in San Clemente — local hazard context, practical steps for home hardening, defensible space, and community preparedness.",
    url: "https://goatsofsanclemente.com/wildfire-resilience",
    type: "website",
    images: [{ url: "/scwrf-logo.png", alt: "San Clemente Wildfire Resilience Foundation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wildfire Resilience | San Clemente Wildfire Resilience Foundation",
    description:
      "Understanding wildfire resilience in San Clemente — local hazard context, practical steps for home hardening, defensible space, and community preparedness.",
    images: ["/scwrf-logo.png"],
  },
};

export default function WildfireResiliencePage() {
  return (
    <article>
      {/* Section 1 — Page Title */}
      <section className="py-12 md:py-16 bg-white">
        <div className="content-reading px-4 sm:px-6">
          <h1 className="text-primary-green">Wildfire Resilience</h1>
        </div>
      </section>

      {/* Section 2 — Why Resilience Matters */}
      <section className="py-12 md:py-16 bg-soft-neutral">
        <div className="content-reading px-4 sm:px-6">
          <SectionIntro title="Why Resilience Matters" />
          <p className="text-body-charcoal text-[17px] leading-relaxed">
            San Clemente neighborhoods sit near coastal canyons, open space, and
            wildland plants. Public agencies provide expertise, emergency
            response, and public safety. But many choices that shape wildfire
            safety happen at homes, schools, businesses, HOAs, and open spaces.
            These choices matter every day, long before a fire starts.
          </p>
        </div>
      </section>

      {/* Section 3 — The Local Context */}
      <section className="py-12 md:py-16 bg-white">
        <div className="content-reading px-4 sm:px-6">
          <LocalContextPanel
            title="The Local Context"
            content={
              <p>
                The 2025 CAL FIRE/Office of the State Fire Marshal map shows
                that large parts of San Clemente are in Very High Fire Hazard
                Severity Zones. Home insurance costs are also rising fast.
                Together, these facts make steady wildfire prevention and
                preparation more urgent.
              </p>
            }
            showMap={true}
            citationSource="City of San Clemente / State Fire Marshal"
            citationDate="March 24, 2025"
          />
        </div>
      </section>

      {/* Section 4 — From Wildfire Prevention to Wildfire Resilience */}
      <section className="py-12 md:py-16 bg-soft-neutral">
        <div className="content-reading px-4 sm:px-6">
          <SectionIntro title="From Wildfire Prevention to Wildfire Resilience" />
          <p className="text-body-charcoal text-[17px] leading-relaxed">
            Wildfire prevention is essential, but resilience goes further. It
            means helping the whole community reduce risk and prepare before a
            fire starts. Residents, HOAs, schools, businesses, nonprofit groups,
            public agencies, and landscape contractors all have a part to play.
            They need clear guidance and shared goals.
          </p>
          <p className="text-body-charcoal text-[17px] leading-relaxed">
            The Foundation supports education and community programs on wildfire
            prevention, defensible space, Firewise USA&reg;, native habitat, fuel
            reduction, emergency preparation, and care for the environment.
            Workshops, volunteer programs, youth learning, and outreach can help
            residents understand the risks and take practical steps.
          </p>
        </div>
      </section>

      {/* Section 5 — In Practical Terms */}
      <section className="py-12 md:py-16 bg-white">
        <div className="content-reading px-4 sm:px-6">
          <SectionIntro title="In Practical Terms" />
          <PracticalStepsList
            items={[
              "Home hardening, defensible space, Zone Zero, fuel reduction, and home emergency plans.",
              "Careful open-space management that removes dangerous and invasive plants while protecting native habitat.",
              "Native plant care that supports habitat, healthy soil, water savings, and erosion control.",
              "Neighborhoods and HOAs taking practical steps toward Firewise USA\u00AE recognition.",
            ]}
          />
        </div>
      </section>

      {/* Section 6 — Why the Foundation Matters */}
      <section className="py-12 md:py-16 bg-soft-neutral">
        <div className="content-reading px-4 sm:px-6">
          <SectionIntro title="Why the Foundation Matters" />
          <VisionCallout>
            <p>
              The Foundation brings the City, OCFA, HOAs, schools, businesses,
              nonprofits, and residents together. It helps turn separate
              programs, rules, and resources into shared action. The goal is to
              protect people, neighborhoods, and nature.
            </p>
          </VisionCallout>
        </div>
      </section>
    </article>
  );
}
