import React, { useEffect } from "react";
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
} from "react-icons/fi";
import { useI18n } from "../i18n/I18nContext";
import { isCountryId } from "../i18n/translations";

const countryIcons: Record<string, React.ReactNode[]> = {
  romania: [
    <FiCalendar className="w-6 h-6" key="cal" />,
    <FiBook className="w-6 h-6" key="book" />,
    <FiMapPin className="w-6 h-6" key="pin" />,
    <FiAward className="w-6 h-6" key="award" />,
    <FiCode className="w-6 h-6" key="code" />,
  ],
  germany: [
    <FiTool className="w-6 h-6" key="tool" />,
    <FiCode className="w-6 h-6" key="code" />,
  ],
  france: [
    <FiShield className="w-6 h-6" key="shield" />,
    <FiAward className="w-6 h-6" key="award" />,
  ],
  "uk-london": [
    <FiShield className="w-6 h-6" key="shield" />,
    <FiUsers className="w-6 h-6" key="users" />,
  ],
};

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const TimelineEventCard: React.FC<{ event: TimelineEvent; index: number }> = ({
  event,
  index,
}) => {
  const { t } = useI18n();
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
              <span>{t("country.experience")}</span>
            </div>
            <motion.div
              className="text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}>
              {t("country.learnMore")}
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
  const { t, messages } = useI18n();
  const id = countryId?.toLowerCase() ?? "";
  const country = isCountryId(id) ? messages.country.pages[id] : undefined;
  const icons = countryIcons[id] ?? [];

  useEffect(() => {
    if (country) {
      document.title = `${country.name} — Emanuel Rusu`;
    } else {
      document.title = t("meta.titleDefault");
    }
  }, [country, t]);

  const getFlagEmoji = (flagId: string | undefined, name: string) => {
    switch (flagId) {
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
        <h1 className="text-2xl text-gray-600">{t("country.notFound")}</h1>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <div className="flex items-center gap-4 mb-12">
        <span
          className="text-4xl"
          aria-hidden>
          {getFlagEmoji(id, country.name)}
        </span>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          {country.name}
        </h1>
      </div>

      <div className="space-y-6">
        {country.events.map((event, index) => (
          <TimelineEventCard
            key={index}
            event={{ ...event, icon: icons[index] }}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default CountryPage;
