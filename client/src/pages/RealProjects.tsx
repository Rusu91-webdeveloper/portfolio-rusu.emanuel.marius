import ShowcaseCard from "../components/projects/ShowcaseCard";
import { mvps, vercelProjects, supportingProjects } from "../data/showcase";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n/I18nContext";
import { isSupportingStatus } from "../i18n/translations";

export default function RealProjects() {
  const { t, messages } = useI18n();
  return (
    <div className="wrap page-content">
      <header className="page-intro">
        <p className="eyebrow">
          <span className="section-number">01 /</span> {t("work.eyebrow")}
        </p>
        <h1>
          {t("work.heading")}
          <span>.</span>
        </h1>
        <p>{t("work.intro")}</p>
        <div className="intro-rule">
          <span>{t("work.index")}</span>
          <span>{t("work.scroll")}</span>
        </div>
      </header>
      <section className="work-section">
        <div className="section-heading compact">
          <div>
            <p className="eyebrow">{t("work.domainsEyebrow")}</p>
            <h2>
              {t("work.outInWorld")}
              <span>.</span>
            </h2>
          </div>
          <p>{t("work.fiveProjects")}</p>
        </div>
        <div className="project-grid">
          {mvps.map((p, i) => (
            <ShowcaseCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </section>
      <section className="work-section">
        <div className="section-heading compact">
          <div>
            <p className="eyebrow">{t("work.progressEyebrow")}</p>
            <h2>
              {t("work.ideasInMotion")}
              <span>.</span>
            </h2>
          </div>
          <p>{t("work.fitness")}</p>
        </div>
        <div className="featured-project">
          {vercelProjects.map((p, i) => (
            <ShowcaseCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </section>
      <section className="supporting">
        <div>
          <p className="eyebrow">{t("work.behind")}</p>
          <h2>
            {t("work.supporting")}
            <span>.</span>
          </h2>
          <p>{t("work.additional")}</p>
        </div>
        <div className="supporting-list">
          {supportingProjects.map((p) => (
            <div key={p.name}>
              <span>{p.name}</span>
              <small>
                {isSupportingStatus(p.status)
                  ? messages.work.statuses[p.status]
                  : p.status}
              </small>
            </div>
          ))}
        </div>
      </section>
      <div className="archive-callout">
        <p>{t("work.earlier")}</p>
        <Link to="/projects">
          {t("work.exploreArchive")} <span>↗</span>
        </Link>
      </div>
    </div>
  );
}
