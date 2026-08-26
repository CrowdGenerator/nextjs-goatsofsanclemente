export interface GuidingFrameworkCard {
  label: string;
  title: string;
  content: string;
}

export interface GuidingFramework {
  vision: GuidingFrameworkCard;
  purpose: GuidingFrameworkCard;
  mission: GuidingFrameworkCard;
  guidingIdea: string;
}

export const guidingFramework: GuidingFramework = {
  vision: {
    label: "VISION",
    title: "The Future We Seek",
    content:
      "A wildfire-resilient San Clemente where informed residents, healthy native landscapes, strong partnerships, and shared preparation protect people, neighborhoods, and nature for future generations.",
  },
  purpose: {
    label: "PURPOSE",
    title: "Why We Exist",
    content:
      "Keep wildfire resilience a community priority. The Foundation gives residents and local partners a trusted voice and a practical way to work together. This helps San Clemente reduce wildfire risk, prepare for emergencies, care for nature, and protect quality of life.",
  },
  mission: {
    label: "MISSION",
    title: "What We Do",
    content:
      "Educate, connect and mobilize the community. We connect residents and partners with facts, education, and ways to help. Our work supports wildfire prevention, defensible space, Firewise USA®, native habitat, fuel reduction, emergency preparation, volunteer service, and shared community action.",
  },
  guidingIdea:
    "Make wildfire resilience clear, practical, and part of daily life - not only an emergency concern.",
};
