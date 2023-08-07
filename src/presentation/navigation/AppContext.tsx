import React, { createContext, useState } from "react";

interface AppContextValue {
  isLogin: boolean;
  setisLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultContextValue: AppContextValue = {
  isLogin: false,
  setisLogin: () => {},
};

export const AppContext = createContext<AppContextValue>(defaultContextValue);

interface AppContextProviderProps {
  children: React.ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [isLogin, setisLogin] = useState(false);

  const contextValue: AppContextValue = {
    isLogin,
    setisLogin,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};



