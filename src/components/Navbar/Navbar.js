import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import navlogo from "../../assets/logo.png";
import { useState, useContext } from "react";
import Switch from "../Switch";
import { MEDIA_QUERY } from "../../constants/style";
import { ThemeContext } from "../../contexts/ThemeContext";
import { AuthContext } from "../../contexts/AuthContext";
import { setAuthToken } from "../../constants/utils";
import PropTypes from "prop-types";
import Loader from "../Loader/Loader";
import { Toast } from "../../constants/utils";

const NavWrapper = styled.header`
  width: 100%;
  min-height: 10vh;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.22);
  -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.22);
  -moz-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.22);
  position: fixed;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.$color.background_main};
  ${MEDIA_QUERY} {
    display: grid;
    grid-template-columns: 1fr auto minmax(400px, 3fr) 1fr;
  }
`;

const SwitchWrapper = styled.div`
  width: 100px;
  position: absolute;
  top: 50%;
  left: 1.5%;
  transform: translateY(-50%);
  ${MEDIA_QUERY} {
    all: unset;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  ${MEDIA_QUERY} {
    grid-column: 2/3;
  }
`;

const Name = styled.h1`
  margin: 0 10px;
  font-size: 24px;
  font-weight: normal;
`;

const Nav = styled(Link)`
  font-size: 18px;
  font-weight: normal;
  color: ${(props) => props.$color.font_main};
  text-decoration: none;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  &:hover {
    background: ${(props) =>
      props.$pathActive ? "" : props.$color.background_hover};
  }
  &,
  &:focus {
    ${(props) =>
      props.$pathActive &&
      `
      background: ${props.$color.background_active};
      color: ${props.$color.font_active};
    `}
  }
  ${MEDIA_QUERY} {
    padding: 10px 15px;
    margin-right: 10px;
    opacity: 1;
    border-radius: 8px;
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
  ${MEDIA_QUERY} {
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

const Input = styled.input``;

const Label = styled.label`
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 1.5%;
  display: flex;
  align-items: center;
  ${MEDIA_QUERY} {
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

export default function Navbar({ isLoading }) {
  const { theme } = useContext(ThemeContext);
  const { user, setUser } = useContext(AuthContext);
  let location = useLocation();
  const [mobileCheckbox, setMobileCheckbox] = useState(false);

  const handleInputCheckbox = (e) => {
    setMobileCheckbox(e.target.checked);
  };

  const handleMobileNav = () => {
    if (window.screen.width >= 768) return;
    setMobileCheckbox(!mobileCheckbox);
  };

  const handleLogout = () => {
    setUser("");
    setAuthToken("");
    Toast.fire({ title: "登出成功" });
  };

  return (
    <NavWrapper $color={theme}>
      <LogoWrapper>
        <img src={navlogo} alt="website-logo" width="30px" height="30px" />
        <Name>車位即時查</Name>
        <SwitchWrapper>
          <Switch />
        </SwitchWrapper>
      </LogoWrapper>
      <Input
        hidden
        type="checkbox"
        className="navbar-toggle"
        id="navbar-toggle"
        checked={mobileCheckbox}
        onChange={handleInputCheckbox}
      />
      <NavbarList
        $checkboxStatus={mobileCheckbox}
        onClick={handleMobileNav}
        $color={theme}
      >
        <Nav to="/" $pathActive={location.pathname === "/"} $color={theme}>
          地圖
        </Nav>
        {isLoading && (
          <Loader borderColor="#04AA6D" borderTopColor="rgba(0, 0, 0, 0)" />
        )}
        {!isLoading && (
          <>
            {user && (
              <>
                <Nav
                  to="/save"
                  $pathActive={location.pathname === "/save"}
                  $color={theme}
                >
                  儲存
                </Nav>
                <Nav to="/" $color={theme} onClick={handleLogout}>
                  登出
                </Nav>
              </>
            )}
            {!user && (
              <>
                {(location.pathname === "/login" ||
                  location.pathname === "/") && (
                  <Nav
                    to="/login"
                    $pathActive={location.pathname === "/login"}
                    $color={theme}
                  >
                    登入
                  </Nav>
                )}
                {location.pathname === "/signup" && (
                  <Nav
                    to="/signup"
                    $pathActive={location.pathname === "/signup"}
                    $color={theme}
                  >
                    註冊
                  </Nav>
                )}
              </>
            )}
          </>
        )}
      </NavbarList>
      <Label htmlFor="navbar-toggle" className="navbar-toggle-label">
        <Span $color={theme} />
      </Label>
    </NavWrapper>
  );
}

Navbar.propTypes = {
  isLoading: PropTypes.bool,
};
