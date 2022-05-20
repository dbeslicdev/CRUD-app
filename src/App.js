import { React, useState } from "react";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import ContactInfo from "./Pages/ContactInfo";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [contacts, setContact] = useState([]);

  const addContactHandler = (contact) => {
    setContact((prevContacts) => {
      return [...prevContacts, contact];
    });
  };

  const deleteUserHandler = (record) => {
    setContact((prevContacts) => {
      return prevContacts.filter((contact) => contact.id != record.id);
    });
  };

  return (
    <Router>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={<Home onAddContact={addContactHandler} />}
        />
        <Route
          path="/contact-info"
          element={
            <ContactInfo items={contacts} onDeleteUser={deleteUserHandler} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
