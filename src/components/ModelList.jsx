import React from "react";
import { useSelector } from "react-redux";
import ModelCard from "./ModelCard";

const ModelList = () => {
  const models = useSelector((state) => state.cars.models);

  const displayModels = () => {
    return models.map((model) => (
      <ModelCard key={model.id} model={model} />
    ));
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      {displayModels()}
    </div>
  );
};

export default ModelList;
