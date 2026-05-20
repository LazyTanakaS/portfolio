import type { Lang } from "../types";
import { projects } from "../data/projects";

interface ProjectProps {
  lang: Lang;
  title: string;
}

function Projects({ lang, title }: ProjectProps) {
  return (
    <section className="projects" id="projects">
      <p className="section-title">{title}</p>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <span className="project-name">{project.name}</span>
              <span className="project-badge">{project.badge}</span>
            </div>

            <p className="project-desc">
              {lang === "cz" ? project.descCs : project.descEn}
            </p>

            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="project-links">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="link-live"
              >
                Live demo →
              </a>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="link-repo"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
