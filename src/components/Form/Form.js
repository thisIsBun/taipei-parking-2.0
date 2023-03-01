import styled from "styled-components";
import { MEDIA_QUERY } from "../../constants/style";
import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import PropTypes from "prop-types";
import Loader from "../Loader/Loader";
import { Link, useLocation } from "react-router-dom";

const FormContainer = styled.form`
  width: 90%;
  height: 68vh;
  margin: 24px auto;
  padding: 48px 29px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${MEDIA_QUERY} {
    padding: 48px 48px;
    width: 100%;
    border-radius: 12px;
    border: 1px solid ${(props) => props.$color.border_main};
  }
`;

const FormTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 12px;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 16px;
`;

const Input = styled.input`
  border: 1px solid ${(props) => props.$color.border_main};
  border-radius: 5px;
  font-size: 16px;
  padding: 12px;
  margin: 6px 0;
  background: ${(props) => props.$color.background_secondary};
  color: ${(props) => props.$color.font_main};
  &:focus {
    border: 1px solid ${(props) => props.$color.font_main};
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  font-size: 16px;
  background: ${(props) => props.$color.background_active};
  color: ${(props) => props.$color.font_active};
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
    background: ${(props) => props.$color.button_hover};
  }
`;

const AccountAction = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.$color.background_active};
  font-size: 12px;
  &:hover {
    color: ${(props) => props.$color.button_hover};
  }
`;

const ErrorMessage = styled.div`
  border-radius: 5px;
  font-size: 12px;
  padding: 12px;
  background: ${(props) => props.$color.background_error};
  color: ${(props) => props.$color.font_secondary_blk};
`;

export default function Form({
  title,
  btnName,
  account,
  password,
  handleLogin,
  handleSignup,
  errorMessage,
  isLoading,
  setErrorMessage,
  setAccount,
  setPassword,
}) {
  const { theme } = useContext(ThemeContext);
  const location = useLocation();

  return (
    <FormContainer
      $color={theme}
      onSubmit={(e) => {
        if (location.pathname === "/login") {
          handleLogin(e);
        } else if (location.pathname === "/signup") {
          handleSignup(e);
        }
      }}
    >
      <FormTitle>{title}</FormTitle>
      <FormWrapper>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Label>Account</Label>
          {location.pathname === "/login" && (
            <AccountAction to="/signup" $color={theme}>
              註冊新帳號？
            </AccountAction>
          )}
          {location.pathname === "/signup" && (
            <AccountAction to="/login" $color={theme}>
              登入帳號？
            </AccountAction>
          )}
        </div>
        <Input
          $color={theme}
          value={account}
          onChange={(e) => {
            setAccount(e.target.value);
          }}
          onFocus={() => {
            setErrorMessage("");
          }}
        />
      </FormWrapper>
      <FormWrapper>
        <Label>Password</Label>
        <Input
          type="password"
          $color={theme}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          onFocus={() => {
            setErrorMessage("");
          }}
        />
      </FormWrapper>
      <FormWrapper>
        <Button $color={theme} disabled={isLoading}>
          {!isLoading && btnName}
          {isLoading && <Loader />}
        </Button>
        {errorMessage && (
          <ErrorMessage $color={theme}>{errorMessage}</ErrorMessage>
        )}
      </FormWrapper>
    </FormContainer>
  );
}

Form.propTypes = {
  title: PropTypes.string,
  btnName: PropTypes.string,
  account: PropTypes.string,
  password: PropTypes.string,
  handleLogin: PropTypes.func,
  handleSignup: PropTypes.func,
  errorMessage: PropTypes.string,
  isLoading: PropTypes.bool,
  setErrorMessage: PropTypes.func,
  setAccount: PropTypes.func,
  setPassword: PropTypes.func,
};
