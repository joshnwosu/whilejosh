import React from "react";
import styles from "@/styles/Home.module.css";
import { IoLogoNpm, IoIosLink } from "react-icons/io";

const DATA = [
  {
    title: "react-brick-view",
    description:
      "A lightweight, performant, and responsive masonry layout component",
    lang: "typescript",
    icon: <IoLogoNpm />,
    href: "https://www.npmjs.com/package/react-brick-view",
  },
  {
    title: "react-shadow-component",
    description:
      "A versatile package that simplifies the process of adding professional-grade shadow styles to your React components without the need to write complex CSS code",
    lang: "typescript",
    icon: <IoLogoNpm />,
    href: "https://www.npmjs.com/package/react-shadow-component",
  },
  {
    title: "react-native-brick-view",
    description:
      "A versatile package that simplifies the process of adding professional-grade shadow styles to your React components without the need to write complex CSS code",
    lang: "react native",
    icon: <IoLogoNpm />,
    href: "https://www.npmjs.com/package/react-shadow-component",
  },
  {
    title: "react-scrollspy",
    description:
      "A versatile package that simplifies the process of adding professional-grade shadow styles to your React components without the need to write complex CSS code",
    lang: "typescript",
    icon: <IoLogoNpm />,
    href: "https://www.npmjs.com/package/react-shadow-component",
  },
];

export default function Projects() {
  return (
    <div className={styles.project}>
      {DATA.map(({ title, href, description, icon, lang }, index) => (
        <a
          href={href}
          target="_blank"
          key={index}
          className={styles.project_card}
        >
          {/* <div> */}
          <IoLogoNpm size={30} color="#949495" />
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
