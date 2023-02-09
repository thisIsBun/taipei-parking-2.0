import { useState, createContext } from "react";

const themes = {
  light: {
    background_main: "#ffffff",
    font_main: "#404756",
    background_active: "#e4f4fc",
    font_active: "#087ea4",
    background_hover: "#f6f7f9",
    border_main: "#EBECF0",
  },
  dark: {
    background_main: "#23272f",
    font_main: "#ebecf0",
    background_active: "#58afdf1a",
    font_active: "#149eca",
    background_hover: "#343a46",
    border_main: "#483A46",
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