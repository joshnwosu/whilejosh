import React from "react";
import styles from "@/styles/Home.module.css";
import Me from "./me";
import Nav from "./nav";
import { IoLogoTwitter, IoLogoGithub, IoIosRedo } from "react-icons/io";

const DATA = [
  {
    title: "Twitter",
    href: "",
    icon: <IoLogoTwitter size={20} />,
  },
  {
    title: "Github",
    href: "",
    icon: <IoLogoGithub size={20} />,
  },
];

export default function About() {
  return (
    <div className="">
      <div>
        <Me />
        <Nav />
      </div>

      <div className={styles.footer}>
        <div className={styles.profile_pic}></div>
        <ul className={styles.socials}>
          {DATA.map(({ title, icon, href }, index) => (
            <li key={index} className={styles.socials_li}>
              <a href={href} className={styles.socials_link}>
                {icon}
                <span className={styles.socials_title}>{title}</span>
                <IoIosRedo />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
