import React from "react";
import { Route, Routes } from "react-router";
import About from "../Components/About/About";
import Auth from "../Components/Auth/Auth";
import Error from "../Components/Error/Error";
import Registration from "../Components/Registration/Registration";
import HomePage from "../Pages/Home/HomePage";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/reg" element={<Registration />} />
      <Route path='/auth' element={<Auth />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default RoutesApp;
