import React from "react";
import styles from "@/styles/Home.module.css";
import {
  IoLogoNpm,
  IoIosLink,
  IoLogoGameControllerB,
  IoIosMusicalNote,
  IoIosApps,
  IoIosFingerPrint,
} from "react-icons/io";

const DATA = [
  {
    title: "react-brick-view",
    description:
      "A lightweight, performant, and responsive masonry layout component",
    lang: "Library",
    icon: <IoLogoNpm size={30} color="#949495" />,
    href: "https://www.npmjs.com/package/react-brick-view",
  },
  {
    title: "react-shadow-component",
    description:
      "A versatile package that simplifies the process of adding professional-grade shadow styles to your React components without the need to write complex CSS code",
    lang: "Library",
    icon: <IoLogoNpm size={30} color="#949495" />,
    href: "https://www.npmjs.com/package/react-shadow-component",
  },
  {
    title: "Mindiv",
    description:
      "A quiz game where players answer questions on various subjects to test their knowledge.",
    lang: "Quiz game",
    icon: <IoLogoGameControllerB size={30} color="#949495" />,
    href: "https://www.npmjs.com/package/react-shadow-component",
  },
  {
    title: "react-monitoring",
    description:
      "A React component for smooth scrolling with scroll-spying. Makes it easier to keep track of where you are while scrolling smoothly.",
    lang: "Library",
    icon: <IoLogoNpm size={30} color="#949495" />,
    href: "https://www.npmjs.com/package/react-shadow-component",
  },
  {
    title: "Zeeko",
    description:
      "A desktop music player application that allows users to play and manage their music library on their computer. It features a user-friendly interface, support for multiple audio formats, equalizer, playlists, and other customization options.",
    lang: "Desktop application",
    icon: <IoIosFingerPrint size={30} color="#949495" />,
    href: "https://github.com/joshnwosu/Zeeko",
  },
];

export default function Projects() {
  return (
    <div id="projects" className={styles.project}>
      <h2 className={styles.lamp}>Projects</h2>
      {DATA.map(({ title, href, description, icon, lang }, index) => (
        <a
          href={href}
          target="_blank"
          key={index}
          className={styles.project_card}
          rel="noreferrer"
        >
          {/* <div> */}
          {icon}
          <p className={styles.project_lang}>{lang}</p>
          {/* </div> */}
          <h1 className={styles.project_title}>{title}</h1>
          <p className={styles.project_description}>{description}</p>
          <span className={styles.project_icon}>
            <IoIosLink size={30} />
          </span>
        </a>
      ))}
    </div>
  );
}
