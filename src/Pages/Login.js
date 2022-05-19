import "./Login.css";
import React, { useState } from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import LoginForm from "../components/login/LoginForm";

function Login() {
  return (
    <div>
      <Layout className="layout">
        <LoginForm />
      </Layout>
    </div>
  );
}

export default Login;
