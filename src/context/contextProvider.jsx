import { createContext, useEffect, useState } from "react";

export const MainProvider = createContext(null);

const ContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  const values = {
    notes,
    setNotes,
  };

  return (
    <MainProvider.Provider value={values}>{children}</MainProvider.Provider>
  );
};

export default ContextProvider;
