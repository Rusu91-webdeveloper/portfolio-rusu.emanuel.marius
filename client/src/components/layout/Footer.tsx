import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <span className="eyebrow light">HAVE A PROJECT IN MIND?</span>
            <h2>
              LET'S TALK<span>.</span>
            </h2>
            <Link to="/contact" className="footer-link">
              Start a conversation ↗
            </Link>
          </div>
          <span className="footer-mark" aria-hidden="true">
            E/R
          </span>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} EMANUEL RUSU</span>
          <span>INDEPENDENT DEVELOPER / ROMANIA</span>
          <div>
            <a
              href="https://github.com/Rusu91-webdeveloper"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB ↗
            </a>
            <a
              href="https://linkedin.com/in/rusu-emanuel-marius"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
