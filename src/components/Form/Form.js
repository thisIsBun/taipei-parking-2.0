import styled from "styled-components";
import { MEDIA_QUERY } from "../../constants/style";
import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import PropTypes from "prop-types";

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

const ErrorMessage = styled.div`
  border-radius: 5px;
  font-size: 12px;
  padding: 12px;
  background: ${(props) => props.$color.background_error};
  color: ${(props) => props.$color.font_secondary_blk};
`;

export default function Form({
  account,
  password,
  handleInputChange,
  handleLogin,
  errorMessage,
  isLoading,
  setErrorMessage,
}) {
  const { theme } = useContext(ThemeContext);
  const { handleAccountInput, handlePasswordInput } = handleInputChange;

  return (
    <FormContainer
      $color={theme}
      onSubmit={(e) => {
        handleLogin(e);
      }}
    >
      <FormTitle>Log in</FormTitle>
      <FormWrapper>
        <Label>Account</Label>
        <Input
          $color={theme}
          value={account}
          onChange={(e) => {
            handleAccountInput(e.target.value);
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
            handlePasswordInput(e.target.value);
          }}
          onFocus={() => {
            setErrorMessage("");
          }}
        />
      </FormWrapper>
      <FormWrapper>
        <Button $color={theme} disabled={isLoading}>
          {!isLoading && "登入"}
          <div className={isLoading ? "loaders" : ""}></div>
        </Button>
        {errorMessage && (
          <ErrorMessage $color={theme}>{errorMessage}</ErrorMessage>
        )}
      </FormWrapper>
    </FormContainer>
  );
}

Form.propTypes = {
  account: PropTypes.string,
  password: PropTypes.string,
  handleInputChange: PropTypes.object,
  handleLogin: PropTypes.func,
  errorMessage: PropTypes.string,
  isLoading: PropTypes.bool,
  setErrorMessage: PropTypes.func
};
