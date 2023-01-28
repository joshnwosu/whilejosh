import React from "react";
import styles from "@/styles/Home.module.css";

export default function Me() {
  return (
    <div>
      <div>
        <h1 className={styles.name}>Joshua Nwosu</h1>
        <h2 className={styles.title}>Software Engineer</h2>
      </div>
      <div>
        <p className={[styles.desc, styles.mt_32].join(" ")}>
          Hi, I'm Joshua Nwosu a software engineer (and sometimes UI/UX
          designer). I build open-source front-end{" "}
          <a href="#" target="_blank">
            libraries
          </a>{" "}
          and also contribute to open-source projects with over 3+ years of
          experience.
        </p>
        <p className={[styles.desc, styles.mt_8].join(" ")}>
          On my spare time, I share what I learn on my blog and speak at tech
          conferences around the world.
        </p>
      </div>
    </div>
  );
}
