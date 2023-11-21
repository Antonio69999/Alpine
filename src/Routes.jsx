import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Configurateur from "./pages/Configurateur";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/configurateur" element={<Configurateur />} />
    </Routes>
  );
};

export default MyRoutes;
