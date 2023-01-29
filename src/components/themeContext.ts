import React from "react";

interface ThemeContextProps {
  themeProps: {
    bg: string;
    card: string;
    textColor: string;
    textColorLight: string;
    title: string;
    blur0: string;
    blur1: string;
  };
  toggleTheme: (v: boolean) => void;
  toggleResume: (v: boolean) => void;
  setToggleResume: boolean;
}

const themeContext = React.createContext<ThemeContextProps>(
  {} as ThemeContextProps
);

export default themeContext;
