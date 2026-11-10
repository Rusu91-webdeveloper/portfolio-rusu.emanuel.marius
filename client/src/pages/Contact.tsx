import { useI18n } from "../i18n/I18nContext";

export default function Contact() {
  const { t } = useI18n();
  return (
    <div className="wrap page-content contact-page">
      <header className="page-intro">
        <p className="eyebrow">
          <span className="section-number">04 /</span> {t("contact.eyebrow")}
        </p>
        <h1>
          {t("contact.headingTop")}
          <br />
          {t("contact.headingBottom")}
          <span>.</span>
        </h1>
        <p>{t("contact.intro")}</p>
        <div className="intro-rule">
          <span>{t("contact.choose")}</span>
          <span>{t("contact.reach")}</span>
        </div>
      </header>
      <div className="contact-options">
        <a href="mailto:rusu.emanuel.webdeveloper@gmail.com">
          <span>{t("contact.emailLabel")}</span>
          <strong>{t("contact.emailStrong")}</strong>
          <small>rusu.emanuel.webdeveloper@gmail.com</small>
          <b>↗</b>
        </a>
        <a
          href="https://linkedin.com/in/rusu-emanuel-marius"
          target="_blank"
          rel="noreferrer"
        >
          <span>{t("contact.linkedinLabel")}</span>
          <strong>{t("contact.linkedinStrong")}</strong>
          <small>{t("contact.linkedinSmall")}</small>
          <b>↗</b>
        </a>
        <a
          href="https://github.com/Rusu91-webdeveloper"
          target="_blank"
          rel="noreferrer"
        >
          <span>{t("contact.githubLabel")}</span>
          <strong>{t("contact.githubStrong")}</strong>
          <small>{t("contact.githubSmall")}</small>
          <b>↗</b>
        </a>
      </div>
    </div>
  );
}
