import { createContext, useContext, useReducer, useEffect } from 'react';

const GlobalContext = createContext();

export const AppProvider = ({ children }) => {
  const greeting = 'hello';
  return (
    <GlobalContext.Provider value={{ greeting }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
