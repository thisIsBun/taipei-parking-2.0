import { useState, createContext } from "react";
import PropTypes from "prop-types";
import { gtag } from "../constants/utils";

const themes = {
  light: {
    background_main: "#fff",
    background_secondary: "#E7E9EB",
    background_active: "#04AA6D",
    background_hover: "#cccccc",
    background_error: "#ffc0c7",
    background_searchbox: "#fff",
    font_main: "#282a35",
    font_active: "#ffffff",
    font_secondary_blk: "#282D35",
    font_card_main: "#282a35",
    font_card_secondary: "#115E5E",
    border_main: "#D6D6D6",
    button_hover: "#059862",
    mapStyle: {
      styles: [
        {
          featureType: "administrative",
          elementType: "geometry",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "poi",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "transit",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
      ],
    },
  },
  dark: {
    background_main: "#1d2a35",
    background_secondary: "#38444d",
    background_active: "#04AA6D",
    background_hover: "#38444d",
    background_error: "#ffc0c7",
    background_searchbox: "#38444d",
    font_main: "#ddd",
    font_active: "#ffffff",
    font_secondary_blk: "#282D35",
    font_card_main: "#75A598",
    font_card_secondary: "#ddd",
    border_main: "#3C5350",
    button_hover: "#03744b",
    mapStyle: {
      styles: [
        {
          elementType: "geometry",
          stylers: [
            {
              color: "#242f3e",
            },
          ],
        },
        {
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#746855",
            },
          ],
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#242f3e",
            },
          ],
        },
        {
          featureType: "administrative",
          elementType: "geometry",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#d59563",
            },
          ],
        },
        {
          featureType: "poi",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#d59563",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [
            {
              color: "#263c3f",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#6b9a76",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [
            {
              color: "#38414e",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#212a37",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9ca5b3",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [
            {
              color: "#746855",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#1f2835",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#f3d19c",
            },
          ],
        },
        {
          featureType: "transit",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [
            {
              color: "#2f3948",
            },
          ],
        },
        {
          featureType: "transit.station",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#d59563",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#17263c",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#515c6d",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#17263c",
            },
          ],
        },
      ],
    },
  },
};

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(true);
  const toggleTheme = () => {
    setDark(!dark);
    gtag("event", "switch_theme", {
      content_type: "switchTheme",
    });
  };
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
