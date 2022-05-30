import React, { useState, createContext } from "react";
import { useForm } from "../../hooks/useForm";
import { INITIAL_STATE } from "../constants/InitialState";

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  return (
    <ContactContext.Provider
      value={
        {
          /* isModalVisible,
        showModal,
        handleCancel, */
        }
      }
    >
      {children}
    </ContactContext.Provider>
  );
};
