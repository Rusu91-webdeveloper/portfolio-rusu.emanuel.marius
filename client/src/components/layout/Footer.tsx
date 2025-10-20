const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-6 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Portfolio. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
              LinkedIn
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
