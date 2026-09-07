import React from "react";
import { Nav } from "./Nav";
import * as styles from "./Layout.module.css";

type Props = {
  children: React.ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <div className={styles.shell}>
      <a className={styles.skipLink} href="#main-content">
        Skip to main content
      </a>
      <Nav />
      <main id="main-content">{children}</main>
      <footer className={styles.footer}>
        <div className="container">
          <p>© {new Date().getFullYear()} Titus Vimal Raj · Built with Gatsby</p>
        </div>
      </footer>
    </div>
  );
}
