import { Link } from "react-router-dom";
export default function About() {
  return (
    <div className="wrap page-content">
      <header className="page-intro">
        <p className="eyebrow">
          <span className="section-number">02 /</span> ABOUT
        </p>
        <h1>
          A BIT
          <br />
          ABOUT ME<span>.</span>
        </h1>
        <p>
          I'm Emanuel Rusu, a full-stack developer with a background that didn't
          start in tech.
        </p>
        <div className="intro-rule">
          <span>THE PERSON BEHIND THE WORK</span>
          <span>ROMANIA / EUROPE</span>
        </div>
      </header>
      <section className="about-layout">
        <div className="about-photo">
          <img src="/resume-photo.jpg" alt="Emanuel Rusu" />
          <span>EMANUEL RUSU / DEVELOPER</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">A DIFFERENT ROUTE INTO TECH</p>
          <h2>
            Experience travels with you<span>.</span>
          </h2>
          <p>
            My journey has taken me across Romania, France, the UK and Germany.
            Working in different environments taught me to adapt, take
            responsibility, and work with people from different backgrounds.
          </p>
          <p>
            I studied full-stack web development at the Digital Career Institute
            in Berlin. Today I build across the stack, from the interface
            someone sees to the functionality behind it, and explore how AI can
            make products more useful.
          </p>
          <div className="about-actions">
            <a
              className="text-link"
              href="/Emanuel-Rusu-CV-2026.pdf"
              target="_blank"
              rel="noreferrer"
            >
              VIEW MY RESUME ↗
            </a>
            <a className="text-link" href="#education">
              EDUCATION &amp; CERTIFICATE ↓
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
          <p className="eyebrow">EDUCATION / CREDENTIALS</p>
          <h2 id="education-title">
            Where I learned<span>.</span>
          </h2>
        </div>
        <div className="education-detail">
          <p className="education-index">01 / DIGITAL CAREER INSTITUTE</p>
          <h3>Full-Stack Web Development</h3>
          <p>
            Training in the MERN stack, including React, Node.js, Express,
            MongoDB, and a final team project.
          </p>
          <a
            className="certificate-link"
            href="/Rusu-Emanuel.certificate.pdf"
            target="_blank"
            rel="noreferrer"
            aria-label="View DCI training confirmation, PDF (opens in a new tab)"
          >
            <span>
              <strong>DCI training confirmation</strong>
              <small>PDF · English &amp; German</small>
            </span>
            <span className="certificate-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
      </section>
      <section className="skills-section">
        <div>
          <p className="eyebrow">THE TOOLKIT</p>
          <h2>
            What I work with<span>.</span>
          </h2>
        </div>
        <div className="skill-columns">
          <div>
            <span>01 / FRONTEND</span>
            <p>React, Next.js, TypeScript, JavaScript, HTML & CSS</p>
          </div>
          <div>
            <span>02 / BACKEND</span>
            <p>Node.js, APIs, authentication and data-driven applications</p>
          </div>
          <div>
            <span>03 / BEYOND</span>
            <p>
              AI integration, cloud deployment, problem-solving and
              collaboration
            </p>
          </div>
        </div>
      </section>
      <div className="archive-callout">
        <p>HAVE A PROJECT IN MIND?</p>
        <Link to="/contact">
          Let's start a conversation <span>↗</span>
        </Link>
      </div>
    </div>
  );
}
