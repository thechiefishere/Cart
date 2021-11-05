import React, { useContext, useReducer } from "react";
import data from "../data";

const AppContext = React.createContext();

export const ACTIONS = {
  ADD_GADGET: "add_gadget",
  DELETE_GADGET: "delete_gadget",
};

const reducer = (state, action) => {};

export const ContextProvider = ({ children }) => {
  const [gadgets, dispatch] = useReducer(reducer, data);

  return (
    <AppContext.Provider value={{ gadgets, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
