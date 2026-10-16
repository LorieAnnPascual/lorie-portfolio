// Generates public/resume.pdf from the same source data used on the site.
// Run with: node scripts/generate-resume-pdf.cjs
const fs = require("fs");
const path = require("path");
const PDFDocument = require("pdfkit");

const { pathToFileURL } = require("url");

async function main() {
const { profile, experience, projects, skills, education } = await import(
  pathToFileURL(path.join(__dirname, "..", "src", "data", "resumeData.js")).href
);
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

heading("Technical Projects Portfolio");
projects.forEach((group) => {
  doc.font("Helvetica-Bold").fontSize(9.8).fillColor(TEXT).text(`${group.category}: `, { continued: true });
  doc.font("Helvetica").fontSize(9.8).fillColor(DIM).text(group.items.map((i) => i.name).join(", "));
  doc.moveDown(0.25);
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
}

main();
