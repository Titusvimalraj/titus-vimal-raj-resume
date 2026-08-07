import React from "react";
import { resume } from "../data/resume";
import { Reveal } from "./Reveal";
import { DownloadButton } from "./DownloadButton";
import * as styles from "./Contact.module.css";

export function Contact() {
  const { contact } = resume;

  return (
    <section id="contact" className={`section ${styles.section}`}>
      <div className="container">
        <Reveal>
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let’s build something that ships</h2>
          <p className="section-lead">
            Open to conversations about AI platforms, full-stack architecture, and high-impact delivery.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className={styles.row}>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={`tel:${contact.phone.replace(/-/g, "")}`}>{contact.phone}</a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={contact.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <span>{contact.location}</span>
          </div>
          <div className={styles.cta}>
            <DownloadButton />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
