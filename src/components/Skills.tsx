import { skills } from "../data/skills";
import useScrollAnimation from "../hooks/useScrollAnimation";

interface SkillProps {
  title: string;
}

function Skills({ title }: SkillProps) {
  const gridRef = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="skills" id="skills">
      <p className="section-title">{title}</p>

      <div ref={gridRef} className="skills-grid scroll-reveal">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-item">
            <span className={`skill-dot dot-${skill.category}`}></span>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
