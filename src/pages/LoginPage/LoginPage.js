import React, { useState, useContext } from "react";
import { login } from "../../apis/WebAPI";
import { setAuthToken } from "../../constants/utils";
import { AuthContext } from "../../contexts/AuthContext";
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

export default function LoginPage() {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useContext(AuthContext);
  const navigator = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const gtag = function () {
      window.dataLayer.push(arguments);
    };
    gtag("event", "login", {
      method: "Google",
    });

    login(account, password)
      .then((data) => {
        if (data.status === "error") {
          setErrorMessage(data.message);
        } else if (data.status === "success") {
          Toast.fire({
            title: "登入成功",
          });
          setAuthToken(data.data.token);
          setUser(data.data.user.id);
          navigator("/");
        }
      })
      .catch((err) => {
        setErrorMessage(err.message);
      })
      .finally(() => setIsLoading(false));
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
