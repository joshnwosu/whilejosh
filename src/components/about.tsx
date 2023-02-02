import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Nav from "./nav";
import {
  IoLogoTwitter,
  IoLogoGithub,
  IoIosRedo,
  IoIosCode,
  IoIosMoon,
  IoIosSunny,
} from "react-icons/io";
import themeContext from "@/components/themeContext";
import { data } from "portfolio.config";

const About: React.FC = () => {
  const theme = React.useContext(themeContext);
  const [mode, setMode] = React.useState(false);

  const handleToggle = () => {
    setMode(!mode);
    theme.toggleTheme(!mode);
  };

  return (
    <div className={styles.about}>
      <div>
        <div>
          <div>
            <h1 className={styles.name}>
              {data.author}{" "}
              <span className={styles.theme_icon} onClick={handleToggle}>
                {mode ? (
                  <IoIosMoon size={20} color={theme.themeProps["textColor"]} />
                ) : (
                  <IoIosSunny size={20} color={theme.themeProps["textColor"]} />
                )}
              </span>
            </h1>
            <h2 className={styles.title}>
              <IoIosCode
                size={16}
                style={{ marginRight: 5, color: "var(--text-color-light)" }}
              />
              <span>Software Engineer</span>
            </h2>
          </div>
          <div>
            <p className={[styles.desc, styles.mt_32].join(" ")}>
              Hi, I am {data.author}, a {data.title} with over 5+ years of
              experience in the tech industry. My expertise lies in creating
              efficient and user-friendly software solutions. I am driven by my
              passion for programming and constantly seeking new challenges to
              improve my skills.
            </p>
            <p className={[styles.desc, styles.mt_8].join(" ")}>
              I am also an active member of the open-source community,{" "}
              <a
                href="https://github.com/joshnwosu"
                target="_blank"
                rel="noreferrer"
              >
                building libraries
              </a>{" "}
              and contributing to projects. I believe in sharing my knowledge
              and helping others to grow in the field of technology. I am always
              striving to create top-notch software that makes a positive
              impact.
            </p>
          </div>
        </div>
        <Nav />
      </div>

      <div className={styles.footer}>
        <div className={styles.profile_pic}>
          <Image src={data.avatar} alt="My Image" width={40} height={40} />;
        </div>
        <ul className={styles.socials}>
          {data.socials.map(({ title, icon, href }, index) => (
            <li key={index} className={styles.socials_li}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className={styles.socials_link}
              >
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
};

export default About;
