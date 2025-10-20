import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const cardBase =
  "group relative overflow-hidden rounded-2xl bg-white/70 dark:bg-gray-800/80 backdrop-blur-md ring-1 ring-black/10 dark:ring-white/10 shadow-lg hover:shadow-xl transition-all";

const iconPill =
  "inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold bg-blue-600/10 text-blue-600 dark:bg-blue-500/15 dark:text-blue-300 ring-1 ring-blue-600/20 dark:ring-blue-500/20";

const gradientRing =
  "absolute inset-0 -z-10 rounded-2xl bg-gradient-to-tr from-blue-600/10 via-fuchsia-600/10 to-violet-600/10 opacity-0 group-hover:opacity-100 transition-opacity";

const ProjectsGateway = () => {
  return (
    <section className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Explore My Work
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Dive into hands-on bootcamp builds or browse real products and MVPs
          shipped to users.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* All Projects / Bootcamp */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className={cardBase}>
          <span className={gradientRing} />
          <div className="p-6">
            <div className="mb-3">
              <span className={iconPill}>Bootcamp & All Projects</span>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
              Code-by-Code and Full Portfolio
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              See all projects, including structured bootcamp builds that cement
              fundamentals and architecture.
            </p>
            <div className="mt-5">
              <Link
                to="/projects#all"
                aria-label="View all projects"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors">
                Browse Projects
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Real Projects / MVPs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className={cardBase}>
          <span className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-tr from-emerald-600/10 via-teal-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="p-6">
            <div className="mb-3">
              <span className="inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold bg-emerald-600/10 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-300 ring-1 ring-emerald-600/20 dark:ring-emerald-500/20">
                Real Projects & MVPs
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
              Live Products In The Wild
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Explore production-grade work focused on outcomes, performance,
              and user experience.
            </p>
            <div className="mt-5">
              <Link
                to="/mvp-showcase"
                aria-label="View real projects and MVPs"
                className="inline-flex items-center gap-2 rounded-lg border border-emerald-600/40 text-emerald-700 dark:text-emerald-300 px-4 py-2 text-sm font-semibold hover:bg-emerald-600/10 dark:hover:bg-emerald-500/10 transition-colors">
                See MVP Showcase
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsGateway;
