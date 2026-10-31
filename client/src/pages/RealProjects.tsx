import ShowcaseCard from "../components/projects/ShowcaseCard";
import { mvps, vercelProjects, supportingProjects } from "../data/showcase";
import { Link } from "react-router-dom";
export default function RealProjects() {
  return (
    <div className="wrap page-content">
      <header className="page-intro">
        <p className="eyebrow">
          <span className="section-number">01 /</span> SELECTED WORK
        </p>
        <h1>
          THE WORK<span>.</span>
        </h1>
        <p>
          A collection of websites and products built for businesses, customers,
          and ideas worth exploring.
        </p>
        <div className="intro-rule">
          <span>PROJECT INDEX</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </header>
      <section className="work-section">
        <div className="section-heading compact">
          <div>
            <p className="eyebrow">01—05 / CUSTOM DOMAINS</p>
            <h2>
              Out in the world<span>.</span>
            </h2>
          </div>
          <p>Five projects with their own place on the web.</p>
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
            <p className="eyebrow">06 / PRODUCT IN PROGRESS</p>
            <h2>
              Ideas in motion<span>.</span>
            </h2>
          </div>
          <p>A fitness product bringing nutrition and training together.</p>
        </div>
        <div className="featured-project">
          {vercelProjects.map((p, i) => (
            <ShowcaseCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </section>
      <section className="supporting">
        <div>
          <p className="eyebrow">BEHIND THE SCENES</p>
          <h2>
            Supporting projects<span>.</span>
          </h2>
          <p>Additional deployments in the Vercel workspace.</p>
        </div>
        <div className="supporting-list">
          {supportingProjects.map((p) => (
            <div key={p.name}>
              <span>{p.name}</span>
              <small>{p.status}</small>
            </div>
          ))}
        </div>
      </section>
      <div className="archive-callout">
        <p>THE EARLIER CHAPTER</p>
        <Link to="/projects">
          Explore the study archive <span>↗</span>
        </Link>
      </div>
    </div>
  );
}
