import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "../Pages/Home/HomePage";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default RoutesApp;
