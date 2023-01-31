import React from "react";
import styles from "@/styles/Home.module.css";
import { IoIosClose } from "react-icons/io";
import themeContext from "./themeContext";

import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true,
  standardFontDataUrl: "standard_fonts/",
};
// https://drive.google.com/file/d/1HylNDppAju6kj5Xhs4zZb9yk4hLSnuN1/view?usp=share_link

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
      <div className={styles.resume__wrapper}>
        <Document
          file={"Joshua_resume.pdf"}
          options={options}
          className={styles.resume__pdf}
          renderMode="canvas"
        >
          <Page pageIndex={0} />
        </Document>
        {/* <iframe src="Joshua_resume.pdf"  /> */}
      </div>
    </div>
  );
}
