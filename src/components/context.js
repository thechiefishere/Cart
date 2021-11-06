import React, { useContext, useReducer } from "react";
import data from "../data";

const AppContext = React.createContext();

export const ACTIONS = {
  INCREASE_GADGET: "increase_gadget",
  DECREASE_GADGET: "decrease_gadget",
  DELETE_GADGET: "delete_gadget",
};

const reducer = (gadgets, action) => {
  switch (action.type) {
    case ACTIONS.DELETE_GADGET:
      return gadgets.filter((gadget) => gadget.id !== action.payload);
    case ACTIONS.INCREASE_GADGET:
      return gadgets.map((gadget) => {
        if (gadget.id === action.payload.id) {
          return { ...gadget, amount: gadget.amount + 1 };
        }
        return gadget;
      });
    case ACTIONS.DECREASE_GADGET:
      return gadgets.map((gadget) => {
        if (gadget.id === action.payload.id) {
          return { ...gadget, amount: gadget.amount - 1 };
        }
        return gadget;
      });
    default:
      return gadgets;
  }
};

export const ContextProvider = ({ children }) => {
  const [gadgets, dispatch] = useReducer(reducer, data);

  return (
    <AppContext.Provider value={{ gadgets: gadgets, dispatch: dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
