import { useState, createContext } from "react";

const themes = {
  // light: {
  //   background_main: "#ffffff",
  //   font_main: "#404756",
  //   background_active: "#e4f4fc",
  //   font_active: "#087ea4",
  //   background_hover: "#f6f7f9",
  //   border_main: "#EBECF0",
  // },
  // dark: {
  //   background_main: "#23272f",
  //   font_main: "#ebecf0",
  //   background_active: "#58afdf1a",
  //   font_active: "#149eca",
  //   background_hover: "#343a46",
  //   border_main: "#483A46",
  // },
  light: {
    background_main: "#fff",
    font_main: "#000",
    background_active: "#04AA6D",
    font_active: "#ffffff",
    background_hover: "#cccccc",
    border_main: "#D6D6D6",
  },
  dark: {
    background_main: "#1d2a35",
    font_main: "#ddd",
    background_active: "#04AA6D",
    font_active: "#ffffff",
    background_hover: "#38444d",
    border_main: "#38444d",
  },
};

export const ThemeContext = createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);
  const toggleTheme = () => setDark(!dark);
  const theme = dark ? themes.dark : themes.light;
  const defaultValue = {
    dark,
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={defaultValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;