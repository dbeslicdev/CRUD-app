import { React, useState } from "react";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import ContactInfo from "./Pages/ContactInfo";
import { useForm } from "../src/hooks/useForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Counter } from "./Pages/Counter";
import { HomeContext, HomeProvider } from "./components/home/HomeContext";

function App() {
  const { contacts, setContact } = useForm();

  const deleteUserHandler = (record) => {
    setContact((prevContacts) => {
      return prevContacts.filter((contact) => contact.id != record.id);
    });
  };
  return (
    <HomeProvider>
      <Router>
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/counter" element={<Counter />} />

          <Route path="/home" element={<Home />} />
          <Route
            path="/contact-info"
            element={
              <ContactInfo
                contacts={contacts}
                onDeleteUser={deleteUserHandler}
                setContact={setContact}
              />
            }
          />
        </Routes>
      </Router>
    </HomeProvider>
  );
}

export default App;
