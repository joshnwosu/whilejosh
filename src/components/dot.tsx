import React from "react";
import styles from "@/styles/Home.module.css";
import ScrollspyNav from "./scrollspyNav";

const links = [
  { id: 1, title: "Projects", href: "projects" },
  { id: 2, title: "Blog", href: "blog" },
  { id: 3, title: "Get in touch", href: "contact" },
];

export default function Dot() {
  return (
    <nav className={styles.dot}>
      <ScrollspyNav
        scrollTargetIds={["projects", "blog"]}
        offset={-100}
        activeNavClass="dot-is-active"
        scrollDuration="500"
        headerBackground={true}
      >
        <ul className={styles.dot__ul}>
          {links.map(({ title, href }, index) => (
            <li key={index} className={styles.dot__li}>
              <a href={`#${href}`} className={styles.dot__link}>
                <span className={styles.dot__line} data-dot-line></span>
                <span className={styles.dot__tooltip}>{title}</span>
              </a>
            </li>
          ))}
        </ul>
      </ScrollspyNav>
    </nav>
  );
}
