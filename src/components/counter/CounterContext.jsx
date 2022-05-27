import React, { useState, createContext } from "react";

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    setCounter(counter - 1);
  };
  const handleReset = () => {
    setCounter(0);
  };

  return (
    <CounterContext.Provider
      value={{
        counter,
        setCounter,
        handleIncrement,
        handleDecrement,
        handleReset,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};
