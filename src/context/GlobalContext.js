"use client";
import { createContext, useState, useContext } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState("Happy");
  const [theme, setTheme] = useState("light");
  const [screen, setScreen] = useState("tab_home");
  const [flashEnabled, setFlashEnabled] = useState(false);
  const [resetFlashTab, setResetFlashTab] = useState(false);
  const [resetFlashAccount, setResetFlashAccount] = useState(false);
  const [resetFlashViewPin, setResetFlashViewPin] = useState(false);

  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <GlobalContext.Provider
      value={{
        user,
        theme,
        toggleTheme,
        login,
        logout,
        setUser,
        screen,
        setScreen,
        flashEnabled,
        setFlashEnabled,
        resetFlashTab,
        setResetFlashTab,
        resetFlashAccount,
        setResetFlashAccount,
        resetFlashViewPin,
        setResetFlashViewPin,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
