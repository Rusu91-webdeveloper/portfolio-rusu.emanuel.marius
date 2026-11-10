import { Link } from "react-router-dom";
import { useI18n } from "../i18n/I18nContext";

export default function About() {
  const { t } = useI18n();
  return (
    <div className="wrap page-content">
      <header className="page-intro">
        <p className="eyebrow">
          <span className="section-number">02 /</span> {t("about.eyebrow")}
        </p>
        <h1>
          {t("about.headingTop")}
          <br />
          {t("about.headingBottom")}
          <span>.</span>
        </h1>
        <p>{t("about.intro")}</p>
        <div className="intro-rule">
          <span>{t("about.personBehind")}</span>
          <span>{t("about.location")}</span>
        </div>
      </header>
      <section className="about-layout">
        <div className="about-photo">
          <img src="/resume-photo.jpg" alt="Emanuel Rusu" />
          <span>{t("about.photoCaption")}</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">{t("about.routeEyebrow")}</p>
          <h2>
            {t("about.experienceTravels")}
            <span>.</span>
          </h2>
          <p>{t("about.journey")}</p>
          <p>{t("about.studied")}</p>
          <div className="about-actions">
            <a
              className="text-link"
              href="/Emanuel-Rusu-CV-2026.pdf"
              target="_blank"
              rel="noreferrer"
            >
              {t("about.viewResume")}
            </a>
            <a className="text-link" href="#education">
              {t("about.educationJump")}
            </a>
          </div>
        </div>
      </section>
      <section
        className="education-section"
        id="education"
        aria-labelledby="education-title"
      >
        <div>
          <p className="eyebrow">{t("about.educationEyebrow")}</p>
          <h2 id="education-title">
            {t("about.whereLearned")}
            <span>.</span>
          </h2>
        </div>
        <div className="education-detail">
          <p className="education-index">{t("about.dciIndex")}</p>
          <h3>{t("about.dciTitle")}</h3>
          <p>{t("about.dciBody")}</p>
          <a
            className="certificate-link"
            href="/Rusu-Emanuel.certificate.pdf"
            target="_blank"
            rel="noreferrer"
            aria-label={t("about.dciCertAria")}
          >
            <span>
              <strong>{t("about.dciCertStrong")}</strong>
              <small>{t("about.dciCertSmall")}</small>
            </span>
            <span className="certificate-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
      </section>
      <section className="skills-section">
        <div>
          <p className="eyebrow">{t("about.toolkit")}</p>
          <h2>
            {t("about.workWith")}
            <span>.</span>
          </h2>
        </div>
        <div className="skill-columns">
          <div>
            <span>{t("about.frontend")}</span>
            <p>{t("about.frontendBody")}</p>
          </div>
          <div>
            <span>{t("about.backend")}</span>
            <p>{t("about.backendBody")}</p>
          </div>
          <div>
            <span>{t("about.beyond")}</span>
            <p>{t("about.beyondBody")}</p>
          </div>
        </div>
      </section>
      <div className="archive-callout">
        <p>{t("about.haveProject")}</p>
        <Link to="/contact">
          {t("about.startConversation")} <span>↗</span>
        </Link>
      </div>
    </div>
  );
}
