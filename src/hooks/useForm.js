import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [formValues, setFormValues] = useState(initialState);
  const [errors, setErrors] = useState(false);
  const [contacts, setContact] = useState([]);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormValues({ ...formValues, [name]: value });
    /* console.log(formValues); */
  };

  return {
    formValues,
    setFormValues,
    handleInputChange,
    errors,
    setErrors,
    contacts,
    setContact,
  };
};
