import React from "react";
import Alpine from "../assets/Images/Alpine.png";
import ModelList from "../components/Model/ModelList";

function Configurateur() {
  return (
    <>
      <div className="flex justify-center pt-3">
        <img src={Alpine} alt="Alpine" height="50px" width="200px" />
      </div>
      <div className="flex justify-center pt-3">
        <h1>CONFIGURATEUR OFFICIEL ALPINE</h1>
      </div>
      <ModelList />
    </>
  );
}

export default Configurateur;
