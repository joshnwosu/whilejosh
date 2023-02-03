import Head from "next/head";
import styles from "@/styles/Home.module.css";
import About from "@/components/about";
import Projects from "@/components/projects";
import Blog from "@/components/blog";
import React from "react";
import themeContext from "@/components/themeContext";
import Resume from "@/components/resume";
import MadeWithLove from "@/components/madeWithLov";
import { data } from "portfolio.config";

export default function Home() {
  const theme = React.useContext(themeContext);
  return (
    <>
      <Head>
        <title>{data.author}</title>
        <meta name="description" content={`Made with 🥤 by ${data.author}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <style jsx global>{`
        :root {
          --bg: ${theme.themeProps["bg"]};
          --card: ${theme.themeProps["card"]};
          --text-color: ${theme.themeProps["textColor"]};
          --text-color-light: ${theme.themeProps["textColorLight"]};
          --title: ${theme.themeProps["title"]};
          --blur0: ${theme.themeProps["blur0"]};
          --blur1: ${theme.themeProps["blur1"]};
          --bgResume: ${theme.themeProps["bgResume"]};
          --button: ${theme.themeProps["button"]};
        }
      `}</style>

      <div className={styles.flex}>
        <div className={styles.sticky}>
          <About />
        </div>
        <div className={styles.scrollable}>
          <Projects />
          <Blog />
          <MadeWithLove />
        </div>
        <div className={[styles.blur, styles.blur0].join(" ")}></div>
        <div className={[styles.blur, styles.blur1].join(" ")}></div>
        <Resume />
      </div>
    </>
  );
}
