import { userProjects } from "../data/projects.user";
export default function Projects() {
  return (
    <div className="wrap page-content">
      <header className="page-intro">
        <p className="eyebrow">
          <span className="section-number">03 /</span> THE ARCHIVE
        </p>
        <h1>
          THE EARLY
          <br />
          WORK<span>.</span>
        </h1>
        <p>
          The projects I built while learning the craft — and the starting point
          for the work I do today.
        </p>
      </header>
      <div className="archive-grid">
        {userProjects.map((p, i) => (
          <article className="archive-card" key={p.id}>
            <div className="archive-image">
              <img src={p.imageUrl} alt="" loading="lazy" />
              <span>{String(i + 1).padStart(2, "0")}</span>
            </div>
            <div className="archive-body">
              <p className="project-label">STUDY PROJECT / {p.category}</p>
              <h2>{p.title}</h2>
              <p>{p.description}</p>
              <div className="tags">
                {p.technologies.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="archive-links">
                {p.liveUrl && !p.demoUnavailable && (
                  <a href={p.liveUrl} target="_blank" rel="noreferrer">
                    View project ↗
                  </a>
                )}
                {p.demoUnavailable && <span>Demo unavailable</span>}
                {p.githubUrl && (
                  <a href={p.githubUrl} target="_blank" rel="noreferrer">
                    Source code ↗
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
