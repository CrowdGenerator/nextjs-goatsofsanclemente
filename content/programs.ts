export interface Program {
  title: string;
  description: string;
  isFuture: boolean;
}

export const programs: Program[] = [
  {
    title: "Community Education and Preparedness",
    description:
      "In time, we may offer workshops on home hardening, defensible space, Zone Zero, evacuation plans, and home emergency plans. We may help neighborhoods learn about Firewise USA® and plan simple wildfire safety steps together.",
    isFuture: true,
  },
  {
    title: "Environmental Education and Stewardship",
    description:
      "We may share information about native plants, water-wise yards, and landscapes that can better handle fire. With skilled partners, we may offer lessons for residents, HOAs, landscape companies, and public works staff on habitat care, erosion, careful clearing, and native plant protection.",
    isFuture: true,
  },
  {
    title: "Youth and Career Learning",
    description:
      "With partner groups, schools and youth may join outdoor learning, FFA, 4-H, service, summer, internship, and leadership programs. These programs may cover gardens, animal care, targeted grazing, plant care, natural resources, education, and public service.",
    isFuture: true,
  },
];

export const programsIntro: string =
  "These are long-term ideas, not current promises. The Foundation will start small. New programs will depend on volunteers, community interest, trusted partners, funding, and needed approvals. Some ideas may take years to build, and some may change as we learn what San Clemente needs.";
