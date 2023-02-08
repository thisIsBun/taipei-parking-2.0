import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../ThemeProvider/ThemeProvider";


const ThemeButton = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>切換深夜模式</button>;
};

export default function Switch() {
  return <ThemeButton />;
}