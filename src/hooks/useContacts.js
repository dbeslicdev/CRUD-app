import React, { useState } from "react";

export const useContacts = () => {
  const [contacts, setContact] = useState([]);

  return {
    contacts,
    setContact,
  };
};
