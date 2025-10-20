import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiCalendar,
  FiMapPin,
  FiBook,
  FiAward,
  FiShield,
  FiTool,
  FiCode,
  FiUsers,
  FiTarget,
} from "react-icons/fi";

// Country data type
interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface CountryInfo {
  name: string;
  flag: string;
  history?: string;
  timeline?: TimelineEvent[];
}

// Country timeline data - chronologically accurate
const countryData: Record<string, CountryInfo> = {
  romania: {
    name: "Romania",
    flag: "/flags/romania.png",
    timeline: [
      {
        date: "August 3, 1991",
        title: "Born in Romania",
        description:
          "Started my journey in this beautiful country, beginning a life full of opportunities and adventures.",
        icon: <FiCalendar className="w-6 h-6" />,
      },
      {
        date: "1997 - 2005",
        title: "Primary School Education",
        description:
          "Attended primary school, where I discovered my passion for learning and technology.",
        icon: <FiBook className="w-6 h-6" />,
      },
      {
        date: "2005 - 2009",
        title: "High School Years",
        description:
          "Studied at high school, focusing on mathematics and computer science, laying the foundation for my future career.",
        icon: <FiMapPin className="w-6 h-6" />,
      },
      {
        date: "2009",
        title: "Abitur Achievement",
        description:
          "Successfully completed my Abitur, marking a significant milestone in my academic journey and opening doors to higher education.",
        icon: <FiAward className="w-6 h-6" />,
      },
      {
        date: "2025 - Present",
        title: "Return to Romania - Techtots.ro & Business MVP Development",
        description:
          "Moved back to Romania to develop Techtots.ro platform and help various businesses create MVPs. Working on cutting-edge web applications and AI integration solutions.",
        icon: <FiCode className="w-6 h-6" />,
      },
    ],
  },
  germany: {
    name: "Germany",
    flag: "/flags/germany.png",
    timeline: [
      {
        date: "2017 - 2023",
        title: "Machine Operator at Procter & Gamble",
        description:
          "Managed and operated sophisticated manufacturing equipment in one of the world's leading consumer goods companies. Developed expertise in industrial automation and process optimization.",
        icon: <FiTool className="w-6 h-6" />,
      },
      {
        date: "2023 - 2025",
        title: "Full Stack Development",
        description:
          "Focused on full-stack development using modern web technologies including React, Node.js, and cloud platforms. Building production-grade applications and solidifying software engineering practices.",
        icon: <FiCode className="w-6 h-6" />,
      },
    ],
  },
  france: {
    name: "France",
    flag: "/flags/france.png",
    timeline: [
      {
        date: "2009 - 2012",
        title: "French Foreign Legion Service",
        description:
          "Served in the prestigious French Foreign Legion, developing exceptional discipline, leadership skills, and international experience. Participated in specialized training and operations.",
        icon: <FiShield className="w-6 h-6" />,
      },
      {
        date: "2010 - 2012",
        title: "Advanced Military Training",
        description:
          "Completed advanced military training programs, specializing in tactical operations and team leadership. Earned multiple commendations for outstanding service and dedication.",
        icon: <FiAward className="w-6 h-6" />,
      },
    ],
  },
  "uk-london": {
    name: "London, UK",
    flag: "/flags/uk.png",
    timeline: [
      {
        date: "2013 - 2017",
        title: "Close Protection Operative",
        description:
          "Provided elite security services for high-profile individuals, managing complex security operations and risk assessment in one of the world's most dynamic cities.",
        icon: <FiShield className="w-6 h-6" />,
      },
      {
        date: "2015 - 2017",
        title: "Advanced Security Training",
        description:
          "Completed specialized training in executive protection, threat assessment, and advanced security protocols. Developed expertise in managing high-risk situations and VIP security.",
        icon: <FiUsers className="w-6 h-6" />,
      },
    ],
  },
};

const TimelineEvent: React.FC<{ event: TimelineEvent; index: number }> = ({
  event,
  index,
}) => {
  return (
    <motion.div
      className="mb-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}>
      <motion.div
        className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 overflow-hidden cursor-pointer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}>
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Content */}
        <div className="relative z-10">
          {/* Header with icon and title */}
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300"
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ duration: 0.2 }}>
              <div className="text-white">{event.icon}</div>
            </motion.div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {event.title}
              </h3>
              <motion.span
                className="inline-block text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full mt-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}>
                {event.date}
              </motion.span>
            </div>
          </div>

          {/* Description */}
          <motion.p
            className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}>
            {event.description}
          </motion.p>

          {/* Interactive elements */}
          <motion.div
            className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <motion.div
                className="w-2 h-2 bg-green-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span>Experience</span>
            </div>
            <motion.div
              className="text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}>
              Learn more →
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
        <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-pink-400/20 to-yellow-400/20 rounded-full blur-lg group-hover:scale-125 transition-transform duration-500" />
      </motion.div>
    </motion.div>
  );
};

const CountryPage: React.FC = () => {
  const { countryId } = useParams<{ countryId: string }>();
  const country = countryData[countryId?.toLowerCase() ?? ""];

  const getFlagEmoji = (id: string | undefined, name: string) => {
    switch (id) {
      case "germany":
        return "🇩🇪";
      case "romania":
        return "🇷🇴";
      case "uk-london":
        return "🇬🇧";
      case "france":
        return "🇫🇷";
      case "dr-congo":
        return "🇨🇩";
      default:
        return name;
    }
  };

  if (!country) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl text-gray-600">Country not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <div className="flex items-center gap-4 mb-12">
        <span
          className="text-4xl"
          aria-hidden>
          {getFlagEmoji(countryId?.toLowerCase(), country.name)}
        </span>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          {country.name}
        </h1>
      </div>

      {country.timeline ? (
        <div className="space-y-6">
          {country.timeline.map((event, index) => (
            <TimelineEvent
              key={index}
              event={event}
              index={index}
            />
          ))}
        </div>
      ) : (
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mb-4">My Experience</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {country.history}
          </p>
        </div>
      )}
    </div>
  );
};

export default CountryPage;
