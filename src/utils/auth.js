import { baseUrl } from "./constants";

export const register = async ({ name, email, password }) => {
  const res = await fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });
  if (!res.ok) {
    const error = new Error("Registration failed");
    error.status = res.status;
    throw error;
  }
  return res.json();
};

export const signIn = async ({ email, password }) => {
  const res = await fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  });
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export const signOut = async () => {
  const res = await fetch(`${baseUrl}/signout`, {
    method: "POST",
    credentials: "include",
  });
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export const getCurrentUser = async () => {
  const res = await fetch(`${baseUrl}/users/me`, {
    credentials: "include",
  });
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};
