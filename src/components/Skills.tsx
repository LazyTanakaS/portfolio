import { skills } from "../data/skills";

interface SkillProps {
  title: string;
}

function Skills({ title }: SkillProps) {
  return (
    <section className="skills" id="skills">
      <p className="section-title">{title}</p>

      <div className="skills-grid">
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
