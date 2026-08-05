import { experience } from "../data/resumeData";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <p className="section-label">Experience</p>
        <h2 className="section-title">Where I've worked</h2>

        <div className="timeline">
          {experience.map((job) => (
            <article className="timeline__item" key={job.company + job.period}>
              <div className="timeline__marker" aria-hidden="true" />
              <div className="timeline__content">
                <div className="timeline__head">
                  <h3>{job.role}</h3>
                  <span className="timeline__period">{job.period}</span>
                </div>
                <p className="timeline__company">{job.company}</p>
                <ul className="timeline__points">
                  {job.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
