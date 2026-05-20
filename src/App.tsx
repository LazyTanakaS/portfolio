import { useState } from "react";
import { content } from "./data/content";
import type { Lang } from "../types";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  const [lang, setLang] = useState<Lang>("cz");

  const t = content[lang];

  return (
    <div className="app">
      <Navbar lang={lang} onLangChange={setLang} nav={t.nav} />
      <main>
        <Hero hero={t.hero} />

        <Projects lang={lang} title={t.sections.projects} />
        <Skills title={t.sections.skills} />
        <Contact title={t.sections.contact} location={t.contact.location} />
      </main>
    </div>
  );
}

export default App;
