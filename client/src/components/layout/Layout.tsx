import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  useEffect(() => {
    const titles: Record<string, string> = {
      "/": "Emanuel Rusu — Full-stack developer",
      "/mvp-showcase": "Work — Emanuel Rusu",
      "/projects": "Study archive — Emanuel Rusu",
      "/about": "About — Emanuel Rusu",
      "/contact": "Contact — Emanuel Rusu",
    };
    document.title = titles[pathname] ?? "Emanuel Rusu — Full-stack developer";
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
