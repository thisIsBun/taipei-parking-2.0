import { useState, createContext } from "react";
import PropTypes from "prop-types";

const themes = {
  light: {
    background_main: "#fff",
    background_secondary: "#E7E9EB",
    background_active: "#04AA6D",
    background_hover: "#cccccc",
    background_error: "#ffc0c7",
    font_main: "#282a35",
    font_active: "#ffffff",
    font_secondary_blk: "#282D35",
    border_main: "#D6D6D6",
    button_hover: "#059862",
  },
  dark: {
    background_main: "#1d2a35",
    background_secondary: "#38444d",
    background_active: "#04AA6D",
    background_hover: "#38444d",
    background_error: "#ffc0c7",
    font_main: "#ddd",
    font_secondary_blk: "#282D35",
    font_active: "#ffffff",
    border_main: "#3C5350",
    button_hover: "#03744b",
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