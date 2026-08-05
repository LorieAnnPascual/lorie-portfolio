import { projects } from "../data/resumeData";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-label">Portfolio</p>
        <h2 className="section-title">Sites I've built &amp; managed</h2>

        {projects.map((group) => (
          <div className="proj-group" key={group.category}>
            <h3 className="proj-group__title">{group.category}</h3>
            <div className="proj-grid">
              {group.items.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="proj-card"
                >
                  <span className="proj-card__name">{item.name}</span>
                  <span className="proj-card__arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
