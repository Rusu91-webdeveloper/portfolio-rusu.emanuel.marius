import type { ShowcaseProject } from "../../data/showcase";
export default function ShowcaseCard({
  project,
  index = 0,
}: {
  project: ShowcaseProject;
  index?: number;
}) {
  return (
    <article className="showcase-card">
      <div className="project-info">
        <p className="project-label">
          {String(index + 1).padStart(2, "0")} / {project.label}
        </p>
        <h3>{project.name}</h3>
        <p className="project-description">{project.description}</p>
        <a
          className="text-link"
          href={project.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`Visit ${project.name} website (opens in a new tab)`}
        >
          VISIT WEBSITE <span>↗</span>
        </a>
      </div>
      <a
        className={`project-art ${project.tone}`}
        href={project.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Visit ${project.name} (opens in a new tab)`}
      >
        {project.image ? (
          <img src={project.image} alt="" loading="lazy" />
        ) : (
          <>
            <span className="art-topline">
              INDEPENDENT PROJECT / {String(index + 1).padStart(2, "0")}
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
