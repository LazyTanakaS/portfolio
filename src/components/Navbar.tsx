import type { Lang } from "../types";

interface NavbarProps {
  lang: Lang;
  onLangChange: (lang: Lang) => void;
  nav: {
    projects: string;
    skills: string;
    contact: string;
  };
}

function Navbar({ lang, onLangChange, nav }: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-name">Petr</span>
        <span className="logo-dot">.</span>
        <span className="logo-suffix">dev</span>
      </div>

      <div className="navbar-links">
        <a href="#projects">{nav.projects}</a>
        <a href="#skills">{nav.skills}</a>
        <a href="#contact">{nav.contact}</a>

        <div className="lang-toggle">
          <button
            className={lang === "cz" ? "lang-btn active" : "lang-btn"}
            onClick={() => onLangChange("cz")}
          >
            CS
          </button>
          <button
            className={lang === "en" ? "lang-btn active" : "lang-btn"}
            onClick={() => onLangChange("en")}
          >
            EN
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
