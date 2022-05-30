import React, { useContext } from "react";
import "./Home.css";
import "antd/dist/antd.css";
import Navbar from "../components/Navbar";
import { HomeForm } from "../components/home/HomeForm";
import { Layout } from "antd";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { HomeContext } from "../components/home/HomeContext";

function Home() {
  const {
    formValues,
    setFormValues,
    errors,
    setErrors,
    addContactHandler,
    handleInputChange,
  } = useContext(HomeContext);

  let navigate = useNavigate("");

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
      addContactHandler(formData);
      /* console.log(formData); */
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

  return (
    <Layout className="layout">
      <Navbar />
      <HomeForm
        submitFormHandler={submitFormHandler}
        formValues={formValues}
        handleInputChange={handleInputChange}
        errors={errors}
      />
    </Layout>
  );
}

export default Home;
