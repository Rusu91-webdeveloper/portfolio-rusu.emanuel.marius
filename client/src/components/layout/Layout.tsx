import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useI18n } from "../../i18n/I18nContext";

export default function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const { t } = useI18n();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const titles: Record<string, string> = {
      "/": t("meta.titleHome"),
      "/mvp-showcase": t("meta.titleWork"),
      "/projects": t("meta.titleArchive"),
      "/about": t("meta.titleAbout"),
      "/contact": t("meta.titleContact"),
    };
    if (!pathname.startsWith("/country/")) {
      document.title = titles[pathname] ?? t("meta.titleDefault");
    }
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", t("meta.description"));
    }
  }, [pathname, t]);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        {t("nav.skip")}
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
