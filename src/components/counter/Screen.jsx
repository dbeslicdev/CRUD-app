import { React, useContext } from "react";
import { CounterContext } from "../counter/CounterContext";

export const Screen = () => {
  const { counter } = useContext(CounterContext);
  return <div>{counter}</div>;
};
