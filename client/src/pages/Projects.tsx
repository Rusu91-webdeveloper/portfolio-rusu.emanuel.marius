import { userProjects } from "../data/projects.user";
import { useI18n } from "../i18n/I18nContext";
import { isArchiveId } from "../i18n/translations";

export default function Projects() {
  const { t, messages } = useI18n();
  return (
    <div className="wrap page-content">
      <header className="page-intro">
        <p className="eyebrow">
          <span className="section-number">03 /</span> {t("archive.eyebrow")}
        </p>
        <h1>
          {t("archive.headingTop")}
          <br />
          {t("archive.headingBottom")}
          <span>.</span>
        </h1>
        <p>{t("archive.intro")}</p>
      </header>
      <div className="archive-grid">
        {userProjects.map((p, i) => (
          <article className="archive-card" key={p.id}>
            <div className="archive-image">
              <img src={p.imageUrl} alt="" loading="lazy" />
              <span>{String(i + 1).padStart(2, "0")}</span>
            </div>
            <div className="archive-body">
              <p className="project-label">
                {t("archive.studyProject", { category: p.category })}
              </p>
              <h2>{p.title}</h2>
              <p>
                {isArchiveId(p.id)
                  ? messages.archive.descriptions[p.id]
                  : p.description}
              </p>
              <div className="tags">
                {p.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="archive-links">
                {p.liveUrl && !p.demoUnavailable && (
                  <a href={p.liveUrl} target="_blank" rel="noreferrer">
                    {t("archive.viewProject")}
                  </a>
                )}
                {p.demoUnavailable && <span>{t("archive.demoUnavailable")}</span>}
                {p.githubUrl && (
                  <a href={p.githubUrl} target="_blank" rel="noreferrer">
                    {t("archive.sourceCode")}
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
