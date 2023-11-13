// context.tsx
import React, { createContext, useContext, useReducer, ReactNode } from "react";

import { Action, InitialData, initialState, reducer } from "./reducer";
// import { setUserDataAction } from "./actions";

interface MyContextProps {
  state: InitialData;
  dispatch: React.Dispatch<Action>;
}

const QuoteContext = createContext<MyContextProps | undefined>(undefined);

interface MyProviderProps {
  children: ReactNode;
}

export const QuoteProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue: MyContextProps = {
    state,
    dispatch,
  };

  return (
    <QuoteContext.Provider value={contextValue}>
      {children}
    </QuoteContext.Provider>
  );
};

export const useContextQuote = (): MyContextProps => {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error("useMyContext debe ser utilizado dentro de un MyProvider");
  }
  return context;
};