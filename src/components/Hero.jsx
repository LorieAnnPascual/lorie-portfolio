import { profile } from "../data/resumeData";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <p className="hero__eyebrow">Available for freelance &amp; full-time roles</p>
        <h1 className="hero__title">
          Hi, I'm {profile.name.split(" ")[0]} — a{" "}
          <span className="accent-text">Website Manager</span> specializing
          in WordPress.
        </h1>
        <p className="hero__subtitle">{profile.blurb}</p>

        <div className="hero__actions">
          <a href="#projects" className="btn btn-primary">
            View my work
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in touch
          </a>
          <a href={profile.resume} className="btn btn-ghost" download>
            ⬇ Download Resume
          </a>
        </div>

        <div className="hero__meta">
          <span>📍 {profile.location}</span>
          <span>✉️ {profile.email}</span>
        </div>
      </div>
    </section>
  );
}
