import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { resume } from "../data/resume";
import { DownloadButton } from "./DownloadButton";
import * as styles from "./Hero.module.css";

export function Hero() {
  const reduce = useReducedMotion();
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: reduce ? 0 : 0.1 },
    },
  };
  const item = {
    hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="top" className={styles.hero} aria-label="Introduction">
      <div className={`container ${styles.grid}`}>
        <motion.div className={styles.copy} variants={container} initial="hidden" animate="show">
          <motion.p className={styles.eyebrow} variants={item}>
            Chennai · AWS & Azure Certified
          </motion.p>
          <motion.h1 className={styles.name} variants={item}>
            {resume.name}
          </motion.h1>
          <motion.p className={styles.role} variants={item}>
            {resume.headline}
          </motion.p>
          <motion.p className={styles.tagline} variants={item}>
            {resume.tagline}
          </motion.p>
          <motion.div className={styles.actions} variants={item}>
            <DownloadButton />
            <a className={styles.secondary} href={resume.contact.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a className={styles.secondary} href="#contact">
              Contact
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          className={styles.panel}
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.panelGlow} />
          <div className={styles.panelInner}>
            <span className={styles.statLabel}>Focus</span>
            <p className={styles.statValue}>Multi-Agent GenAI · FastAPI · Full Stack</p>
            <span className={styles.statLabel}>Impact</span>
            <p className={styles.statValue}>Text-to-SQL &lt; 30s · Report service in 3 days</p>
            <span className={styles.statLabel}>Lead</span>
            <p className={styles.statValue}>AI Adoption · Application Community</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
