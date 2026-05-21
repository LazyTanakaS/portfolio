import useScrollAnimation from "../hooks/useScrollAnimation";

interface AboutProps {
  about: {
    title: string;
    text: string;
    facts: { label: string; value: string }[];
  };
}

function About({ about }: AboutProps) {
  const contentRef = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="about" id="about">
      <p className="section-title">{about.title}</p>

      <div ref={contentRef} className="about-content scroll-reveal">
        <p className="about-text">{about.text}</p>

        <div className="about-facts">
          {about.facts.map((fact) => (
            <div key={fact.label} className="fact-item">
              <span className="fact-value">{fact.value}</span>
              <span className="fact-label">{fact.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
