export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  category: "frontend" | "backend" | "fullstack" | "mobile";
  featured: boolean;
  createdAt: string;
  demo?: {
    username?: string;
    password?: string;
    notes?: string;
  };
  supplierUrl?: string;
}

export type ProjectCategory = Project["category"];

export interface ProjectFilters {
  category: ProjectCategory | "all";
  searchQuery: string;
  sortBy: "newest" | "oldest";
}

export interface Country {
  name: string;
  id: string;
  lat: number;
  lng: number;
  color: string;
  flag: string;
  years: string;
  description: string;
}
