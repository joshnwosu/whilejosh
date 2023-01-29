import React from "react";

interface ThemeContextProps {
  children?: React.ReactNode;
  bg: string;
  card: string;
  textColor: string;
  textColorLight: string;
  title: string;
  blur0: any;
  blur1: any;
}

const themeContext = React.createContext<ThemeContextProps>(
  {} as ThemeContextProps
);

export default themeContext;
