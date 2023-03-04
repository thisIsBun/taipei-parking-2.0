import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { MEDIA_QUERY } from "../../constants/style";

const Label = styled.label`
  width: 68px;
  min-height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 10px;
  cursor: pointer;
  ${MEDIA_QUERY} {
    width: 90px;
    min-height: 34px;
    font-size: 12px;
    font-weight: bold;
  }
`;

const SwitchBG = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid ${(props) => props.$color.border_main};
  position: absolute;
  border-radius: 50px;
`;

const SwitchLight = styled.div`
  width: 100%;
  text-align: center;
  color: ${(props) =>
    props.$dark ? props.$color.font_main : props.$color.font_active};
`;

const SwitchDark = styled.div`
  width: 100%;
  text-align: center;
  color: ${(props) =>
    props.$dark ? props.$color.font_active : props.$color.font_main};
`;

const SwitchCircle = styled.div`
  position: absolute;
  width: calc(50% - 2px);
  top: 2px;
  bottom: 2px;
  right: 2px;
  transition: right 0.25s ease-out;
  background: ${(props) => props.$color.background_active};
  border-radius: 50px;
  z-index: -1;
`;

const Input = styled.input`
  &:checked + ${SwitchCircle} {
    right: 50%;
    transition: right 0.25s ease-out;
  }
`;

export default function Switch() {
  const { dark, theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Label htmlFor="theme-toggle">
      <SwitchBG $color={theme} />
      <Input
        id="theme-toggle"
        hidden
        type="checkbox"
        onClick={toggleTheme}
        $color={theme}
      />
      <SwitchCircle $color={theme} $dark={dark} />
      <SwitchLight $color={theme} $dark={dark}>
        Light
      </SwitchLight>
      <SwitchDark $color={theme} $dark={dark}>
        Dark
      </SwitchDark>
    </Label>
  );
}
