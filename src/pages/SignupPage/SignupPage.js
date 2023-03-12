import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form";
import styled from "styled-components";
import { MEDIA_QUERY } from "../../constants/style";
import { Toast } from "../../constants/utils";
import { gtag } from "../../constants/utils";
import { auth } from "../../constants/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

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

  const handleSignup = async (e) => {
    setIsLoading(true);
    gtag("event", "sign_up", {
      method: "Google",
    });
    try {
      await createUserWithEmailAndPassword(auth, account, password);
      Toast.fire({
        title: "註冊成功，請登入帳號",
      });
      navigator("/login");
    } catch (err) {
      setErrorMessage(err.message);
      setIsLoading(false);
    }
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
