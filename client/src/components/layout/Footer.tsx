import { Link } from "react-router-dom";
import { useI18n } from "../../i18n/I18nContext";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <span className="eyebrow light">{t("footer.eyebrow")}</span>
            <h2>
              {t("footer.heading")}
              <span>.</span>
            </h2>
            <Link to="/contact" className="footer-link">
              {t("footer.cta")}
            </Link>
          </div>
          <span className="footer-mark" aria-hidden="true">
            E/R
          </span>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} EMANUEL RUSU</span>
          <span>{t("footer.independent")}</span>
          <div>
            <a
              href="https://github.com/Rusu91-webdeveloper"
              target="_blank"
              rel="noreferrer"
            >
              {t("footer.github")}
            </a>
            <a
              href="https://linkedin.com/in/rusu-emanuel-marius"
              target="_blank"
              rel="noreferrer"
            >
              {t("footer.linkedin")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
