import React, { useState, useContext } from "react";
import { login } from "../../apis/WebAPI";
import { setAuthToken } from "../../constants/utils";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom"

export default function LoginPage() {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { setUser } = useContext(AuthContext);
  const navigator = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    login(account, password).then((data) => {
      if (data.status === "error") {
        return setErrorMessage(data.message);
      } else if (data.status === "success") {
        setAuthToken(data.data.token);
        setUser(data.data.user);
        navigator("/")
      }
    });
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <div>
          Account:{" "}
          <input
            value={account}
            onChange={(e) => {
              setAccount(e.target.value);
            }}
          />
        </div>
        <div>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button>登入</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
}
