import { createContext, useEffect, useState } from "react";

export const MainProvider = createContext(null);

const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState();
  const [purple, setPurple] = useState();

  useEffect(() => {}, [theme]);
  useEffect(() => {}, [purple]);

  const values = {
    theme,
    setTheme,
    purple,
    setPurple,
  };

  return (
    <MainProvider.Provider value={values}>{children}</MainProvider.Provider>
  );
};

export default ContextProvider;
