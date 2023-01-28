import React from "react";
import styles from "@/styles/Home.module.css";
// import ScrollspyNav from "react-scrollspy-nav";

const links = [
  { id: 1, title: "Projects", href: "projects" },
  { id: 2, title: "Blog", href: "blog" },
  { id: 3, title: "What's up", href: "sup" },
];

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_ul}>
        {links.map(({ id, title, href }) => (
          <li key={id} className={styles.nav_li}>
            <a href={`#${href}`} className={styles.nav_link}>
              <span className={styles.nav_index}>0{id}</span>
              <span className={styles.nav_line}></span>
              <span className={styles.nav_title}>{title}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
