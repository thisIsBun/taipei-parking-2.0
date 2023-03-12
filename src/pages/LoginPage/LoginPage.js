import React, { useState, useContext } from "react";
import { setAuthToken } from "../../constants/utils";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form";
import styled from "styled-components";
import { MEDIA_QUERY } from "../../constants/style";
import { Toast } from "../../constants/utils";
import { gtag } from "../../constants/utils";
import { auth } from "../../constants/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Container = styled.div`
  ${MEDIA_QUERY} {
    width: 478px;
    margin: 0 auto;
  }
`;

export default function LoginPage() {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useContext(AuthContext);
  const navigator = useNavigate();

  const handleLogin = async () => {
    setIsLoading(true);
    gtag("event", "login_email", {
      method: "Google",
    });
    try {
      await signInWithEmailAndPassword(auth, account, password);
      Toast.fire({
        title: "登入成功",
      });
      setAuthToken(auth.currentUser.uid);
      setUser(auth.currentUser.uid);
      navigator("/");
    } catch (err) {
      setErrorMessage(err.message);
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Form
        title="Log in"
        btnName="登入"
        account={account}
        password={password}
        setAccount={setAccount}
        setPassword={setPassword}
        handleLogin={handleLogin}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
        isLoading={isLoading}
      />
    </Container>
  );
}
