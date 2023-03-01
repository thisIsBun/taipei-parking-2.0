import React, { useState } from "react";
import { signup } from "../../apis/WebAPI";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form";
import styled from "styled-components";
import { MEDIA_QUERY } from "../../constants/style";
import { Toast } from "../../constants/utils";

const Container = styled.div`
  ${MEDIA_QUERY} {
    width: 478px;
    margin: 0 auto;
  }
`;

export default function SignupPage() {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigator = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    setIsLoading(true);
    signup({
      account,
      password,
      name: "bun",
      email: `${Math.random()}@gmail.com`,
      checkPassword: password,
    }).then((data) => {
      if (data.status === "error") {
        setIsLoading(false);
        return setErrorMessage(data.message);
      } else if (data.status === "success") {
        Toast.fire({
          title: "註冊成功，請登入帳號",
        });
        setIsLoading(false);
        navigator("/login");
      }
    });
  };

  return (
    <Container>
      <Form
        title="Sign up"
        btnName="註冊"
        account={account}
        password={password}
        setAccount={setAccount}
        setPassword={setPassword}
        handleSignup={handleSignup}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
        isLoading={isLoading}
      />
    </Container>
  );
}
