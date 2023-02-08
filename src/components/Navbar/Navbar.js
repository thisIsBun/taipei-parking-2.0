import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import navlogo from "../../assets/logo.png";
import { useState, useContext } from "react";
import Switch from "../Switch";
import { ThemeContext } from "../ThemeProvider/ThemeProvider";

const NavWrapper = styled.header`
  width: 100%;
  height: 10vh;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.22);
  -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.22);
  -moz-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.22);
  position: fixed;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr auto minmax(600px, 3fr) 1fr;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    grid-column: 2/3;
  }
`;

const Name = styled.h1`
  margin-left: 10px;
  font-size: 24px;
  font-weight: normal;
`;

const Nav = styled(Link)`
  font-size: 20px;
  font-weight: normal;
  color: ${(props) => props.$color.font_main};
  text-decoration: none;
  opacity: 0;
  display: flex;
  justify-content: center;
  padding: 30px;
  border-radius: 8px;
  &:hover {
    background: ${(props) => props.$color.background_hover};
  }
  &, &:focus {
    ${(props) =>
      props.$pathActive &&
      `
      background: ${props.$color.background_active};
      color: ${props.$color.font_active};
    `}
  }
  @media screen and (min-width: 768px) {
    padding: 10px 15px;
    margin-right: 10px;
    opacity: 1;
  }
`;

const NavbarList = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  background: ${(props) => props.$color.background_main};
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease-out;
  transform-origin: top;
  transform: scale(1, 0);
  @media screen and (min-width: 768px) {
    all: unset;
    grid-column: 3/4;
    display: flex;
    justify-content: end;
  }
  ${(props) =>
    props.$checkboxStatus &&
    `
    transform: scale(1, 1);
  `}

  ${Nav} {
    ${(props) =>
      props.$checkboxStatus &&
      `
      transition: opacity 0.2s ease-out 0.25s;
      opacity: 1;
    `}
  }
`;

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 5%;
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Span = styled.span`
  width: 30px;
  height: 3px;
  background: ${(props) => props.$color.font_main};
  position: relative;
  &::before,
  &::after {
    width: 30px;
    height: 3px;
    background: ${(props) => props.$color.font_main};
    content: "";
    position: absolute;
    left: 0;
  }
  &::before {
    top: 8px;
  }
  &::after {
    bottom: 8px;
  }
`;

export default function Navbar() {
  const { theme } = useContext(ThemeContext);
  let location = useLocation();
  const [mobileCheckbox, setMobileCheckbox] = useState(false);

  const handleMobileCheckbox = (e) => {
    setMobileCheckbox(e.target.checked);
  };

  const handleMobileNav = () => {
    setMobileCheckbox(!mobileCheckbox);
  };

  return (
    <NavWrapper $color={theme}>
      <LogoWrapper>
        <img src={navlogo} alt="website-logo" width="30px" height="30px"></img>
        <Name>車位即時查</Name>
      </LogoWrapper>
      <Input
        type="checkbox"
        className="navbar-toggle"
        id="navbar-toggle"
        checked={mobileCheckbox}
        onChange={handleMobileCheckbox}
      />
      <NavbarList
        $checkboxStatus={mobileCheckbox}
        onClick={handleMobileNav}
        $color={theme}
      >
        <Nav to="/" $pathActive={location.pathname === "/"} $color={theme}>
          台北車位現況
        </Nav>
        <Nav
          to="/AboutMe"
          $pathActive={location.pathname === "/AboutMe"}
          $color={theme}
        >
          關於我
        </Nav>
        <Switch />
      </NavbarList>
      <Label htmlFor="navbar-toggle" className="navbar-toggle-label">
        <Span $color={theme} />
      </Label>
    </NavWrapper>
  );
}
