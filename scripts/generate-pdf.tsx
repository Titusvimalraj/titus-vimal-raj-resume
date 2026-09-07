import React from "react";
import { Document, Page, Text, View, Link, StyleSheet, renderToFile } from "@react-pdf/renderer";
import { mkdirSync, copyFileSync } from "fs";
import path from "path";
import { resume } from "../src/data/resume";

const colors = {
  ink: "#0f172a",
  slate: "#334155",
  muted: "#64748b",
  accent: "#0f766e",
  accentBright: "#14b8a6",
  headerBg: "#0b1220",
  white: "#ffffff",
  softLine: "#e2e8f0",
};

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 9.1,
    color: colors.ink,
    backgroundColor: colors.white,
    paddingBottom: 32,
  },
  header: {
    backgroundColor: colors.headerBg,
    paddingTop: 20,
    paddingBottom: 16,
    paddingHorizontal: 34,
  },
  accentBar: {
    height: 4,
    backgroundColor: colors.accentBright,
  },
  name: {
    fontFamily: "Helvetica-Bold",
    fontSize: 22,
    color: colors.white,
    letterSpacing: 0.4,
    marginBottom: 6,
  },
  headline: {
    fontSize: 9.5,
    color: "#5eead4",
    marginBottom: 12,
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  contactItem: {
    fontSize: 8.2,
    color: "#94a3b8",
    marginRight: 8,
  },
  contactLink: {
    fontSize: 8.2,
    color: "#99f6e4",
    textDecoration: "none",
    marginRight: 8,
  },
  body: {
    paddingHorizontal: 34,
    paddingTop: 12,
  },
  section: {
    marginBottom: 9,
  },
  sectionTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
    color: colors.accent,
    letterSpacing: 1.1,
    textTransform: "uppercase",
    marginBottom: 6,
    paddingBottom: 3,
    borderBottomWidth: 1.25,
    borderBottomColor: colors.accentBright,
  },
  summary: {
    fontSize: 9.1,
    lineHeight: 1.45,
    color: colors.slate,
  },
  job: {
    marginBottom: 6,
  },
  jobHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 1,
  },
  jobTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9.6,
    color: colors.ink,
    maxWidth: "74%",
  },
  jobPeriod: {
    fontSize: 8.2,
    color: colors.muted,
  },
  company: {
    fontSize: 8.8,
    color: colors.accent,
    marginBottom: 2,
  },
  stack: {
    fontSize: 6.8,
    lineHeight: 1.28,
    color: colors.muted,
    marginBottom: 3,
  },
  bullet: {
    flexDirection: "row",
    marginBottom: 1.6,
  },
  bulletDot: {
    width: 9,
    fontSize: 8.5,
    color: colors.accentBright,
  },
  bulletText: {
    flex: 1,
    fontSize: 8.5,
    lineHeight: 1.35,
    color: colors.slate,
  },
  project: {
    marginBottom: 5,
  },
  projectTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9.2,
    marginBottom: 1.5,
  },
  projectDesc: {
    fontSize: 8.4,
    lineHeight: 1.35,
    color: colors.slate,
  },
  skillsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skillGroup: {
    width: "50%",
    marginBottom: 4,
    paddingRight: 8,
  },
  skillLabel: {
    fontFamily: "Helvetica-Bold",
    fontSize: 8.3,
    color: colors.ink,
    marginBottom: 1.5,
  },
  skillItems: {
    fontSize: 8,
    color: colors.slate,
    lineHeight: 1.35,
  },
  twoCol: {
    flexDirection: "row",
  },
  col: {
    flex: 1,
    paddingRight: 10,
  },
  awardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2.5,
  },
  awardTitle: {
    fontSize: 8.3,
    color: colors.ink,
    maxWidth: "78%",
  },
  awardYear: {
    fontSize: 8,
    color: colors.accent,
    fontFamily: "Helvetica-Bold",
  },
  certRow: {
    marginBottom: 3,
  },
  certName: {
    fontSize: 8.4,
    fontFamily: "Helvetica-Bold",
  },
  certMeta: {
    fontSize: 7.8,
    color: colors.muted,
  },
  eduText: {
    fontSize: 8.3,
    color: colors.slate,
    lineHeight: 1.35,
  },
  leadItem: {
    flexDirection: "row",
    marginBottom: 2.5,
  },
});

function ResumeDocument() {
  const { contact } = resume;

  return (
    <Document title={`${resume.name} Resume`} author={resume.name} subject={resume.headline}>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{resume.name}</Text>
          <Text style={styles.headline}>{resume.headline}</Text>
          <View style={styles.contactRow}>
            <Link src={`mailto:${contact.email}`} style={styles.contactLink}>
              {contact.email}
            </Link>
            <Text style={styles.contactItem}>{contact.phone}</Text>
            <Text style={styles.contactItem}>{contact.location}</Text>
            <Link src={contact.linkedin} style={styles.contactLink}>
              LinkedIn
            </Link>
            <Link src={contact.github} style={styles.contactLink}>
              GitHub
            </Link>
          </View>
        </View>
        <View style={styles.accentBar} />

        <View style={styles.body}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Summary</Text>
            <Text style={styles.summary}>{resume.summary}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>
            {resume.experience.map((job) => (
              <View key={job.company} style={styles.job}>
                <View style={styles.jobHeader}>
                  <Text style={styles.jobTitle}>{job.title}</Text>
                  <Text style={styles.jobPeriod}>{job.period}</Text>
                </View>
                <Text style={styles.company}>{job.company}</Text>
                <Text style={styles.stack}>{job.stack.join(" · ")}</Text>
                {job.bullets.map((bullet) => (
                  <View key={bullet} style={styles.bullet}>
                    <Text style={styles.bulletDot}>•</Text>
                    <Text style={styles.bulletText}>{bullet}</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Selected Work</Text>
            {resume.projects.map((project) => (
              <View key={project.title} style={styles.project}>
                <Text style={styles.projectTitle}>{project.title}</Text>
                <Text style={styles.projectDesc}>{project.description}</Text>
              </View>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={styles.skillsGrid}>
              {Object.entries(resume.skills).map(([group, items]) => (
                <View key={group} style={styles.skillGroup}>
                  <Text style={styles.skillLabel}>{group}</Text>
                  <Text style={styles.skillItems}>{items.join(" · ")}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={[styles.section, styles.twoCol]}>
            <View style={styles.col}>
              <Text style={styles.sectionTitle}>Leadership</Text>
              {resume.leadership.map((item) => (
                <View key={item} style={styles.leadItem}>
                  <Text style={styles.bulletDot}>•</Text>
                  <Text style={styles.bulletText}>{item}</Text>
                </View>
              ))}
            </View>
            <View style={styles.col}>
              <Text style={styles.sectionTitle}>Awards</Text>
              {resume.awards.map((award) => (
                <View key={`${award.title}-${award.year}`} style={styles.awardRow}>
                  <Text style={styles.awardTitle}>{award.title}</Text>
                  <Text style={styles.awardYear}>{award.year}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={[styles.section, styles.twoCol]}>
            <View style={styles.col}>
              <Text style={styles.sectionTitle}>Certifications</Text>
              {resume.certifications.map((cert) => (
                <View key={cert.name} style={styles.certRow}>
                  <Text style={styles.certName}>{cert.name}</Text>
                  <Text style={styles.certMeta}>
                    {cert.issuer} · {cert.date}
                  </Text>
                </View>
              ))}
            </View>
            <View style={styles.col}>
              <Text style={styles.sectionTitle}>Education</Text>
              {resume.education.map((ed) => (
                <View key={ed.school}>
                  <Text style={[styles.eduText, { fontFamily: "Helvetica-Bold", color: colors.ink }]}>
                    {ed.school}
                  </Text>
                  <Text style={styles.eduText}>{ed.degree}</Text>
                  <Text style={styles.eduText}>{ed.period}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

async function main() {
  const staticDir = path.join(process.cwd(), "static");
  mkdirSync(staticDir, { recursive: true });
  const outPrimary = path.join(staticDir, "resume.pdf");
  const outNamed = path.join(staticDir, "Titus_Vimal_Raj_Resume.pdf");

  await renderToFile(<ResumeDocument />, outPrimary);
  copyFileSync(outPrimary, outNamed);
  console.log(`Wrote ${outPrimary}`);
  console.log(`Wrote ${outNamed}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
