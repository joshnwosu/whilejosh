import React from "react";
import styles from "@/styles/Home.module.css";
import { IoLogoNpm } from "react-icons/io";
import { BrickView } from "react-brick-view";

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

export default function Blog() {
  return (
    <div className={styles.blog}>
      <BrickView column={2} gutter={10}>
        {DATA.map(({ title, href, description, icon, lang }, index) => (
          <a
            href={href}
            target="_blank"
            key={index}
            className={styles.project_card}
          >
            <IoLogoNpm size={30} color="#949495" />
            <p className={styles.project_lang}>{lang}</p>
            <h1 className={styles.project_title}>{title}</h1>
            <p className={styles.project_description}>{description}</p>
          </a>
        ))}
      </BrickView>
    </div>
  );
}
