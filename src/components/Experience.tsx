import React from "react";
import { resume } from "../data/resume";
import { Reveal } from "./Reveal";
import * as styles from "./Experience.module.css";

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal>
          <p className="section-label">Career</p>
          <h2 className="section-title">Experience</h2>
          <p className="section-lead">
            Nearly 8 years delivering full-stack platforms and AI systems across consulting and product teams.
          </p>
        </Reveal>
        <ol className={styles.list}>
          {resume.experience.map((job, index) => (
            <Reveal key={job.company} as="li" className={styles.item} delay={index * 0.05}>
              <div className={styles.meta}>
                <h3 className={styles.title}>{job.title}</h3>
                <p className={styles.company}>{job.company}</p>
                <p className={styles.period}>{job.period}</p>
                <ul className={styles.stack} aria-label={`Technologies at ${job.company}`}>
                  {job.stack.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
              <ul className={styles.bullets}>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
