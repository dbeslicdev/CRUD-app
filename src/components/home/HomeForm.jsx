import React from "react";

function HomeForm({
  formValues,
  errors,
  submitFormHandler,
  handleInputChange,
}) {
  return (
    <form onSubmit={submitFormHandler}>
      <div className="form-input__controls">
        <div className="form-input__control">
          <label>First name</label>
          <input
            type="text"
            value={formValues.firstname}
            onChange={handleInputChange}
            name="firstname"
          />
          <br />
          {errors && formValues.firstname.length < 1
            ? "Please fill out all required fields"
            : null}
        </div>
        <div className="form-input__control">
          <label>Last name</label>
          <input
            type="text"
            value={formValues.lastname}
            onChange={handleInputChange}
            name="lastname"
          />
          <br />
          {errors && formValues.lastname.length < 1
            ? "Please fill out all required fields"
            : null}
        </div>
        <div className="form-input__control">
          <label>Date of birth</label>
          <input
            type="date"
            value={formValues.date}
            onChange={handleInputChange}
            name="date"
          />
          <br />
          {errors && !formValues.date
            ? "Please fill out all required fields"
            : null}
        </div>
        <div className="form-input__control">
          <label>Select Contact type:</label>
          <select
            value={formValues.contacttype}
            onChange={handleInputChange}
            name="contacttype"
          >
            <option value="Email">Email</option>
            <option value="Phone">Phone</option>
          </select>
        </div>
        <div className="form-input__control">
          <label>Contact</label>
          <input
            type="text"
            value={formValues.contact}
            onChange={handleInputChange}
            name="contact"
          />
          <br />
          {errors && formValues.contact.length < 1
            ? "Please fill out all required fields"
            : null}
        </div>
        <div className="form-input__action">
          <button type="submit">Submit</button>
          {/* <button onClick={resetFormHandler}>Clear</button> */}
        </div>
      </div>
    </form>
  );
}

export default HomeForm;
