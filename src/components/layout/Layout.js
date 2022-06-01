import React from "react";
import Navigation from "./navigation/Navigation";

export const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navigation />
      {children}
    </React.Fragment>
  );
};
