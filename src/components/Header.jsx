import React from "react";
import Alpine from "../assets/Images/Alpine.png";
import NavbarDefault from "./Navbar";
import CarouselWithContent from "./Carousel";

const header = () => {
  return (
    <header>
      <div className="flex justify-center pt-3">
        <img src={Alpine} alt="Alpine" height="50px" width="200px" />
      </div>
      <NavbarDefault />
      <CarouselWithContent />
    </header>
  );
};

export default header;
