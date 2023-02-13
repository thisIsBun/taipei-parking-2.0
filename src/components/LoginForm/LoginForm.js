import styled from "styled-components";
import { MEDIA_QUERY } from "../../constants/style";
import React, {useContext} from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const Form = styled.form`
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
    border: 1px solid ${(props) => props.$color.border_active};
    outline: none;
  }
`;

const Button = styled.button`
  font-size: 16px;
  background: ${(props) => props.$color.background_active};
  color: ${(props) => props.$color.font_active};
  padding: 0.5em;
  border-radius: 50px;
  border-width: 0px;
`;

export default function LoginForm({account}) {
  const { theme } = useContext(ThemeContext);
  
  return (
    <Form $color={theme}>
      <FormTitle>Log in</FormTitle>
      <FormWrapper>
        <Label>Account</Label>
        <Input $color={theme} value={account} onChange={(e) => e.target.value}/>
      </FormWrapper>
      <FormWrapper>
        <Label>Password</Label>
        <Input $color={theme} />
      </FormWrapper>
      <Button $color={theme}>登入</Button>
    </Form>
  );
}