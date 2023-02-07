import React, { useState } from "react";

const themes = {
  light: {
    color: "#FF7E79",
  },
  dark: {
    color: "#385723",
  },
};

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(true);

  const toggleTheme = () => setDark(!dark);
  const theme = dark ? themes.dark : themes.light;

  const defaultValue = {
    toggleTheme: toggleTheme,
    theme: theme
  };

  return (
    <ThemeContext.Provider value={defaultValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;