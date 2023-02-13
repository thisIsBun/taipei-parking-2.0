export const API_KEY = "AIzaSyAlC4jEqG8r-KvoIUJ_nT75fDGg4ytZRow";

const TOKEN_NAME = "token";

export const setAuthToken = (token) => {
  localStorage.setItem(TOKEN_NAME, token);
};

export const getAuthToken = () => {
  return localStorage.getItem(TOKEN_NAME);
};