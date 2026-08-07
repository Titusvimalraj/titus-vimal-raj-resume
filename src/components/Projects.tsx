import React from "react";
import { resume } from "../data/resume";
import { Reveal } from "./Reveal";
import * as styles from "./Projects.module.css";

export function Projects() {
  return (
    <section id="work" className="section">
      <div className="container">
        <Reveal>
          <p className="section-label">Selected work</p>
          <h2 className="section-title">AI deliveries that moved the needle</h2>
          <p className="section-lead">
            Recent builds spanning multi-agent research, Text-to-SQL, and enterprise reporting.
          </p>
        </Reveal>
        <div className={styles.grid}>
          {resume.projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <article className={styles.item}>
                <span className={styles.index}>0{index + 1}</span>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
