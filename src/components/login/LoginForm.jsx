import React from "react";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";

function LoginForm() {
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
      <form onSubmit={submitFormHandler}>
        <div className="form-input__controls">
          <div className="form-input__control">
            <label>Username</label>
            <input
              type="text"
              value={formValues.username}
              onChange={handleInputChange}
              name="username"
            />
            <br />
            {errors && formValues.username.length < 5
              ? "Username must have at least 5 characters."
              : null}
          </div>
          <div className="form-input__control">
            <label>Password</label>
            <input
              type="text"
              value={formValues.password}
              onChange={handleInputChange}
              name="password"
            />
            <br />
            {errors && formValues.password.length < 8
              ? "Password must have at least 8 characters."
              : null}
          </div>
          <div className="form-input__checkbox">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
          </div>
          <div className="form-input__action">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
