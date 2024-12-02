"use client";
import { createContext, useState, useContext } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState("Happy");
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <GlobalContext.Provider
      value={{ user, theme, toggleTheme, login, logout, setUser }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
