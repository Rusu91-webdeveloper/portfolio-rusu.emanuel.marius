import { Link } from "react-router-dom";
import { mvps, vercelProjects } from "../data/showcase";
import { useI18n } from "../i18n/I18nContext";
import { isShowcaseName } from "../i18n/translations";

const selected = [...mvps.slice(0, 3), ...vercelProjects];

export default function Home() {
  const { t, messages } = useI18n();
  const year = new Date().getFullYear();
  return (
    <>
      <section className="home-hero wrap">
        <div className="hero-meta">
          <span>
            {t("home.independent")}
            <br />
            {t("home.based")}
          </span>
          <span>
            {t("home.portfolio", { year })}
            <br />
            {t("home.selected")}
          </span>
        </div>
        <h1 className="hero-name">
          <span>EMANUEL</span>
          <span>
            RUSU<span className="name-period">.</span>
          </span>
        </h1>
        <div className="hero-lower">
          <div className="hero-statement">
            <span className="square-mark" aria-hidden="true">
              ✳
            </span>
            <p>{t("home.statement")}</p>
            <Link to="/mvp-showcase" className="arrow-link">
              {t("home.exploreWork")} <span>↗</span>
            </Link>
          </div>
          <div className="hero-portrait">
            <img src="/resume-photo.jpg" alt="Emanuel Rusu" />
            <span>
              {t("home.role")}
              <br />
              01 / 01
            </span>
          </div>
          <div className="hero-side">
            <span>
              {t("home.fromIdea")}
              <br />
              {t("home.toInterface")}
              <br />
              {t("home.toLaunch")}
            </span>
            <span className="hero-side-arrow" aria-hidden="true">
              ↘
            </span>
            <span>{t("home.scroll")}</span>
          </div>
        </div>
      </section>

      <section className="home-work wrap">
        <div className="editorial-heading">
          <div>
            <p className="eyebrow">{t("home.selectedEyebrow")}</p>
            <h2>
              {t("home.madeFor")}
              <br />
              <span>{t("home.realWorld")}</span>
            </h2>
          </div>
          <p>{t("home.businesses")}</p>
        </div>
        <div className="work-index">
          {selected.map((project, index) => (
            <a
              key={project.name}
              className="work-index-row"
              href={project.url}
              target="_blank"
              rel="noreferrer"
              aria-label={t("home.visitAria", { name: project.name })}
            >
              <span className="work-number">0{index + 1}</span>
              <span className="work-name">{project.name}</span>
              <span className="work-type">
                {isShowcaseName(project.name)
                  ? messages.showcase.labels[project.name]
                  : project.label}
              </span>
              <span className="work-arrow">↗</span>
            </a>
          ))}
        </div>
        <div className="index-footer">
          <span>{t("home.indexNote")}</span>
          <Link to="/mvp-showcase" className="arrow-link">
            {t("home.seeAll")} <span>↗</span>
          </Link>
        </div>
      </section>

      <section className="home-note">
        <div className="wrap note-grid">
          <p className="eyebrow">{t("home.personEyebrow")}</p>
          <div>
            <h2>
              {t("home.differentPaths")}
              <br />
              <span>{t("home.sameCuriosity")}</span>
            </h2>
            <p>{t("home.beforeDev")}</p>
            <Link to="/about" className="arrow-link">
              {t("home.moreAbout")} <span>↗</span>
            </Link>
          </div>
          <span className="note-number" aria-hidden="true">
            ER
            <br />
            01
          </span>
        </div>
      </section>
    </>
  );
}
