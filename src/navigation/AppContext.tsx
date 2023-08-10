import React, { createContext, useState } from "react";

interface AppContextValue {
  loginStatus: boolean;
  setLoginStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultContextValue: AppContextValue = {
  loginStatus: false,
  setLoginStatus: () => {},
};

export const AppContext = createContext<AppContextValue>(defaultContextValue);

interface AppContextProviderProps {
  children: React.ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [loginStatus, setLoginStatus] = useState(false);

  const contextValue: AppContextValue = {
    loginStatus,
    setLoginStatus,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};



