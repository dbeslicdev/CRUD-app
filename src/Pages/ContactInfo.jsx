import { React, useContext } from "react";
import "./Home.css";
import "antd/dist/antd.css";
import { ContactForm } from "../components/contacts/ContactForm";
import Navbar from "../components/Navbar";
import { Layout } from "antd";
import { ContactProvider } from "../components/contacts/ContactContext";
import { HomeContext } from "../components/home/HomeContext";

function ContactInfo() {
  const { formValues } = useContext(HomeContext);
  console.log(formValues, "veljuzici");
  return (
    <Layout className="layout">
      <Navbar />
      <ContactProvider>
        <ContactForm />
      </ContactProvider>
    </Layout>
  );
}

export default ContactInfo;
