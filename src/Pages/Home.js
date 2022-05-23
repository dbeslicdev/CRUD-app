import React from "react";
import "./Home.css";
import "antd/dist/antd.css";
import { Layout } from "antd";
import Navbar from "../components/Navbar";
import HomeForm from "../components/home/HomeForm";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "../hooks/useForm";

function Home(props) {
  const { formValues, setFormValues, setErrors } = useForm({
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

  const saveFormDataHandler = (enteredFormData) => {
    const formData = {
      ...enteredFormData,
    };
    props.onAddContact(formData);
    console.log(formData);
  };

  return (
    <Layout className="layout">
      <Navbar />
      <HomeForm
        onSaveFormData={saveFormDataHandler}
        formValues={props.formValues}
        errors={props.errors}
      />
    </Layout>
  );
}

export default Home;
