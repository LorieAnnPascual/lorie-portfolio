import "./About.css";

const stats = [
  { value: "4+", label: "Years building & managing sites" },
  { value: "25+", label: "Sites shipped or maintained" },
  { value: "5", label: "Agencies & teams worked with" },
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <p className="section-label">About</p>
        <h2 className="section-title">
          From migrations to metrics — I own the whole site lifecycle.
        </h2>

        <div className="about__grid">
          <div className="about__text">
            <p>
              I'm a Website Manager based in the Philippines, specializing in
              WordPress, working with agencies and clients across
              healthcare, professional services, and e-commerce. My focus is
              owning the full lifecycle of a site — content operations,
              custom theme and page-builder development (Elementor, Divi,
              Breakdance, Oxygen), technical SEO, and day-to-day maintenance.
            </p>
            <p>
              I've led site re-platforms, built lead-gen automations with
              Gravity Forms, Make, and Airtable, resolved indexing and
              performance issues, and increasingly lean on AI-assisted
              development and prompt engineering to move faster on theme
              builds, content, and SEO. I care about sites that are fast,
              accessible, and easy to maintain long after launch.
            </p>
          </div>

          <div className="about__stats">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <p className="stat__value accent-text">{s.value}</p>
                <p className="stat__label">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
