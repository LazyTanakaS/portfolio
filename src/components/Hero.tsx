interface HeroProps {
  hero: {
    label: string;
    subtitle: string;
    btnProjects: string;
    btnContact: string;
  };
}

function Hero({ hero }: HeroProps) {
  return (
    <section className="hero">
      <p className="hero-label">{hero.label}</p>
      <h1 className="hero-title">
        Petr <span className="accent">Komar</span>
      </h1>
      <p className="hero-subtitle">{hero.subtitle}</p>
      <div className="hero-actions">
        <a href="#projects" className="btn-primary">
          {hero.btnProjects}
        </a>
        <a href="#contact" className="btn-outline">
          {hero.btnContact}
        </a>
      </div>

      <div className="hero-stack">
        <span className="stack-tag">TypeScript</span>
        <span className="stack-tag">React 18</span>
        <span className="stack-tag">CSS3</span>
        <span className="stack-tag">GitHub Actions</span>
      </div>
    </section>
  );
}

export default Hero;
