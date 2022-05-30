import { React, useState } from "react";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import ContactInfo from "./Pages/ContactInfo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Counter } from "./Pages/Counter";
import { HomeProvider } from "./components/home/HomeContext";

function App() {
  return (
    <HomeProvider>
      <Router>
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact-info" element={<ContactInfo />} />
        </Routes>
      </Router>
    </HomeProvider>
  );
}

export default App;
