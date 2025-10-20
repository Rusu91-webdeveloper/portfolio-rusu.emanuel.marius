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
    name: "DR Congo",
    id: "dr-congo",
    lat: -4.0383,
    lng: 21.7587,
    color: "#FF44FF",
    flag: "/flags/dr-congo.png",
    years: "2012 - 2013",
    description: "Military training specialist & peace-keeping operations",
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
    years: "2017 - 2024",
    description: "Machine operator at P&G & full-stack development bootcamp",
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

      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 px-4 max-w-7xl mx-auto">
        <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group">
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

        <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group">
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

        <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group">
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

        <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group">
          <div className="mb-4 flex items-center gap-3">
            <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg group-hover:bg-purple-200 dark:group-hover:bg-purple-900 transition-colors">
              <FiCpu className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              AI Implementation
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Integrating cutting-edge AI technologies and machine learning models
            to create intelligent, adaptive solutions.
          </p>
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
