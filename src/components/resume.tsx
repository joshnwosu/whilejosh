import React from "react";
import styles from "@/styles/Home.module.css";
import { IoIosClose } from "react-icons/io";
import themeContext from "./themeContext";

// import { Document, Page } from "react-pdf";

export default function Resume() {
  const theme = React.useContext(themeContext);

  //drive.google.com/file/d/1HylNDppAju6kj5Xhs4zZb9yk4hLSnuN1/view?usp=share_link

  https: return (
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
