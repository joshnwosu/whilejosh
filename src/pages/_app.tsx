import "@/styles/globals.css";
import type { AppProps } from "next/app";
import themeContext from "@/components/themeContext";
import React from "react";
import { themeConfig } from "@/config/theme";

export default function App({ Component, pageProps }: AppProps) {
  const [themeMode, setThemeMode] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  const { light, dark } = themeConfig;

  return (
    <themeContext.Provider
      value={{
        themeProps: themeMode ? light : dark,
        toggleTheme: (v) => setThemeMode(v),
        toggleResume: (v) => setVisible(v),
        setToggleResume: visible,
      }}
    >
      <Component {...pageProps} />
    </themeContext.Provider>
  );
}
