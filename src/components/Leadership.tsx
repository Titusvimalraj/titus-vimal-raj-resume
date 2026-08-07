import React from "react";
import { resume } from "../data/resume";
import { Reveal } from "./Reveal";
import * as styles from "./Leadership.module.css";

export function Leadership() {
  return (
    <section id="leadership" className="section">
      <div className="container">
        <Reveal>
          <p className="section-label">Beyond delivery</p>
          <h2 className="section-title">Leadership & recognition</h2>
          <p className="section-lead">
            Community leadership, office-wide events, and awards for high-velocity delivery.
          </p>
        </Reveal>
        <div className={styles.layout}>
          <Reveal>
            <ul className={styles.leadership}>
              {resume.leadership.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <ul className={styles.awards}>
              {resume.awards.map((award) => (
                <li key={`${award.title}-${award.year}`}>
                  <div className={styles.awardHead}>
                    <strong>{award.title}</strong>
                    <span>{award.year}</span>
                  </div>
                  <p>{award.detail}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <div className={styles.edu}>
            <h3>Education</h3>
            {resume.education.map((ed) => (
              <p key={ed.school}>
                <strong>{ed.school}</strong>
                <br />
                {ed.degree} · {ed.period}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
