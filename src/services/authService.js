import { jwtDecode } from "jwt-decode";
const token = "token";

export function setAuthToken(jwt) {
  if (typeof window !== undefined) return localStorage.setItem(token, jwt);
}

export function getAuthToken() {
  if (typeof window !== undefined) {
    if (localStorage.getItem(token) === null) return;
    return localStorage.getItem(token);
  }
}

export function removeAuthToken() {
  if (typeof window !== undefined) {
    if (localStorage.getItem(token) !== null) {
      localStorage.removeItem(token);
    }
  }
}

export function getUserInfo() {
  const token = getAuthToken();
  if (!token) return null;
  const user = jwtDecode(token);
  return user;
}

export default {
  setAuthToken,
  getAuthToken,
  removeAuthToken,
  getUserInfo,
};
