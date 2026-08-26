export interface PracticalStep {
  text: string;
}

export interface SourceCitation {
  source: string;
  date: string;
}

export interface WildfireResilienceContent {
  whyResilienceMatters: string;
  localContext: string;
  preventionToResilience: string;
  practicalSteps: PracticalStep[];
  whyFoundationMatters: string;
  mapCredit: SourceCitation;
}

export const wildfireResilienceContent: WildfireResilienceContent = {
  whyResilienceMatters:
    "San Clemente neighborhoods sit near coastal canyons, open space, and wildland plants. Public agencies provide expertise, emergency response, and public safety. But many choices that shape wildfire safety happen at homes, schools, businesses, HOAs, and open spaces. These choices matter every day, long before a fire starts.",
  localContext:
    "The 2025 CAL FIRE/Office of the State Fire Marshal map shows that large parts of San Clemente are in Very High Fire Hazard Severity Zones. Home insurance costs are also rising fast. Together, these facts make steady wildfire prevention and preparation more urgent.",
  preventionToResilience:
    "Wildfire prevention is essential, but resilience goes further. It means helping the whole community reduce risk and prepare before a fire starts. Residents, HOAs, schools, businesses, nonprofit groups, public agencies, and landscape contractors all have a part to play. They need clear guidance and shared goals. The Foundation supports education and community programs on wildfire prevention, defensible space, Firewise USA®, native habitat, fuel reduction, emergency preparation, and care for the environment. Workshops, volunteer programs, youth learning, and outreach can help residents understand the risks and take practical steps.",
  practicalSteps: [
    {
      text: "Home hardening, defensible space, Zone Zero, fuel reduction, and home emergency plans.",
    },
    {
      text: "Careful open-space management that removes dangerous and invasive plants while protecting native habitat.",
    },
    {
      text: "Native plant care that supports habitat, healthy soil, water savings, and erosion control.",
    },
    {
      text: "Neighborhoods and HOAs taking practical steps toward Firewise USA® recognition.",
    },
  ],
  whyFoundationMatters:
    "The Foundation brings the City, OCFA, HOAs, schools, businesses, nonprofits, and residents together. It helps turn separate programs, rules, and resources into shared action. The goal is to protect people, neighborhoods, and nature.",
  mapCredit: {
    source: "City of San Clemente / State Fire Marshal",
    date: "March 24, 2025",
  },
};
