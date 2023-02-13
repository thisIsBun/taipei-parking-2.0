import { getAuthToken } from "../constants/utils";

const BASE_URL = "https://safe-earth-79613.herokuapp.com";

export const login = (account, password) => {
  return fetch(`${BASE_URL}/api/users/signin`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      account,
      password,
    }),
  })
    .then((res) => res.json())
}

export const getUser = () => {
  return fetch(`${BASE_URL}/api/users/currentUser`, {
    headers: {
      authorization: `Bearer ${getAuthToken()}`,
    },
  }).then((res) => res.json());
}