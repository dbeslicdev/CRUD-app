import React from "react";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function HomeForm(props) {
  const { formValues, errors, handleInputChange, setFormValues, setErrors } =
    useForm({
      firstname: "",
      lastname: "",
      date: "",
      contacttype: "",
      contact: "",
    });

  let navigate = useNavigate();

  const submitFormHandler = (e) => {
    e.preventDefault();
    const isValid = formValidation();

    const formData = {
      firstname: formValues.firstname,
      lastname: formValues.lastname,
      date: formValues.date,
      contacttype: formValues.contacttype,
      contact: formValues.contact,
      id: uuidv4(),
    };

    if (isValid) {
      setFormValues("");
      navigate("/contact-info");
      alert("Your form has been submitted successfully");
      props.onSaveFormData(formData);
    }
  };

  const formValidation = () => {
    let isValid = true;

    if (formValues.firstname.trim().length < 1) {
      setErrors(true);
      isValid = false;
    } else if (formValues.lastname.trim().length < 1) {
      setErrors(true);
      isValid = false;
    } else if (!formValues.date) {
      setErrors(true);
      isValid = false;
    } else if (!formValues.contacttype) {
      setErrors(true);
      isValid = false;
    } else if (formValues.contact.trim().length < 1) {
      setErrors(true);
      isValid = false;
    }
    return isValid;
  };

  /* const resetFormHandler = (e) => {
    e.preventDefault();

    setFormValues("");
    setErrors("");
  }; */

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
