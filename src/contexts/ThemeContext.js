import { useState, createContext } from "react";
import PropTypes from "prop-types";

const themes = {
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

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
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

ThemeProvider.propTypes = {
  children: PropTypes.node,
};