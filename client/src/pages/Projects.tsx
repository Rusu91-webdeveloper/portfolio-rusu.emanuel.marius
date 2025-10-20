import { useState } from "react";
import { Project, ProjectCategory, ProjectFilters } from "../types/project";
import ProjectCard from "../components/projects/ProjectCard";
import { projects as nonRealProjects } from "../data/projects";
import { userProjects } from "../data/projects.user";

const categories: { value: ProjectFilters["category"]; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "fullstack", label: "Full Stack" },
  { value: "mobile", label: "Mobile" },
];

const Projects = () => {
  const [filters, setFilters] = useState<ProjectFilters>({
    category: "all",
    searchQuery: "",
    sortBy: "newest",
  });

  const allNonReal = [...userProjects, ...nonRealProjects];

  const filteredProjects = allNonReal
    .filter((project) => {
      if (filters.category !== "all" && project.category !== filters.category) {
        return false;
      }
      if (filters.searchQuery) {
        const searchLower = filters.searchQuery.toLowerCase();
        return (
          project.title.toLowerCase().includes(searchLower) ||
          project.description.toLowerCase().includes(searchLower) ||
          project.technologies.some((tech) =>
            tech.toLowerCase().includes(searchLower)
          )
        );
      }
      return true;
    })
    .sort((a, b) => {
      if (filters.sortBy === "newest") {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      }
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    });

  return (
    <div className="space-y-8">
      <section
        className="text-center"
        id="all">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          My Projects
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          A collection of my work, including web applications, APIs, and more.
        </p>
      </section>

      <section className="space-y-6">
        {/* Filters */}
        <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
          <div className="flex space-x-4">
            <select
              value={filters.category}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  category: e.target.value as ProjectCategory | "all",
                })
              }
              className="rounded-md border-gray-300 bg-white py-2 pl-3 pr-10 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
              {categories.map((category) => (
                <option
                  key={category.value}
                  value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>

            <select
              value={filters.sortBy}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  sortBy: e.target.value as "newest" | "oldest",
                })
              }
              className="rounded-md border-gray-300 bg-white py-2 pl-3 pr-10 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>

          <input
            type="text"
            placeholder="Search projects..."
            value={filters.searchQuery}
            onChange={(e) =>
              setFilters({ ...filters, searchQuery: e.target.value })
            }
            className="w-full rounded-md border-gray-300 bg-white px-4 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:w-64"
          />
        </div>

        {/* Projects Grid (All) */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400">
              No projects found matching your criteria.
            </p>
          </div>
        )}
      </section>

      {/* Real Projects Anchor */}
      <section
        id="real"
        className="pt-2 -mt-2"
        aria-label="Real Projects and MVPs"
      />
    </div>
  );
};

export default Projects;
