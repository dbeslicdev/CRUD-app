import { React, useState, useContext } from "react";
import "./Home.css";
import "antd/dist/antd.css";
import { ContactForm } from "../components/contacts/ContactForm";
import { HomeContext } from "../components/home/HomeContext";

function ContactInfo() {
  const { formValues, contacts, setContact, setFormValues, handleInputChange } =
    useContext(HomeContext);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSubmit = () => {
    const updatedContacts = contacts.map((contact) =>
      contact.id === formValues.id ? formValues : contact
    );
    setContact(updatedContacts);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const deleteUserHandler = (record) => {
    setContact((prevContacts) => {
      return prevContacts.filter((contact) => contact.id != record.id);
    });
  };

  const showModal = (record) => {
    setIsModalVisible(true);
    setFormValues(record);
  };

  return (
    <ContactForm
      formValues={formValues}
      contacts={contacts}
      showModal={showModal}
      isModalVisible={isModalVisible}
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
      handleInputChange={handleInputChange}
      deleteUserHandler={deleteUserHandler}
    />
  );
}

export default ContactInfo;
