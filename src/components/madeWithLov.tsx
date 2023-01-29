import React from "react";
import styles from "@/styles/Home.module.css";

const MadeWithLove = () => {
  return (
    <div className={styles.madeWithLove}>
      <p className={styles.madeWithLove_para}>
        Made with 🥤 by <a>Joshua Nwosu</a>
      </p>
      <p className={styles.madeWithLove_para}>
        Props to{" "}
        <a
          href="https://github.com/sarahdayan/"
          target="_blank"
          rel="noreferrer"
          className={styles.madeWithLove_link}
        >
          Sarah Dayan
        </a>
      </p>
    </div>
  );
};

export default MadeWithLove;
