import type { Lang } from "../types";
import { useEffect, useState } from "react";

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
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0, rootMargin: "-30% 0px -60% 0px" },
    );

    const section = document.querySelectorAll("section[id]");
    section.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const isActive = (section: string) => activeSection === section;

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-name">Petr</span>
        <span className="logo-dot">.</span>
        <span className="logo-suffix">dev</span>
      </div>

      <div className="navbar-links">
        <a
          href="#about"
          className={isActive("about") ? "nav-link active" : "nav-link"}
        >
          {lang === "cz" ? "O mně" : "About"}
        </a>
        <a
          href="#projects"
          className={isActive("projects") ? "nav-link active" : "nav-link"}
        >
          {nav.projects}
        </a>
        <a
          href="#skills"
          className={isActive("skills") ? "nav-link active" : "nav-link"}
        >
          {nav.skills}
        </a>
        <a
          href="#contact"
          className={isActive("contact") ? "nav-link active" : "nav-link"}
        >
          {nav.contact}
        </a>

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
