export interface ShowcaseProject {
  name: string;
  label: string;
  description: string;
  url: string;
  domain?: string;
  image?: string;
  tone: string;
  monogram: string;
}

// Domains were checked against the Vercel project inventory on 31 October 2026.
export const mvps: ShowcaseProject[] = [
  {
    name: "TechTots",
    label: "E-commerce · Romania",
    description:
      "An online store bringing educational and STEM toys to families and educators.",
    url: "https://www.techtots.ro/",
    domain: "techtots.ro",
    image: "/techtots-project.webp",
    tone: "peach",
    monogram: "Tt",
  },
  {
    name: "Acte Auto 502",
    label: "Automotive services · Romania",
    description:
      "A digital home for a vehicle registration and documentation business.",
    url: "https://www.acteauto502.ro/",
    domain: "acteauto502.ro",
    tone: "orange",
    monogram: "502",
  },
  {
    name: "QUJO Autovermietung",
    label: "Car rental · Germany",
    description:
      "A multilingual web experience for a German car rental business.",
    url: "https://www.qujo-autovermietung.de/",
    domain: "qujo-autovermietung.de",
    tone: "blue",
    monogram: "Q",
  },
  {
    name: "Sensika",
    label: "Business website · Poland",
    description: "A dedicated web presence for the Sensika brand.",
    url: "https://www.sensika.pl/",
    domain: "sensika.pl",
    tone: "lilac",
    monogram: "S",
  },
  {
    name: "GOA Erwachsenenbildung",
    label: "Education · Germany",
    description:
      "A website for an adult education provider offering language and integration courses.",
    url: "https://www.goa-erwachsenenbildung.online/",
    domain: "goa-erwachsenenbildung.online",
    image: "/goa-project.webp",
    tone: "sage",
    monogram: "GOA",
  },
];

export const vercelProjects: ShowcaseProject[] = [
  {
    name: "FitForge",
    label: "Health & fitness",
    description:
      "A fitness application exploring personalized nutrition and training.",
    url: "https://fitforge-seven-kappa.vercel.app/",
    domain: "fitforge-seven-kappa.vercel.app",
    tone: "lime",
    monogram: "FF",
  },
];

export const supportingProjects = [
  { name: "AI Business Assistant Platform", status: "Staging" },
  { name: "AI Business Assistant Widget", status: "Staging" },
  { name: "Car Rental Documents", status: "Non-production" },
  { name: "This portfolio", status: "Portfolio" },
];
