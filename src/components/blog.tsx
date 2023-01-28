import React from "react";
import styles from "@/styles/Home.module.css";
import { IoIosLink, IoLogoNpm } from "react-icons/io";
import { BrickView } from "react-brick-view";

const DATA = [
  {
    title: "How to create a tooltip with JavaScript",
    description:
      "A lightweight, performant, and responsive masonry layout component",
    date: "July 12, 2022",
    icon: <IoLogoNpm />,
    href: "https://www.npmjs.com/package/react-brick-view",
  },
  {
    title: "Understanding useContext in react",
    description:
      "A versatile package that simplifies the process of adding professional-grade shadow styles to your React components without the need to write complex CSS code",
    date: "October 8, 2022",
    icon: <IoLogoNpm />,
    href: "https://www.npmjs.com/package/react-shadow-component",
  },
  {
    title: "Become a better programmer with this 10 steps",
    description:
      "A versatile package that simplifies the process of adding professional-grade shadow styles to your React components without the need to write complex CSS code",
    date: "Novembar 19, 2022",
    icon: <IoLogoNpm />,
    href: "https://www.npmjs.com/package/react-shadow-component",
  },
  {
    title: "Write an efficient code",
    description:
      "A versatile package that simplifies the process of adding professional-grade shadow styles to your React components without the need to write complex CSS code",
    date: "January 1, 2022",
    icon: <IoLogoNpm />,
    href: "https://www.npmjs.com/package/react-shadow-component",
  },
];

export default function Blog() {
  return (
    <div className={styles.blog}>
      <BrickView column={2} gutter={10}>
        {DATA.map(({ title, href, description, icon, date }, index) => (
          <a
            href={href}
            target="_blank"
            key={index}
            className={styles.project_card}
          >
            {/* <IoLogoNpm size={30} color="#949495" /> */}
            <p className={styles.project_lang}>{date}</p>
            <h1 className={styles.project_title}>{title}</h1>
            <p className={styles.project_description}>{description}</p>
            <span className={styles.project_icon}>
              <IoIosLink size={30} />
            </span>
          </a>
        ))}
      </BrickView>
    </div>
  );
}
