import React, { useState, createContext } from "react";
import { useForm } from "../../hooks/useForm";
import { INITIAL_STATE } from "../constants/InitialState";

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const {
    contacts,
    setContact,
    onDeleteUser,
    handleInputChange,
    formValues,
    errors,
    setFormValues,
  } = useForm(INITIAL_STATE);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (record) => {
    setIsModalVisible(true);
    setFormValues(record);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSubmit = () => {
    console.log("submit");
    console.log(formValues, "formValues", contacts, "kontakti");
    const updatedContacts = contacts.map((contact) =>
      contact.id === formValues.id ? formValues : contact
    );

    setContact(updatedContacts);
    setIsModalVisible(false);
  };

  const deleteUserHandler = (record) => {
    setContact((prevContacts) => {
      return prevContacts.filter((contact) => contact.id != record.id);
    });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts,
        deleteUserHandler,
        onDeleteUser,
        handleInputChange,
        errors,
        isModalVisible,
        showModal,
        handleCancel,
        handleSubmit,
        formValues,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
