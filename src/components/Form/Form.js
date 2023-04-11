import styled from "styled-components";
import { MEDIA_QUERY } from "../../constants/style";
import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import PropTypes from "prop-types";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../Button";
import { gtag } from "../../constants/utils";
import { auth, googleProvider } from "../../constants/firebase";
import { signInWithPopup } from "firebase/auth";
import { Toast } from "../../constants/utils";
import { setAuthToken } from "../../constants/utils";
import { AuthContext } from "../../contexts/AuthContext";

const Container = styled.div`
  width: 90%;
  height: 72%;
  margin: 5vh auto;
  padding: 48px 29px;
  display: flex;
  flex-direction: column;
  ${MEDIA_QUERY} {
    padding: 48px 48px;
    width: 100%;
    border-radius: 12px;
    border: 1px solid ${(props) => props.$color.border_main};
  }
`;

const HeaderContainer = styled.div`
  flex-basis: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FormContainer = styled.form`
  flex-grow: 1;
`;

const FormTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 12px;
`;

const Span = styled.span`
  margin: 16px 0;
  text-align: center;
  position: relative;
  &::before,
  &::after {
    width: 45%;
    height: 1px;
    background: ${(props) => props.$color.font_main};
    content: "";
    position: absolute;
    top: 50%;
  }
  &::before {
    left: 0px;
  }
  &::after {
    right: 0px;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & + & {
    margin-top: 8px;
  }
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
  const { setUser } = useContext(AuthContext);
  const navigator = useNavigate();

  const handleGoogleLogin = async () => {
    gtag("event", "login_google", {
      method: "Google",
    });
    try {
      await signInWithPopup(auth, googleProvider);
      Toast.fire({
        title: "登入成功",
      });
      setAuthToken(auth.currentUser.uid);
      setUser(auth.currentUser.uid);
      navigator("/");
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  return (
    <Container $color={theme}>
      <HeaderContainer>
        <FormTitle>{title}</FormTitle>
        <Button
          btnName="使用 Google帳號登入"
          handleGoogleLogin={handleGoogleLogin}
        />
        <Span $color={theme}>或</Span>
      </HeaderContainer>
      <FormContainer
        onSubmit={(e) => {
          location.pathname === "/login" ? handleLogin(e) : handleSignup(e);
        }}
      >
        <FormWrapper>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Label>Email</Label>
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
            type="email"
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
          <Button isLoading={isLoading} btnName={btnName} />
          {errorMessage && (
            <ErrorMessage $color={theme}>{errorMessage}</ErrorMessage>
          )}
        </FormWrapper>
      </FormContainer>
    </Container>
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
  handleGoogleLogin: PropTypes.func,
};
