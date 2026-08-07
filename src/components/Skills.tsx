import React from "react";
import { resume } from "../data/resume";
import { Reveal } from "./Reveal";
import * as styles from "./Skills.module.css";

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal>
          <p className="section-label">Capabilities</p>
          <h2 className="section-title">Skills</h2>
          <p className="section-lead">
            Stack spanning AI agents, modern backends, frontend platforms, and cloud delivery.
          </p>
        </Reveal>
        <div className={styles.grid}>
          {Object.entries(resume.skills).map(([group, items], index) => (
            <Reveal key={group} delay={index * 0.06}>
              <div className={styles.group}>
                <h3 className={styles.groupTitle}>{group}</h3>
                <ul className={styles.tags}>
                  {items.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.15}>
          <div className={styles.certs}>
            <h3 className={styles.certsTitle}>Certifications</h3>
            <ul className={styles.certList}>
              {resume.certifications.map((cert) => (
                <li key={cert.name}>
                  <strong>{cert.name}</strong>
                  <span>
                    {cert.issuer} · {cert.date}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
