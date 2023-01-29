import React from "react";
import styles from "@/styles/Home.module.css";
import {
  IoIosLink,
  IoLogoNpm,
  IoIosRedo,
  IoIosArrowForward,
} from "react-icons/io";
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
      "React's useContext Hook is a way to access data that is shared between components in your React application.",
    date: "October 8, 2022",
    icon: <IoLogoNpm />,
    href: "https://www.npmjs.com/package/react-shadow-component",
  },
  {
    title: "Become a better programmer with this 10 steps",
    description:
      "Becoming a better programmer takes time, effort, and dedication. However, there are several steps you can take to help you along the way.",
    date: "Novembar 19, 2022",
    icon: <IoLogoNpm />,
    href: "https://www.npmjs.com/package/react-shadow-component",
  },
  {
    title: "How to create an publish npm packages (React/React Native)",
    description:
      "Creating and publishing an npm package with React can seem daunting, but it's actually a straightforward process. Here's a step-by-step guide to help you create and publish your first React npm package:",
    date: "January 1, 2022",
    icon: <IoLogoNpm />,
    href: "https://www.npmjs.com/package/react-shadow-component",
  },
];

export default function Blog() {
  return (
    <div id="blog" className={styles.blog}>
      <h2 className={styles.lamp}>Blog</h2>
      {/* <BrickView
        column={1}
        gutter={10}
        breakPoint={{
          700: 1,
        }}
      > */}
      {DATA.map(({ title, href, description, icon, date }, index) => (
        <a
          href={href}
          target="_blank"
          key={index}
          className={styles.project_card}
          rel="noreferrer"
        >
          {/* <IoLogoNpm size={30} color="#949495" /> */}
          <p className={styles.project_lang}>{date}</p>
          <h1 className={styles.project_title}>{title}</h1>
          <p className={styles.project_description}>{description}</p>
          <span className={styles.project_icon}>
            <IoIosLink size={30} />
          </span>
          <div className={styles.project_continueReading}>
            <p className={styles.project_continueReading_para}>...See more</p>
            <IoIosArrowForward />
          </div>
        </a>
      ))}
      {/* </BrickView> */}
    </div>
  );
}
