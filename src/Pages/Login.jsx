import "./Login.css";
import React from "react";
import "antd/dist/antd.css";
import { useForm } from "../hooks/useForm";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/login/LoginForm";
import { useAuth } from "../components/authentication/AuthContext";

function Login() {
  const { formValues, errors, handleInputChange, setFormValues, setErrors } =
    useForm({
      password: "",
      username: "",
    });
  let navigate = useNavigate("");
  const auth = useAuth();

  const submitFormHandler = (e) => {
    e.preventDefault();
    const isValid = formValidation();

    if (isValid) {
      setFormValues("");
      auth.login(formValues.username);
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
      <LoginForm
        formValues={formValues}
        errors={errors}
        handleInputChange={handleInputChange}
        submitFormHandler={submitFormHandler}
      />
    </div>
  );
}

export default Login;
