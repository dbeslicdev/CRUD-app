import React, { createContext } from "react";
import { useForm } from "../../hooks/useForm";
import { INITIAL_STATE } from "../constants/InitialState";
import { useContacts } from "../../hooks/useContacts";

export const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  const { errors, setErrors, handleInputChange, formValues, setFormValues } =
    useForm(INITIAL_STATE);

  const { setContact, contacts } = useContacts();

  const addContactHandler = (contact) => {
    setContact((prevContacts) => {
      return [...prevContacts, contact];
    });
  };

  return (
    <HomeContext.Provider
      value={{
        contacts,
        setContact,
        addContactHandler,
        errors,
        setErrors,
        formValues,
        setFormValues,
        handleInputChange,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
