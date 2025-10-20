import React from "react";
import { motion } from "framer-motion";

interface SkillCategory {
  name: string;
  skills: string[];
  color: string;
}

interface Language {
  name: string;
  proficiency: number;
  flag: string;
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "TailwindCSS",
    ],
    color: "#61DAFB",
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express.js", "Python", "MongoDB", "RESTful APIs"],
    color: "#68A063",
  },
  {
    name: "AI & Cloud",
    skills: ["Machine Learning", "GenerativeAI", "OpenAI API", "Vercel", "AWS"],
    color: "#FF4444",
  },
  {
    name: "Tools & Methods",
    skills: [
      "Git/Github",
      "Problem Solving",
      "Agile",
      "Scrum",
      "Web Security",
      "Authentication",
    ],
    color: "#F1502F",
  },
];

const languages: Language[] = [
  {
    name: "Romanian",
    proficiency: 100,
    flag: "/flags/romania.png",
  },
  {
    name: "English",
    proficiency: 90,
    flag: "/flags/uk.png",
  },
  {
    name: "German",
    proficiency: 85,
    flag: "/flags/germany.png",
  },
];

const SkillCard: React.FC<{ category: SkillCategory }> = ({ category }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:shadow-xl transition-all">
      <h3
        className="text-xl font-bold mb-4 text-white"
        style={{ color: category.color }}>
        {category.name}
      </h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, index) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="px-3 py-1 bg-white/20 rounded-full text-sm text-white hover:bg-white/30 transition-colors">
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const LanguageBar: React.FC<{ language: Language }> = ({ language }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="mb-4">
      <div className="flex items-center gap-3 mb-2">
        <img
          src={language.flag}
          alt={`${language.name} flag`}
          className="w-6 h-6 rounded-full"
        />
        <span className="text-white">{language.name}</span>
      </div>
      <div className="h-2 bg-white/20 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${language.proficiency}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
        />
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white mb-12 text-center">
          Skills & Languages
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category) => (
            <SkillCard
              key={category.name}
              category={category}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Languages
          </h3>
          {languages.map((language) => (
            <LanguageBar
              key={language.name}
              language={language}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
