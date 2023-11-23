// header.js
import React from "react";
import CarouselWithContent from "../components/Carousel";
import NavbarDefault from "../components/Navbar";
import Banner from "../components/Banner";
import Video from "../components/Video";
import { FooterWithSitemap } from "../components/Footer";

const Header = () => {
  return (
    <>
      <NavbarDefault />
      <CarouselWithContent />
      <Banner />
      <Video />
      <FooterWithSitemap />
    </>
  );
};

export default Header;
