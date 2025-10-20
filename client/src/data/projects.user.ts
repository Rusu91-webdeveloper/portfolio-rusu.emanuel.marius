// Bridge your root-level data.js projects into the app's TS types.
// We only use non-real projects here.

import type { Project } from "../types/project";

// If you prefer, we can import directly from root via Vite alias. For now, paste or sync in CI.
// The fields below map to your data.js projects: id, title, des, img, href, gitHub, iconLists

export const userProjects: Project[] = [
  {
    id: "gym-1-one",
    title: "Gym-1-One",
    description:
      "This is my first project created only with Html and Scss. The main focus was to write clean code and get used with Scss",
    technologies: ["HTML", "SCSS"],
    imageUrl: "/project1.png",
    githubUrl: "https://github.com/Rusu91-webdeveloper/Gym-1-One",
    liveUrl: "https://rusu91-webdeveloper.github.io/Gym-1-One/",
    category: "frontend",
    featured: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: "serenity-furnish",
    title: "Serenity-Furnish",
    description:
      "React app built with React Query, Redux Toolkit, and Daisy UI. Efficient data handling and responsive design.",
    technologies: ["React", "Redux Toolkit", "React Query", "DaisyUI"],
    imageUrl: "/project2.png",
    githubUrl: "https://github.com/Rusu91-webdeveloper/serenity-furnish",
    liveUrl: "https://serenity-furnish.vercel.app/",
    category: "frontend",
    featured: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: "myproperty",
    title: "MyProperty",
    description:
      "Full-stack app with Next.js and MongoDB to browse or promote rental properties.",
    technologies: ["Next.js", "MongoDB", "Node.js"],
    imageUrl: "/project3.png",
    githubUrl: "https://github.com/Rusu91-webdeveloper/my-property",
    liveUrl: "https://my-property-eight.vercel.app/",
    category: "fullstack",
    featured: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: "golden-era-anime",
    title: "Golden-Era-Anime",
    description:
      "Single page application with Next.js and TypeScript, SSR and interactive animations.",
    technologies: ["Next.js", "TypeScript"],
    imageUrl: "/project4.png",
    githubUrl: "https://github.com/Rusu91-webdeveloper/Golden_Era_-Anime",
    liveUrl:
      "https://golden-era-anime-git-main-rusu91-webdevelopers-projects.vercel.app/",
    category: "frontend",
    featured: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: "finance-falcon",
    title: "Finance-Falcon",
    description:
      "Full-stack finance tracker with MERN and Clerk authentication.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Clerk"],
    imageUrl: "/project5.png",
    githubUrl: "https://github.com/Rusu91-webdeveloper/finance-falcon",
    liveUrl: "https://finance-falcon-1.onrender.com",
    category: "fullstack",
    featured: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: "nexus-guest",
    title: "Nexus Guest",
    description:
      "Guest-facing platform with real-time booking and personalized dashboards.",
    technologies: ["React", "Node.js"],
    imageUrl: "/project6.png",
    githubUrl: "https://github.com/Rusu91-webdeveloper/Nexus-Guest",
    liveUrl: "https://nexus-guest.vercel.app/",
    category: "frontend",
    featured: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: "nexus-management",
    title: "Nexus Management System",
    description:
      "Staff platform to manage bookings, rooms, and guest services. Demo account provided in README.",
    technologies: ["Next.js", "React"],
    imageUrl: "/project7.png",
    githubUrl: "https://github.com/Rusu91-webdeveloper/Nexus-Management",
    liveUrl: "https://nexus-management-frontend.onrender.com",
    category: "fullstack",
    featured: false,
    createdAt: new Date().toISOString(),
  },
];
