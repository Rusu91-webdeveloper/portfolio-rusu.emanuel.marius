import React from "react";
import { useNavigate } from "react-router-dom";
import { FiMapPin, FiCalendar } from "react-icons/fi";

interface Country {
  name: string;
  id: string;
  lat: number;
  lng: number;
  color: string;
  flag: string;
  years: string;
  description: string;
}

interface CountryTimelineProps {
  countries: Country[];
}

const CountryTimeline: React.FC<CountryTimelineProps> = ({ countries }) => {
  const navigate = useNavigate();

  const handleCountryClick = (countryId: string) => {
    navigate(`/country/${countryId}`);
  };

  const getFlagEmoji = (countryId: string, name: string) => {
    switch (countryId) {
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
      {countries.map((country) => (
        <div
          key={country.id}
          onClick={() => handleCountryClick(country.id)}
          className="group relative cursor-pointer bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 overflow-hidden"
          style={{ borderLeftColor: country.color }}>
          {/* Flag and Country Name */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-8 rounded-md overflow-hidden ring-2 ring-black/10 dark:ring-white/10 shadow-sm flex-shrink-0 grid place-items-center bg-white/60 dark:bg-white/10">
              <span
                className="text-xl"
                aria-label={`${country.name} flag`}>
                {getFlagEmoji(country.id, country.name)}
              </span>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
              {country.name}
            </h3>
          </div>

          {/* Years */}
          <div className="flex items-center gap-2 mb-2">
            <FiCalendar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
              {country.years}
            </span>
          </div>

          {/* Description */}
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
            {country.description}
          </p>

          {/* Color indicator dot */}
          <div className="flex justify-end mt-3">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: country.color }}
            />
          </div>

          {/* Hover effect overlay (kept behind content and non-interactive) */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      ))}
    </div>
  );
};

export default CountryTimeline;
