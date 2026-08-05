import { education } from "../data/resumeData";
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <p className="section-label">Education &amp; Certifications</p>
        <h2 className="section-title">Always learning</h2>

        <div className="edu-list">
          {education.map((item) => (
            <div className="edu-item" key={item.title + item.date}>
              <div>
                <p className="edu-item__title">{item.title}</p>
                <p className="edu-item__org">{item.org}</p>
              </div>
              <span className="edu-item__date">{item.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
