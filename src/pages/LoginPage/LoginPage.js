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
    login(account, password)
      .then((data) => {
        if (data.status === "error") {
          setIsLoading(false);
          return setErrorMessage(data.message);
        } else if (data.status === "success") {
          Toast.fire({
            title: "登入成功",
          });
          setIsLoading(false);
          setAuthToken(data.data.token);
          setUser(data.data.user.id);
          navigator("/");
        }
      })
      .catch((err) => {
        setIsLoading(false);
        return setErrorMessage(err.message);
      });
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
