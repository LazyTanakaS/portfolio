export interface Project {
  id: string;
  name: string;
  descCs: string;
  descEn: string;
  tags: string[];
  badge: string;
  liveUrl: string;
  repoUrl: string;
}

export const projects: Project[] = [
  {
    id: "expense-tracker",
    name: "Expense Tracker",
    descCs: "React + TypeScript, CRUD, localStorage, sidebar navigace",
    descEn: "React + TypeScript, CRUD, localStorage, sidebar navigation",
    tags: ["TypeScript", "React", "useState", "localStorage"],
    badge: "Hlavní projekt",
    liveUrl: "https://lazytanakas.github.io/React-TypeScript/",
    repoUrl: "https://github.com/LazyTanakaS/React-TypeScript",
  },
  {
    id: "movie-search",
    name: "Movie Search App",
    descCs:
      "React · TMDb API · debounce 500ms · refaktoring z 800 řádků do samostatných komponent",
    descEn:
      "React · TMDb API · 500ms debounce · refactored from 800-line monolith into components",
    tags: ["React", "TMDb API", "useCallback", "debounce"],
    badge: "Architektura",
    liveUrl: "https://lazytanakas.github.io/React-mini-projects/",
    repoUrl: "https://github.com/LazyTanakaS/React-mini-projects",
  },
  {
    id: "weather-app",
    name: "Weather App",
    descCs:
      "React + TypeScript · OpenWeatherMap API · automatický deploy přes GitHub Actions",
    descEn:
      "React + TypeScript · OpenWeatherMap API · automated deploy via GitHub Actions",
    tags: ["TypeScript", "React", "API", "GitHub Actions"],
    badge: "CI/CD",
    liveUrl: "https://lazytanakas.github.io/React-TypeScript/",
    repoUrl: "https://github.com/LazyTanakaS/React-TypeScript",
  },
  {
    id: "js-projects",
    name: "JS Mini Projects",
    descCs:
      "Vanilla JS · Quiz App, Weather, Color Generator · DOM manipulace, Async/Await, REST API",
    descEn:
      "Vanilla JS · Quiz App, Weather, Color Generator · DOM manipulation, Async/Await, REST API",
    tags: ["JavaScript", "Async/Await", "DOM", "API"],
    badge: "Základy",
    liveUrl: "https://lazytanakas.github.io/JS-Mini-Projects/",
    repoUrl: "https://github.com/LazyTanakaS/JS-Mini-Projects",
  },
];
