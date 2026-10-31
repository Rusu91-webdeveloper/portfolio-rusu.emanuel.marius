import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="site-header">
      <div className="header-inner wrap">
        <Link
          className="brand"
          to="/"
          onClick={close}
          aria-label="Emanuel Rusu, home"
        >
          <span className="brand-mark">
            E/R<span>01</span>
          </span>
          <span className="brand-name">
            EMANUEL RUSU
            <br />
            <small>FULL-STACK DEVELOPER</small>
          </span>
        </Link>
        <button
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "CLOSE" : "MENU"} <span>{open ? "×" : "+"}</span>
        </button>
        <nav
          id="main-navigation"
          className={open ? "navigation is-open" : "navigation"}
          aria-label="Main navigation"
        >
          <NavLink to="/" end onClick={close}>
            HOME
          </NavLink>
          <NavLink to="/mvp-showcase" onClick={close}>
            WORK
          </NavLink>
          <NavLink to="/about" onClick={close}>
            ABOUT
          </NavLink>
          <NavLink to="/projects" onClick={close}>
            ARCHIVE
          </NavLink>
          <Link className="nav-contact" to="/contact" onClick={close}>
            GET IN TOUCH <span>↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
