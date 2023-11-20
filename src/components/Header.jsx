import React from "react";
import Alpine from "../assets/Images/Alpine.png";
import NavbarDefault from "./Navbar";

const header = () => {
  return (
    <header>
      <div className="flex justify-center pt-3">
        <img src={Alpine} alt="Alpine" height="50px" width="200px" />
      </div>
      <NavbarDefault />
    </header>
  );
};

export default header;
