import "./Login.css";
import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import { useForm } from "../hooks/useForm";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/login/LoginForm";

function Login() {
  const { formValues, errors, handleInputChange, setFormValues, setErrors } =
    useForm({
      password: "",
      username: "",
    });

  let navigate = useNavigate("");

  const submitFormHandler = (e) => {
    e.preventDefault();
    const isValid = formValidation();

    if (isValid) {
      setFormValues("");
      navigate("/home");
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
      <Layout className="layout">
        <LoginForm
          formValues={formValues}
          errors={errors}
          handleInputChange={handleInputChange}
          submitFormHandler={submitFormHandler}
        />
      </Layout>
    </div>
  );
}

export default Login;
