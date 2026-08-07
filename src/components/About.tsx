import React from "react";
import { resume } from "../data/resume";
import { Reveal } from "./Reveal";
import * as styles from "./About.module.css";

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <p className="section-label">About</p>
          <h2 className="section-title">Profile</h2>
          <p className={`section-lead ${styles.summary}`}>{resume.summary}</p>
        </Reveal>
      </div>
    </section>
  );
}
