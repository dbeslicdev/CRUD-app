import { React, useContext } from "react";
import { CounterContext } from "../counter/CounterContext";

export const ActionButtons = () => {
  const { handleIncrement, handleDecrement, handleReset } =
    useContext(CounterContext);
  return (
    <div>
      <button onClick={() => handleIncrement()}>increment</button>
      <button onClick={() => handleDecrement()}>Decrement</button>
      <button onClick={() => handleReset()}>Reset</button>
    </div>
  );
};
