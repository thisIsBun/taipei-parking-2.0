import { getAuthToken } from "../constants/utils";

const AUTH_URL = "https://safe-earth-79613.herokuapp.com";
const PARK_URL = "https://tcgbusfs.blob.core.windows.net/blobtcmsv";

export const login = (account, password) => {
  return fetch(`${AUTH_URL}/api/users/signin`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      account,
      password,
    }),
  }).then((res) => res.json());
};

export const signup = (data) => {
  return fetch(`${AUTH_URL}/api/users`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      ...data,
    }),
  }).then((res) => res.json());
};

export const getUser = () => {
  return fetch(`${AUTH_URL}/api/users/currentUser`, {
    headers: {
      authorization: `Bearer ${getAuthToken()}`,
    },
  }).then((res) => res.json());
};

export const getPark = () => {
  return fetch(`${PARK_URL}/TCMSV_alldesc.json`).then((res) => res.json());
};

export const getParkAvl = () => {
  return fetch(`${PARK_URL}/TCMSV_allavailable.json`).then((res) => res.json());
};
