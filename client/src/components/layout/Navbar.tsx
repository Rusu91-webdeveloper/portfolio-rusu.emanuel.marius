import { Link } from "react-router-dom";
import ThemeToggle from "../common/ThemeToggle";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-xl font-bold text-primary-600 dark:text-primary-400">
              Portfolio
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link
              to="/"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-400">
              Home
            </Link>
            <Link
              to="/projects"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-400">
              Projects
            </Link>
            <Link
              to="/mvp-showcase"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-400">
              MVP Showcase
            </Link>
            <Link
              to="/about"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-400">
              About
            </Link>
            <Link
              to="/contact"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-400">
              Contact
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
