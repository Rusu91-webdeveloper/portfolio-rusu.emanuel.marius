import type { ShowcaseProject } from "../../data/showcase";
import { useI18n } from "../../i18n/I18nContext";
import { isShowcaseName } from "../../i18n/translations";

export default function ShowcaseCard({
  project,
  index = 0,
}: {
  project: ShowcaseProject;
  index?: number;
}) {
  const { t, messages } = useI18n();
  const label = isShowcaseName(project.name)
    ? messages.showcase.labels[project.name]
    : project.label;
  const description = isShowcaseName(project.name)
    ? messages.showcase.descriptions[project.name]
    : project.description;
  const number = String(index + 1).padStart(2, "0");
  return (
    <article className="showcase-card">
      <div className="project-info">
        <p className="project-label">
          {number} / {label}
        </p>
        <h3>{project.name}</h3>
        <p className="project-description">{description}</p>
        <a
          className="text-link"
          href={project.url}
          target="_blank"
          rel="noreferrer"
          aria-label={t("showcase.visitAria", { name: project.name })}
        >
          {t("showcase.visitWebsite")} <span>↗</span>
        </a>
      </div>
      <a
        className={`project-art ${project.tone}`}
        href={project.url}
        target="_blank"
        rel="noreferrer"
        aria-label={t("showcase.visitAriaShort", { name: project.name })}
      >
        {project.image ? (
          <img src={project.image} alt="" loading="lazy" />
        ) : (
          <>
            <span className="art-topline">
              {t("showcase.independentProject", { n: number })}
            </span>
            <span className="art-monogram">
              {project.monogram}
              <span>.</span>
            </span>
            <span className="art-caption">{project.domain}</span>
          </>
        )}
        <span className="art-arrow" aria-hidden="true">
          ↗
        </span>
      </a>
    </article>
  );
}
