import React from "react";
import styles from "@/styles/Home.module.css";

const links = [
  { id: 1, title: "Projects", href: "projects" },
  { id: 2, title: "Blog", href: "blog" },
  { id: 3, title: "Get in touch", href: "contact" },
];

export default function Dot() {
  return (
    <nav className={styles.dot}>
      <ul className={styles.dot__ul}>
        {links.map(({ title }, index) => (
          <li key={index} className={styles.dot__li}>
            <a href="#" className={styles.dot__link}>
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
