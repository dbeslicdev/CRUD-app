import React from "react";

function LoginForm({
  formValues,
  errors,
  submitFormHandler,
  handleInputChange,
}) {
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
