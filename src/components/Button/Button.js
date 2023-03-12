import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../contexts/ThemeContext";
import Loader from "../Loader";
import PropTypes from "prop-types";

const ButtonWrapper = styled.button`
  width: 100%;
  font-size: 16px;
  padding: 0.7em;
  border-radius: 50px;
  border-width: 0px;
  margin: 6px 0;
  cursor: pointer;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    font-size: 16.5px;
  }
`;

const Span = styled.span`
  background: url(https://accounts.scdn.co/sso/images/google-icon.1cdc8fce9609d07f0e9d8d0bc4b61f8f.svg)
    center center no-repeat;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 8px;
`;

export default function Button({ isLoading, btnName, handleGoogleLogin }) {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      {btnName === "使用 Google帳號登入" && (
        <ButtonWrapper
          $color={theme}
          $btnName={btnName}
          disabled={isLoading}
          style={{
            background: "#fff",
            color: "#282a35",
            border: `1px solid ${theme.border_main}`,
          }}
          onClick={handleGoogleLogin}
        >
          {btnName === "使用 Google帳號登入" && <Span />}
          {!isLoading && btnName}
          {isLoading && <Loader />}
        </ButtonWrapper>
      )}
      {btnName !== "使用 Google帳號登入" && (
        <ButtonWrapper
          $color={theme}
          $btnName={btnName}
          disabled={isLoading}
          style={{
            background: theme.background_active,
            color: theme.font_active,
          }}
        >
          {!isLoading && btnName}
          {isLoading && <Loader />}
        </ButtonWrapper>
      )}
    </>
  );
}

Button.propTypes = {
  isLoading: PropTypes.bool,
  btnName: PropTypes.string,
  handleGoogleLogin: PropTypes.func
};
