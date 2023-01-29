import React from "react";
import styles from "@/styles/Home.module.css";
import ScrollspyNav from "@/components/scrollspyNav";

const links = [
  { id: 1, title: "Projects", href: "projects" },
  { id: 2, title: "Blog", href: "blog" },
  // { id: 3, title: "What's up?", href: "sup" },
  { id: 4, title: "Resume", href: "cv" },
];

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ScrollspyNav
        scrollTargetIds={["projects", "blog"]}
        offset={-100}
        activeNavClass="is-active"
        scrollDuration="500"
        headerBackground={true}
      >
        <ul className={styles.nav__ul}>
          {links.map(({ id, title, href }) => (
            <li key={id} className={styles.nav__li}>
              <a href={`#${href}`} className={styles.nav__link}>
                <span className={styles.nav__index}>0{id}</span>
                <span data-line className={styles.nav__line}></span>
                <span className={styles.nav__title}>{title}</span>
              </a>
            </li>
          ))}
        </ul>
      </ScrollspyNav>
    </nav>
  );
}
