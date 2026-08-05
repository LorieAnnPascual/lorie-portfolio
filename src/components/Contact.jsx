import { profile } from "../data/resumeData";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact__inner">
        <p className="section-label">Contact</p>
        <h2 className="contact__title">
          Let's build something <span className="accent-text">fast &amp; findable</span>.
        </h2>
        <p className="contact__subtitle">
          Have a WordPress project, migration, or SEO problem you need
          solved? I'm currently open to freelance and full-time
          opportunities — send me a message.
        </p>

        <div className="contact__actions">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            ✉️ {profile.email}
          </a>
          <a
            className="btn btn-ghost"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a className="btn btn-ghost" href={`tel:${profile.phone.replace(/\s+/g, "")}`}>
            {profile.phone}
          </a>
          <a className="btn btn-ghost" href={profile.resume} download>
            ⬇ Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
