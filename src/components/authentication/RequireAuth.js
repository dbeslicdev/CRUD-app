import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { Layout } from "../layout/Layout";

export const RequireAuth = ({ children }) => {
  const auth = useAuth();
  if (!auth.user) {
    return <Navigate to="/login" />;
  } else {
    return <Layout>{children}</Layout>;
  }
};
