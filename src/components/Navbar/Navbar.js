import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import navlogo from "../../assets/logo.png";

const NavWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 5%;
  right: 5%;
  height: 13vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  @media screen and (min-width: 768px) {
    justify-content: space-between;
    padding: 0 12px;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.h1`
  margin-left: 10px;
  font-size: 24px;
  font-weight: normal;
`;

const NavbarList = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease-out;
  transform-origin: top;
  transform: scale(1, 0);
  @media screen and (min-width: 768px) {
    all: unset;
    display: flex;
  }
`;

const Nav = styled(Link)`
  font-size: 20px;
  font-weight: normal;
  color: #34495e;
  text-decoration: none;
  opacity: 0;
  display: flex;
  justify-content: center;
  padding: 30px;
  &:hover {
    font-weight: bold;
  }
  @media screen and (min-width: 768px) {
    padding: 5px;
    border: 4px solid rgba(0, 0, 0, 0);
    margin-right: 10px;
    border-bottom-color: ${(props) => (props.$active ? "#FF7E79" : "")};
    opacity: 1;
  }
`;

const Input = styled.input`
  display: none;
  &:checked ~ ${NavbarList} {
    transform: scale(1, 1);
  }
  &:checked ~ ${NavbarList} ${Nav} {
    transition: opacity 0.2s ease-out 0.25s;
    opacity: 1;
  }
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
  background: #34495e;
  position: relative;
  &::before,
  &::after {
    width: 30px;
    height: 3px;
    background: #34495e;
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
  let location = useLocation()

  return (
    <NavWrapper>
      <LogoWrapper>
        <img src={navlogo} alt="website-logo" width="30px" height="30px"></img>
        <Name>車位即時查</Name>
      </LogoWrapper>
      <Input type="checkbox" className="navbar-toggle" id="navbar-toggle" />
      <NavbarList>
        <Nav to="/" $active={location.pathname === "/"}>
          台北車位現況
        </Nav>
        <Nav to="/AboutMe" $active={location.pathname === "/AboutMe"}>
          關於我
        </Nav>
      </NavbarList>
      <Label htmlFor="navbar-toggle" className="navbar-toggle-label">
        <Span />
      </Label>
    </NavWrapper>
  );
}