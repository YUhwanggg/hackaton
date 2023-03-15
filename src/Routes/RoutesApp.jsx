import React from "react";
import { Route, Routes } from "react-router";
import Registration from "../Components/Registration/Registration";
import HomePage from "../Pages/Home/HomePage";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/reg" element={<Registration />}/>
      <Route path='/auth'/>
    </Routes>
  );
};

export default RoutesApp;
