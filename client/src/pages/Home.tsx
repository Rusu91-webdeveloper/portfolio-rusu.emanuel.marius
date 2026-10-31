import { Link } from "react-router-dom";
import { mvps, vercelProjects } from "../data/showcase";

const selected = [...mvps.slice(0, 3), ...vercelProjects];

export default function Home() {
  return (
    <>
      <section className="home-hero wrap">
        <div className="hero-meta">
          <span>
            Independent developer
            <br />
            Based in Romania
          </span>
          <span>
            Portfolio / {new Date().getFullYear()}
            <br />
            Selected work & ideas
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
            <p>
              I build websites and digital products for people with something to
              put into the world.
            </p>
            <Link to="/mvp-showcase" className="arrow-link">
              Explore the work <span>↗</span>
            </Link>
          </div>
          <div className="hero-portrait">
            <img src="/resume-photo.jpg" alt="Emanuel Rusu" />
            <span>
              FULL-STACK DEVELOPER
              <br />
              01 / 01
            </span>
          </div>
          <div className="hero-side">
            <span>
              FROM IDEA
              <br />
              TO INTERFACE
              <br />
              TO LAUNCH.
            </span>
            <span className="hero-side-arrow" aria-hidden="true">
              ↘
            </span>
            <span>SCROLL TO EXPLORE</span>
          </div>
        </div>
      </section>

      <section className="home-work wrap">
        <div className="editorial-heading">
          <div>
            <p className="eyebrow">01 / SELECTED WORK</p>
            <h2>
              Made for
              <br />
              <span>the real world.</span>
            </h2>
          </div>
          <p>
            Businesses, products, and ideas — each with its own set of problems
            to solve.
          </p>
        </div>
        <div className="work-index">
          {selected.map((project, index) => (
            <a
              key={project.name}
              className="work-index-row"
              href={project.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${project.name} (opens in a new tab)`}
            >
              <span className="work-number">0{index + 1}</span>
              <span className="work-name">{project.name}</span>
              <span className="work-type">{project.label}</span>
              <span className="work-arrow">↗</span>
            </a>
          ))}
        </div>
        <div className="index-footer">
          <span>AN INDEX OF THINGS I'VE BUILT</span>
          <Link to="/mvp-showcase" className="arrow-link">
            See all work <span>↗</span>
          </Link>
        </div>
      </section>

      <section className="home-note">
        <div className="wrap note-grid">
          <p className="eyebrow">02 / THE PERSON</p>
          <div>
            <h2>
              Different paths.
              <br />
              <span>Same curiosity.</span>
            </h2>
            <p>
              Before development, my work took me across countries and
              industries. That experience shaped how I approach problems: listen
              closely, learn fast, and make things useful.
            </p>
            <Link to="/about" className="arrow-link">
              More about me <span>↗</span>
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
