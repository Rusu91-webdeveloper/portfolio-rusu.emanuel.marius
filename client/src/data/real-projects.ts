import type { Project } from "../types/project";

export const realProjects: Project[] = [
  {
    id: "techtots-romania",
    title: "TechTots Romania",
    description:
      "Professional B2B & B2C STEM toys e‑commerce built on modern, scalable web architecture. AI‑assisted insights support merchandising and operations; total build scope exceeds $100K. Poised to become one of Romania's leading STEM toys marketplaces. Read‑only supplier, database, and admin dashboards available for review; certain enterprise features remain confidential.",
    technologies: [
      "Next.js",
      "Prisma",
      "Zod",
      "Redis",
      "Google Auth",
      "Tailwind CSS",
      "JSON Web Token",
      "E-commerce",
      "AI",
      "B2B",
      "B2C",
    ],
    imageUrl: "/techtots_project.png",
    liveUrl: "https://www.techtots.ro/",
    category: "fullstack",
    featured: true,
    createdAt: new Date().toISOString(),
    demo: {
      username: "visitor@demo.com",
      password: "Visitor123!",
      notes:
        "Read‑only demo for supplier, database, and admin dashboards. Some features are intentionally undisclosed.",
    },
  },
  {
    id: "goa-erwachsenenbildung",
    title: "GOA Erwachsenenbildung GmbH",
    description:
      "AZAV-certified education provider partnering with BAMF and Job Centers in Germany. Delivers integration and vocational language courses online and in-person; supports companies upskilling foreign employees.",
    technologies: [
      "Next.js",
      "Prisma",
      "Zod",
      "Redis",
      "Google Auth",
      "Tailwind CSS",
      "JSON Web Token",
      "Education",
      "B2B",
    ],
    imageUrl: "/goa_project.png",
    liveUrl: "https://www.goa-erwachsenenbildung.online/",
    category: "fullstack",
    featured: true,
    createdAt: new Date().toISOString(),
  },
];
