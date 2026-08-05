// Generates public/resume.pdf from the same source data used on the site.
// Run with: node scripts/generate-resume-pdf.cjs
const fs = require("fs");
const path = require("path");
const PDFDocument = require("pdfkit");

const profile = {
  name: "Lorie Ann Pascual",
  title: "Website Manager | WordPress Specialist | Frontend Developer",
  location: "Binangonan, Rizal, Philippines",
  phone: "+63 929 383 2505",
  email: "lorie.ann.b.pascual@gmail.com",
  linkedin: "https://www.linkedin.com/in/lorie-ann-pascual/",
  site: "https://lorieannpascual.netlify.app",
};

const experience = [
  {
    company: "MBVA 24-7",
    role: "WordPress Developer",
    period: "Feb 2025 – Present",
    points: [
      "Led the migration of 3 corporate sites from Divi to Elementor Pro, achieving full mobile responsiveness and improved load times.",
      "Engineered a custom ROI calculator using Gravity Forms and JavaScript to boost lead conversion rates; directed AI-assisted development of a custom WordPress theme, handling all QA, integration, and customization.",
      "Executed technical and on-page SEO, including keyword research, competitor analysis, HTML semantics, and AI-assisted content improvement. Reduced unindexed blog posts from 14 to 2 through internal linking, robots.txt refinements, and custom schema (Ubersuggest, Claude Pro).",
      "Audited and replaced heavyweight plugins with lighter alternatives, improving GTmetrix grade from C to B; maintained security hardening across high-traffic client domains.",
      "Handled job postings and marketing updates across Facebook, Instagram, and LinkedIn.",
    ],
  },
  {
    company: "Be Epic LLC",
    role: "Project-based Frontend Developer",
    period: "Jan 2025 – Jul 2025",
    points: [
      "Developed and launched client sites using WordPress, Wix, and GoDaddy, ensuring cross-browser compatibility and brand alignment.",
      "Integrated AI tools for rapid content updates and handled technical troubleshooting for legacy WordPress installations.",
      "Managed a client's WordPress/WooCommerce store and resolved an email-deliverability issue affecting order and inquiry notifications to a Yahoo inbox.",
    ],
  },
  {
    company: "Trouble Free Employees LLC",
    role: "Project-based Frontend Developer",
    period: "Jun 2024 – Apr 2025",
    points: [
      "Developed a high-fidelity, responsive master template in GoHighLevel for karate-school clients, using custom HTML/CSS/JS to overcome GHL page-builder limitations.",
      "Collaborated with the developer team to replicate the master template across nearly 10 sub-accounts.",
      "Assigned to lead development of a cleaning-service/staffing site after the senior developer left the agency.",
      "Managed a client's WordPress site, creating and updating pages with handed-over content.",
      "Built and managed automated lead-nurture funnels in GoHighLevel with calendar-booking integrations.",
    ],
  },
  {
    company: "USA Wholesale Suppliers",
    role: "Freelance WordPress Developer",
    period: "Oct 2023 – Dec 2023",
    points: [
      "Connected Elementor forms to Airtable so submissions flowed directly into the database; built additional automations across Make and Airtable to reduce manual data entry.",
      "Assisted in web design and developed client sites in Elementor and Wix.",
      "Handled job postings across Facebook and Reddit.",
    ],
  },
  {
    company: "Aemorph (Singapore Digital Agency)",
    role: "Junior WordPress Developer",
    period: "Mar 2022 – Jun 2023",
    points: [
      "Improved site performance and rankings via 301 redirects, WebP image conversion, and internal/external linking (RankMath, Yoast).",
      "Contributed to a 5-person team building custom WordPress themes via manual coding (HTML, CSS, JS, PHP) and Elementor.",
      "Promoted to lead developer after senior team members departed; led development of the CA Facilities website and a restaurant website on custom WordPress themes with Elementor.",
      "Published blogs and built pages across Drupal, Wix, Webflow, and Magnolia.",
      "Bulk-uploaded and managed hundreds of products on Shopify.",
      "Implemented tracking via Google Analytics, Tag Manager, and Search Console.",
      "Performed basic image resizing and optimization in Adobe Photoshop.",
    ],
  },
];

const skills = [
  { group: "Website Management & WordPress", items: ["WordPress Site Administration", "Elementor Pro", "Breakdance", "Oxygen", "WPBakery", "Divi", "ACF", "Custom Post Types", "Content Operations"] },
  { group: "Development", items: ["HTML5", "CSS3 / Bootstrap / Tailwind / SCSS", "JavaScript / jQuery", "PHP", "React (Vite) / Laravel — basics"] },
  { group: "AI & Automation", items: ["Prompt Engineering", "AI-Assisted Development (Claude, ChatGPT)", "AI Content & SEO Workflows", "Make", "Zapier", "Airtable"] },
  { group: "SEO & Analytics", items: ["Keyword Research", "Schema Markup", "GSC", "Google Analytics", "GTM", "Microsoft Clarity", "Bing Webmaster Tools", "RankMath", "Yoast", "AIOSEO", "Slim SEO"] },
  { group: "Tools & Hosting", items: ["HubSpot", "Zoho", "GoHighLevel", "Git/GitHub", "Bitbucket", "VS Code", "Figma", "Canva", "cPanel", "phpMyAdmin", "WPEngine", "SiteGround", "Hostinger", "WPX"] },
];

const education = [
  { title: "HIPAA Awareness for Healthcare Providers", org: "HIPAATraining.com", date: "Jul 2026" },
  { title: "WordPress: Building a Secure Site", org: "LinkedIn Learning", date: "May 2023" },
  { title: "Technical WordPress SEO", org: "LinkedIn Learning", date: "May 2023" },
  { title: "Learning Webpack 4", org: "LinkedIn Learning", date: "Apr 2022" },
  { title: "Full-stack Web Development Bootcamp", org: "KodeGo", date: "Jan 2022" },
  { title: "Become a Web Developer", org: "LinkedIn Learning", date: "Aug 2021" },
];

const ACCENT = "#6d3fd1";
const DIM = "#555555";
const TEXT = "#1a1a1a";

const outPath = path.join(__dirname, "..", "public", "resume.pdf");
const doc = new PDFDocument({ size: "A4", margins: { top: 44, bottom: 44, left: 50, right: 50 } });
doc.pipe(fs.createWriteStream(outPath));

const pageWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right;

function heading(text) {
  doc.moveDown(0.6);
  doc.fillColor(ACCENT).font("Helvetica-Bold").fontSize(11.5).text(text.toUpperCase(), { characterSpacing: 0.6 });
  const y = doc.y + 2;
  doc.moveTo(doc.page.margins.left, y).lineTo(doc.page.margins.left + pageWidth, y).strokeColor("#dddddd").lineWidth(1).stroke();
  doc.moveDown(0.5);
  doc.fillColor(TEXT);
}

// Header
doc.font("Helvetica-Bold").fontSize(24).fillColor(TEXT).text(profile.name);
doc.font("Helvetica").fontSize(12).fillColor(ACCENT).text(profile.title);
doc.moveDown(0.3);
doc.font("Helvetica").fontSize(9.5).fillColor(DIM).text(
  `${profile.location}  |  ${profile.phone}  |  ${profile.email}  |  ${profile.linkedin}  |  ${profile.site}`
);

heading("Professional Experience");
experience.forEach((job, idx) => {
  doc.font("Helvetica-Bold").fontSize(11).fillColor(TEXT).text(job.role, { continued: true });
  doc.font("Helvetica").fontSize(10).fillColor(DIM).text(`   ${job.period}`, { align: "left" });
  doc.font("Helvetica-Oblique").fontSize(10).fillColor(ACCENT).text(job.company);
  doc.moveDown(0.15);
  job.points.forEach((pt) => {
    doc.font("Helvetica").fontSize(9.7).fillColor(TEXT).text(`•  ${pt}`, {
      indent: 0,
      align: "left",
      lineGap: 1.5,
    });
  });
  if (idx !== experience.length - 1) doc.moveDown(0.5);
});

heading("Technical Skills");
skills.forEach((group) => {
  doc.font("Helvetica-Bold").fontSize(9.8).fillColor(TEXT).text(`${group.group}: `, { continued: true });
  doc.font("Helvetica").fontSize(9.8).fillColor(DIM).text(group.items.join(", "));
  doc.moveDown(0.25);
});

heading("Education & Certifications");
education.forEach((e) => {
  doc.font("Helvetica-Bold").fontSize(9.8).fillColor(TEXT).text(`${e.title}`, { continued: true });
  doc.font("Helvetica").fontSize(9.8).fillColor(DIM).text(`  —  ${e.org}, ${e.date}`);
  doc.moveDown(0.15);
});

doc.end();
console.log("Resume PDF written to", outPath);
