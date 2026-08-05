import { skills } from "../data/resumeData";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="section-label">Skills</p>
        <h2 className="section-title">Tools &amp; technologies I work with</h2>

        <div className="skills-grid">
          {skills.map((group) => (
            <div className="skill-card" key={group.group}>
              <h3 className="skill-card__title">{group.group}</h3>
              <div className="skill-card__tags">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
