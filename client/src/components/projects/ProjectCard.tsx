import { motion } from "framer-motion";
import { Project } from "../../types/project";
import Button from "../common/Button";

interface ProjectCardProps {
  project: Project;
  size?: "default" | "compact";
}

const ProjectCard = ({ project, size = "default" }: ProjectCardProps) => {
  const isCompact = size === "compact";
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.2 }}
      className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all dark:bg-gray-800">
      <div className="relative overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          src={project.imageUrl}
          alt={project.title}
          className={`${isCompact ? "h-36" : "h-48"} w-full object-cover transition-transform`}
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity group-hover:bg-opacity-20" />
      </div>

      <div className={isCompact ? "p-4" : "p-6"}>
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className={`${isCompact ? "text-lg" : "text-xl"} font-semibold text-gray-900 dark:text-white`}>
              {project.title}
            </motion.h3>
            <div className="flex items-center gap-2">
              {project.demo && (
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                  className="group relative flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-200">
                  Demo
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span className="pointer-events-none absolute -bottom-9 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 px-2 py-1 text-[10px] text-white opacity-0 transition group-hover:block group-hover:opacity-100">
                    Read-only access available
                  </span>
                </motion.span>
              )}
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900 dark:text-primary-300">
                {project.category}
              </motion.span>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`mt-2 ${isCompact ? "text-sm" : "text-base"} text-gray-600 dark:text-gray-300`}>
            {project.description}
          </motion.p>
          {project.demo && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-3 rounded-md border border-gray-200 bg-gray-50 p-3 text-xs text-gray-700 dark:border-gray-700 dark:bg-gray-700/40 dark:text-gray-200">
              <div className="flex flex-col gap-1">
                {project.demo.notes && (
                  <div className="mb-1 text-[11px] opacity-90">
                    {project.demo.notes}
                  </div>
                )}
                {project.demo.username && (
                  <div>
                    <span className="opacity-70">User:</span>{" "}
                    <span className="font-mono">{project.demo.username}</span>
                  </div>
                )}
                {project.demo.password && (
                  <div>
                    <span className="opacity-70">Password:</span>{" "}
                    <span className="font-mono">{project.demo.password}</span>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className={isCompact ? "mb-3" : "mb-4"}>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                className={`${isCompact ? "px-2 py-0.5" : "px-3 py-1"} rounded-full bg-gray-100 text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-300`}>
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-3">
          {project.githubUrl && (
            <Button
              as="a"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="small">
              View Code
            </Button>
          )}
          {project.liveUrl && (
            <Button
              as="a"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="small">
              Live Demo
            </Button>
          )}
          {project.supplierUrl && (
            <Button
              as="a"
              href={project.supplierUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="small">
              Supplier Portal
            </Button>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
