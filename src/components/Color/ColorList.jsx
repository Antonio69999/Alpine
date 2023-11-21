import React from "react";
import { useSelector } from "react-redux";
import Color from "./Color";

const ModelList = () => {
  const colors = useSelector((state) => state.cars.colors);

  const displayColors = () => {
    return colors.map((color) => (
      <Color key={color.id} color={color} />
    ));
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      {displayColors()}
    </div>
  );
};

export default ModelList;
