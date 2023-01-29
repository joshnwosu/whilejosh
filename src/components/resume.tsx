import React from "react";
import styles from "@/styles/Home.module.css";
import { IoIosClose } from "react-icons/io";
import themeContext from "./themeContext";

export default function Resume() {
  const theme = React.useContext(themeContext);

  return (
    <div
      className={[
        styles.resume,
        theme.setToggleResume && styles.resume__active,
      ].join(" ")}
    >
      <div
        className={styles.resume__close}
        onClick={() => {
          theme.toggleResume(false);
        }}
      >
        <IoIosClose size={30} color={theme.themeProps.textColor} />
      </div>
    </div>
  );
}
