// header.js
import React from "react";
import CarouselWithContent from "../components/Carousel";
import NavbarDefault from "../components/Navbar";
import Banner from "../components/Banner";

const Header = () => {
  return (
    <>
      <NavbarDefault />
      <CarouselWithContent />
      <Banner/>
    </>
  );
};

export default Header;
