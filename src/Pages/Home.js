import React from "react";
import "./Home.css";
import "antd/dist/antd.css";
import { Layout } from "antd";
import Navbar from "../components/Navbar";
import HomeForm from "../components/home/HomeForm";

function Home(props) {
  const saveFormDataHandler = (enteredFormData) => {
    const formData = {
      ...enteredFormData,
    };
    props.onAddContact(formData);
  };

  return (
    <Layout className="layout">
      <Navbar />
      <HomeForm onSaveFormData={saveFormDataHandler} />
    </Layout>
  );
}

export default Home;
