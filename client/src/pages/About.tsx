import React, { Suspense, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaChevronDown,
  FaExternalLinkAlt,
  FaCode,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";
import { realProjects } from "../data/real-projects";

// Compact Real Project Card Component
const RealProjectCard: React.FC<{
  project: any;
  delay: number;
}> = ({ project, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="bg-white/10 backdrop-blur-md rounded-xl p-4 hover:shadow-2xl transition-all transform hover:-translate-y-1 group">
    <div className="flex items-start justify-between mb-3">
      <div className="flex-1">
        <h3 className="text-lg font-bold text-blue-400 mb-1">
          {project.title}
        </h3>
        <p className="text-gray-300 text-xs leading-relaxed mb-3 line-clamp-2">
          {project.description}
        </p>
      </div>
      <motion.a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="ml-3 p-1.5 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}>
        <FaExternalLinkAlt className="text-blue-400 text-sm" />
      </motion.a>
    </div>

    <div className="flex flex-wrap gap-1.5 mb-3">
      {project.technologies.slice(0, 4).map((tech: string, index: number) => (
        <span
          key={index}
          className="px-2 py-0.5 bg-blue-500/20 text-blue-300 text-xs rounded-full">
          {tech}
        </span>
      ))}
      {project.technologies.length > 4 && (
        <span className="px-2 py-0.5 bg-gray-500/20 text-gray-300 text-xs rounded-full">
          +{project.technologies.length - 4}
        </span>
      )}
    </div>

    {project.demo && (
      <div className="p-2 bg-green-500/10 border border-green-500/20 rounded-lg">
        <p className="text-green-300 text-xs">
          <strong>Demo:</strong> Available
        </p>
      </div>
    )}
  </motion.div>
);

const EducationCard: React.FC<{
  degree: string;
  school: string;
  date: string;
  location: string;
  description: string;
  delay: number;
}> = ({ degree, school, date, location, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200/20 dark:border-gray-700/20 overflow-hidden">
    {/* Animated background gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    {/* Content */}
    <div className="relative z-10">
      {/* Header with icon */}
      <div className="flex items-start gap-4 mb-6">
        <motion.div
          className="p-3 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300"
          whileHover={{ rotate: 5, scale: 1.1 }}
          transition={{ duration: 0.2 }}>
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 14l9-5-9-5-9 5 9 5z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            />
          </svg>
        </motion.div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors duration-300 mb-2">
            {degree}
          </h3>
          <div className="text-gray-300 text-lg font-medium mb-3">{school}</div>
        </div>
      </div>

      {/* Date and Location */}
      <div className="flex justify-between items-center mb-6 p-3 bg-gray-500/10 rounded-lg">
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-sm font-medium text-gray-300">{date}</span>
        </div>
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-green-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="text-sm font-medium text-gray-300">{location}</span>
        </div>
      </div>

      {/* Description */}
      <motion.p
        className="text-gray-300 leading-relaxed text-base group-hover:text-gray-200 transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}>
        {description}
      </motion.p>

      {/* Achievement indicators */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200/20 dark:border-gray-700/20">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <motion.div
            className="w-2 h-2 bg-purple-500 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span>Full-Stack Development</span>
        </div>
        <motion.div
          className="text-purple-400 font-medium text-sm group-hover:text-purple-300 transition-colors duration-300"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}>
          Completed ✓
        </motion.div>
      </div>
    </div>

    {/* Decorative elements */}
    <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
    <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-lg group-hover:scale-125 transition-transform duration-500" />
  </motion.div>
);

// Enhanced SkillBox component
const SkillBox: React.FC<{
  skill: string;
  delay: number;
  category: string;
}> = ({ skill, delay, category }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Frontend":
        return {
          gradient: "from-blue-500 to-cyan-500",
          icon: "🎨",
          bg: "bg-blue-500/10",
          border: "border-blue-500/20",
        };
      case "Backend & Database":
        return {
          gradient: "from-green-500 to-emerald-500",
          icon: "⚙️",
          bg: "bg-green-500/10",
          border: "border-green-500/20",
        };
      case "AI & Cloud":
        return {
          gradient: "from-purple-500 to-pink-500",
          icon: "🤖",
          bg: "bg-purple-500/10",
          border: "border-purple-500/20",
        };
      case "Tools & Methods":
        return {
          gradient: "from-orange-500 to-red-500",
          icon: "🛠️",
          bg: "bg-orange-500/10",
          border: "border-orange-500/20",
        };
      default:
        return {
          gradient: "from-gray-500 to-gray-400",
          icon: "💼",
          bg: "bg-gray-500/10",
          border: "border-gray-500/20",
        };
    }
  };

  const colors = getCategoryColor(category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        group relative cursor-pointer
        bg-white/10 dark:bg-gray-800/50 backdrop-blur-md
        p-4 rounded-xl border ${colors.border}
        transform transition-all duration-300
        ${isHovered ? "scale-105 shadow-xl -translate-y-1" : "shadow-lg"}
        hover:bg-white/20 dark:hover:bg-gray-800/70
      `}>
      {/* Animated background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}
      />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-lg">{colors.icon}</span>
          <h3 className="text-white font-semibold text-sm group-hover:text-gray-100 transition-colors duration-300">
            {skill}
          </h3>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1 bg-gray-600/30 rounded-full overflow-hidden">
          <motion.div
            className={`h-full bg-gradient-to-r ${colors.gradient} rounded-full`}
            initial={{ width: 0 }}
            animate={{ width: isHovered ? "100%" : "85%" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          />
        </div>

        {/* Category indicator */}
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xs text-gray-400">{category}</span>
          <motion.div
            className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-blue-400"
            animate={{ scale: isHovered ? [1, 1.2, 1] : 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

// Enhanced SkillsSection component
const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      name: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js"],
      description: "User Interface & Experience",
    },
    {
      name: "Backend & Database",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Authentication",
        "Web Security",
      ],
      description: "Server & Data Management",
    },
    {
      name: "AI & Cloud",
      skills: ["MCP", "RAG", "GenerativeAI", "OpenAI API", "Vercel"],
      description: "Intelligence & Infrastructure",
    },
    {
      name: "Tools & Methods",
      skills: [
        "Git/Github",
        "Next.js",
        "TailwindCSS",
        "Agile/Scrum",
        "Problem Solving",
      ],
      description: "Development & Workflow",
    },
  ];

  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case "Frontend":
        return "🎨";
      case "Backend & Database":
        return "⚙️";
      case "AI & Cloud":
        return "🤖";
      case "Tools & Methods":
        return "🛠️";
      default:
        return "💼";
    }
  };

  const getCategoryGradient = (categoryName: string) => {
    switch (categoryName) {
      case "Frontend":
        return "from-blue-500 to-cyan-500";
      case "Backend & Database":
        return "from-green-500 to-emerald-500";
      case "AI & Cloud":
        return "from-purple-500 to-pink-500";
      case "Tools & Methods":
        return "from-orange-500 to-red-500";
      default:
        return "from-gray-500 to-gray-400";
    }
  };

  return (
    <div className="space-y-12">
      {skillCategories.map((category, categoryIndex) => (
        <motion.div
          key={category.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
          className="space-y-6">
          {/* Category Header */}
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 + 0.2 }}
              className="inline-flex items-center gap-3 mb-4">
              <span className="text-3xl">{getCategoryIcon(category.name)}</span>
              <h3 className="text-2xl font-bold text-white">{category.name}</h3>
            </motion.div>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              {category.description}
            </p>
            <div
              className={`w-24 h-1 bg-gradient-to-r ${getCategoryGradient(category.name)} rounded-full mx-auto mt-3`}
            />
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {category.skills.map((skill, index) => (
              <SkillBox
                key={skill}
                skill={skill}
                category={category.name}
                delay={0.1 * (index + categoryIndex * 5) + 0.3}
              />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const About: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">About Me</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Full-Stack Web Developer with expertise in JavaScript, TypeScript,
            and AI integration. Passionate about creating secure,
            high-performance applications with modern technologies.
          </p>
        </motion.div>

        {/* Real Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Real Customer Projects
          </h2>
          <p className="text-gray-300 text-center mb-8 max-w-3xl mx-auto">
            Here are some of the professional projects I've built for real
            businesses, showcasing my ability to deliver production-ready
            applications with modern technologies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
            {realProjects.map((project, index) => (
              <RealProjectCard
                key={project.id}
                project={project}
                delay={0.2 + index * 0.1}
              />
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center">
            <motion.a
              href="/mvp-showcase"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              <span>View More Projects</span>
              <FaExternalLinkAlt className="text-sm" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Upcoming Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Current & Upcoming Projects
          </h2>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl">
                <FaCode className="text-white text-2xl" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Active Development
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
              I'm currently working on{" "}
              <strong className="text-purple-400">2 additional projects</strong>{" "}
              for other businesses, expanding my portfolio with diverse industry
              solutions. These projects involve advanced web applications with
              custom integrations and modern development practices.
            </p>
            <div className="flex justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <FaDatabase className="text-blue-400" />
                <span>Database Design</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCloud className="text-green-400" />
                <span>Cloud Integration</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCode className="text-purple-400" />
                <span>Custom Solutions</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Education
          </h2>
          <div className="w-full">
            <EducationCard
              degree="Full-Stack Web Development"
              school="DCI - Digital Career Institute"
              date="10/2023 - 01/2025"
              location="Berlin, Germany"
              description="Excelled in Full-Stack Web Development, specializing in the MERN stack and modern web practices. As a mentor to fellow students, I developed a passion for AI integration, implementing cutting-edge solutions like RAG (Retrieval-Augmented Generation) systems and MCP servers. Led innovative projects combining web development with AI capabilities, demonstrating strong problem-solving skills and a commitment to pushing technological boundaries. Consistently explored and implemented new AI technologies, creating efficient, scalable applications that bridge traditional web development with advanced AI functionalities."
              delay={0.3}
            />
          </div>
        </motion.div>

        {/* Updated Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Expertise & Skills
          </h2>
          <div className="container mx-auto px-4">
            <SkillsSection />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="h-[600px] w-full bg-black/20 rounded-xl overflow-hidden flex items-center justify-center">
          <div className="text-white text-xl">
            Something went wrong. Please refresh the page.
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default About;
