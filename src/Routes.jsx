import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Configurateur from "./pages/Configurateur";
import Color from "./components/Color/Color";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/configurateur" element={<Configurateur />} />
      <Route path="/color" element={<Color />} />
    </Routes>
  );
};

export default MyRoutes;
