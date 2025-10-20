import GlobeContainer from "../components/Globe";
import CountryTimeline from "../components/CountryTimeline";
import {
  FiMonitor,
  FiServer,
  FiDatabase,
  FiCpu,
  FiDownload,
  FiMapPin,
  FiAward,
} from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import ProjectsGateway from "../components/home/ProjectsGateway";

// Country data for timeline - arranged chronologically
const COUNTRIES_DATA = [
  {
    name: "Romania",
    id: "romania",
    lat: 45.9432,
    lng: 24.9668,
    color: "#44FF44",
    flag: "/flags/romania.png",
    years: "1991 - 2009, 2025 - Present",
    description:
      "Birth country & current location - developing Techtots.ro & business MVPs",
  },
  {
    name: "France",
    id: "france",
    lat: 46.2276,
    lng: 2.2137,
    color: "#FFFF44",
    flag: "/flags/france.png",
    years: "2009 - 2012",
    description: "French Foreign Legion service",
  },
  {
    name: "UK-London",
    id: "uk-london",
    lat: 51.5074,
    lng: -0.1278,
    color: "#4444FF",
    flag: "/flags/uk.png",
    years: "2013 - 2017",
    description: "Close protection operative & security training",
  },
  {
    name: "Germany",
    id: "germany",
    lat: 51.1657,
    lng: 10.4515,
    color: "#FF4444",
    flag: "/flags/germany.png",
    years: "2017 - 2025",
    description:
      "2017-2023: Machine Operator at P&G; 2023-2025: Full-Stack Development",
  },
];

const Home = () => {
  return (
    <div className="space-y-12">
      <section className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto px-4">
        <div className="text-left md:w-2/3">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            Welcome to My Portfolio
          </h1>
          <div className="mb-6">
            <TypeAnimation
              sequence={[
                "Full-stack developer passionate about creating beautiful and functional web applications.",
                2000,
                "Experienced in modern frameworks and cloud technologies.",
                2000,
                "Specialized in AI integration and scalable solutions.",
                2000,
              ]}
              wrapper="p"
              speed={50}
              className="max-w-2xl text-lg text-gray-600 dark:text-gray-300"
              repeat={Infinity}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/Rusu-Emanuel.QRresume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200 group">
              <FiDownload className="w-5 h-5 group-hover:animate-bounce" />
              Download Resume
            </a>
            <a
              href="/Rusu-Emanuel.certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 transition-colors duration-200 group">
              <FiAward className="w-5 h-5 group-hover:animate-bounce" />
              View Certificate
            </a>
          </div>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            <img
              src="/resume-photo.jpg"
              alt="Profile"
              className="rounded-2xl shadow-2xl object-cover w-full h-full"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-black/10 dark:ring-white/10"></div>
          </div>
        </div>
      </section>

      <section className="flex flex-wrap justify-center gap-8 px-4 max-w-7xl mx-auto">
        <div className="w-full sm:w-80 lg:w-72 rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group">
          <div className="mb-4 flex items-center gap-3">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-900 transition-colors">
              <FiMonitor className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Frontend Development
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Creating responsive and intuitive user interfaces using modern
            frameworks and libraries like React, TypeScript, and Tailwind CSS.
          </p>
        </div>

        <div className="w-full sm:w-80 lg:w-72 rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group">
          <div className="mb-4 flex items-center gap-3">
            <div className="p-2 bg-green-100 dark:bg-green-900/50 rounded-lg group-hover:bg-green-200 dark:group-hover:bg-green-900 transition-colors">
              <FiServer className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Backend Development
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Building scalable and secure server-side applications with Node.js,
            Express, and modern API architectures.
          </p>
        </div>

        <div className="w-full sm:w-80 lg:w-72 rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group">
          <div className="mb-4 flex items-center gap-3">
            <div className="p-2 bg-yellow-100 dark:bg-yellow-900/50 rounded-lg group-hover:bg-yellow-200 dark:group-hover:bg-yellow-900 transition-colors">
              <FiDatabase className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Database Design
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Designing and implementing efficient database solutions with
            MongoDB, optimized for performance and scalability.
          </p>
        </div>

        <div className="w-full relative rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-800/30 dark:to-pink-800/30 p-8 shadow-2xl backdrop-blur-sm hover:shadow-3xl transition-all duration-500 group transform hover:scale-105 hover:-translate-y-2 border-2 border-purple-200 dark:border-purple-700 hover:border-purple-400 dark:hover:border-purple-500">
          {/* Animated background gradient */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-400/10 via-pink-400/10 to-violet-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>

          {/* Glowing ring effect */}
          <div className="absolute inset-0 rounded-xl ring-2 ring-purple-300/50 dark:ring-purple-400/50 group-hover:ring-purple-400/80 dark:group-hover:ring-purple-300/80 transition-all duration-500 shadow-purple-200/50 dark:shadow-purple-400/50"></div>

          {/* Featured badge */}
          <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce">
            FEATURED
          </div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:scale-110">
                <FiCpu className="w-8 h-8 text-white animate-pulse" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                  AI Implementation
                </h3>
                <p className="text-sm text-purple-600/80 dark:text-purple-400/80 font-medium">
                  Cutting-edge technology integration
                </p>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-gray-700 dark:text-gray-200 font-medium leading-relaxed text-lg">
                Integrating cutting-edge AI technologies and machine learning
                models to create intelligent, adaptive solutions that
                revolutionize user experiences. Specializing in RAG systems, MCP
                servers, and generative AI applications.
              </p>
            </div>

            {/* Enhanced sparkle effects */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
            <div className="absolute bottom-4 right-12 w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-8 right-20 w-2 h-2 bg-violet-400 rounded-full animate-bounce delay-500"></div>
            <div className="absolute top-12 right-8 w-1.5 h-1.5 bg-purple-300 rounded-full animate-ping delay-700"></div>
            <div className="absolute bottom-8 right-16 w-1 h-1 bg-pink-300 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </section>

      {/* Cultural & Professional Background Section */}
      <section className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FiMapPin className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Cultural & Professional Background
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My journey spans over 15 years across multiple countries, bringing
            diverse cultural perspectives and international work experience to
            every project. Each location has shaped my professional development
            and technical expertise.
          </p>
        </div>

        {/* Country Timeline */}
        <div className="mb-8">
          <CountryTimeline countries={COUNTRIES_DATA} />
        </div>

        {/* Interactive Globe */}
        <div className="relative h-[50vh] min-h-[400px] rounded-2xl overflow-hidden shadow-2xl">
          <GlobeContainer />

          {/* Call to Action Overlay */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium">
            Click on any location to learn more about my experience there
          </div>
        </div>
      </section>

      {/* Projects Gateway Section above Footer */}
      <ProjectsGateway />
    </div>
  );
};

export default Home;
