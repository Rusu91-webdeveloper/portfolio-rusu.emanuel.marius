import ProjectCard from "../components/projects/ProjectCard";
import { realProjects } from "../data/real-projects";

const RealProjects = () => {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Real Projects & MVPs
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          Production-grade work focused on outcomes, performance, and user
          experience.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {realProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default RealProjects;
