import React from "react";
import { Route, Routes } from "react-router";
import About from "../Components/About/About";
import Auth from "../Components/Auth/Auth";
import Contact from "../Components/Contact/Contact";
import Error from "../Components/Error/Error";
import Profile from "../Components/Profile/Profile";
import Registration from "../Components/Registration/Registration";
import Tours from "../Components/Tours/Tours";
import HomePage from "../Pages/Home/HomePage";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/reg" element={<Registration />} />
      <Route path='/auth' element={<Auth />} />
      <Route path="/about" element={<About />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default RoutesApp;
