import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LanguageSwitcher from "../common/LanguageSwitcher";
import { useI18n } from "../../i18n/I18nContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const { t } = useI18n();
  return (
    <header className="site-header">
      <div className="header-inner wrap">
        <Link
          className="brand"
          to="/"
          onClick={close}
          aria-label={t("nav.brandAria")}
        >
          <span className="brand-mark">
            E/R<span>01</span>
          </span>
          <span className="brand-name">
            EMANUEL RUSU
            <br />
            <small>{t("nav.brandRole")}</small>
          </span>
        </Link>
        <LanguageSwitcher />
        <button
          className="menu-toggle"
          aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? t("nav.close") : t("nav.menu")}{" "}
          <span>{open ? "×" : "+"}</span>
        </button>
        <nav
          id="main-navigation"
          className={open ? "navigation is-open" : "navigation"}
          aria-label={t("nav.mainNav")}
        >
          <NavLink to="/" end onClick={close}>
            {t("nav.home")}
          </NavLink>
          <NavLink to="/mvp-showcase" onClick={close}>
            {t("nav.work")}
          </NavLink>
          <NavLink to="/about" onClick={close}>
            {t("nav.about")}
          </NavLink>
          <NavLink to="/projects" onClick={close}>
            {t("nav.archive")}
          </NavLink>
          <LanguageSwitcher className="lang-switch-nav" />
          <Link className="nav-contact" to="/contact" onClick={close}>
            {t("nav.contact")} <span>↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
