import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { resume } from "../data/resume";
import { DownloadButton } from "./DownloadButton";
import * as styles from "./Nav.module.css";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#leadership", label: "Leadership" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`container ${styles.inner}`}>
        <a className={styles.brand} href="#top">
          {resume.name.split(" ").map((part) => part[0]).join("")}
          <span className={styles.brandFull}>{resume.name}</span>
        </a>
        <nav className={styles.nav} aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className={styles.cta}>
          <DownloadButton variant="ghost" />
        </div>
      </div>
    </motion.header>
  );
}
