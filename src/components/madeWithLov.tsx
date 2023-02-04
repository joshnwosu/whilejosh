import React from "react";
import styles from "@/styles/Home.module.css";
import { data } from "portfolio.config";

const MadeWithLove = () => {
  return (
    <div className={styles.madeWithLove}>
      <p className={styles.madeWithLove_para}>
        Made with 🥤 by{" "}
        <a
          href="https://github.com/0dizt"
          target="_blank"
          rel="noreferrer"
          className={styles.madeWithLove_link}
        >
          Joshua
        </a>{" "}
        &amp;{" "}
        <a
          href="https://github.com/0bizt"
          target="_blank"
          rel="noreferrer"
          className={styles.madeWithLove_link}
        >
          Jerry
        </a>
      </p>
      <p className={styles.madeWithLove_para}>
        Props to Cappuccino &amp; Espresso
      </p>
    </div>
  );
};

export default MadeWithLove;
