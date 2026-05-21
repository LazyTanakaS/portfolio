import type { Lang } from "../types";

type Copy = {
  nav: {
    projects: string;
    skills: string;
    contact: string;
  };
  hero: {
    label: string;
    subtitle: string;
    btnProjects: string;
    btnContact: string;
  };
  sections: {
    projects: string;
    skills: string;
    contact: string;
  };
  contact: {
    location: string;
  };
  about: {
    title: string;
    text: string;
    facts: { label: string; value: string }[];
  };
};

export const content: Record<Lang, Copy> = {
  cz: {
    nav: {
      projects: "Projekty",
      skills: "Dovednosti",
      contact: "Kontakt",
    },
    hero: {
      label: "Junior Frontend Developer",
      subtitle:
        "Stavím aplikace v React a TypeScript se zaměřením na čistou architekturu. 16+ projektů, živá dema, CI/CD přes GitHub Actions.",
      btnProjects: "Zobrazit projekty",
      btnContact: "Kontakt",
    },
    sections: {
      projects: "Projekty",
      skills: "Dovednosti",
      contact: "Kontakt",
    },
    contact: {
      location: "Praha, CZ",
    },
    about: {
      title: "O mně",
      text: "Přecházím z managementu v gastronomii do frontend developmentu. Věnuji 2+ hodiny denně učení a budování reálných projektů. Za více než rok jsem postavil 16+ aplikací v React a TypeScript.",
      facts: [
        { label: "Zkušenosti", value: "1+ rok" },
        { label: "Projekty", value: "16+" },
        { label: "Denně", value: "2+ hod" },
        { label: "Lokace", value: "Praha" },
      ],
    },
  },

  en: {
    nav: {
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      label: "Junior Frontend Developer",
      subtitle:
        "Building React and TypeScript apps with a focus on clean architecture. 16+ projects, live demos, CI/CD via GitHub Actions.",
      btnProjects: "View projects",
      btnContact: "Contact",
    },
    sections: {
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    contact: {
      location: "Prague, CZ",
    },
    about: {
      title: "About",
      text: "Transitioning from operations management in hospitality to frontend development. I dedicate 2+ hours daily to learning and building real projects. In over a year I built 16+ React and TypeScript applications.",
      facts: [
        { label: "Experience", value: "1+ year" },
        { label: "Projects", value: "16+" },
        { label: "Daily", value: "2+ hrs" },
        { label: "Location", value: "Prague" },
      ],
    },
  },
};
