import { React } from "react";
import { ActionButtons } from "../components/counter/ActionButtons";
import { Screen } from "../components/counter/Screen";
import { CounterProvider } from "../components/counter/CounterContext";

export const Counter = () => {
  return (
    <div>
      <CounterProvider>
        <ActionButtons />
        <Screen />
      </CounterProvider>
    </div>
  );
};
