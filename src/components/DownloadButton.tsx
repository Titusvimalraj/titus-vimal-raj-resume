import React from "react";
import { motion } from "framer-motion";
import { resume } from "../data/resume";
import * as styles from "./DownloadButton.module.css";

type Props = {
  className?: string;
  variant?: "primary" | "ghost";
};

export function DownloadButton({ className = "", variant = "primary" }: Props) {
  return (
    <motion.a
      className={`${styles.btn} ${variant === "ghost" ? styles.ghost : styles.primary} ${className}`}
      href={resume.pdfPath}
      download="Titus_Vimal_Raj_Resume.pdf"
      whileHover={{ y: -2, boxShadow: "0 0 28px rgba(45, 212, 191, 0.35)" }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 24 }}
    >
      <span className={styles.icon} aria-hidden="true">
        ↓
      </span>
      Download Resume
    </motion.a>
  );
}
