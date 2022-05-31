import "./Login.css";
import { React, useState } from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import { useForm } from "../hooks/useForm";
import { Navbar } from "../components/Navbar";
import LoginForm from "../components/login/LoginForm";

function Login() {
  const { formValues, errors, setFormValues, setErrors } = useForm({
    password: "",
    username: "",
  });

  const [user, setUser] = useState("");

  const submitFormHandler = (e) => {
    e.preventDefault();
    const isValid = formValidation();

    if (isValid) {
      setFormValues("");
    }
  };

  const formValidation = () => {
    let isValid = true;

    if (formValues.username.trim().length < 5) {
      setErrors(true);
      isValid = false;
    } else if (formValues.password.trim().length < 8) {
      setErrors(true);
      isValid = false;
    }
    return isValid;
  };
  return (
    <div>
      <Layout>
        <Navbar />
        <LoginForm
          formValues={formValues}
          errors={errors}
          submitFormHandler={submitFormHandler}
        />
      </Layout>
    </div>
  );
}

export default Login;
