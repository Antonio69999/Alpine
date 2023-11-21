import { useSelector } from "react-redux";

const Color = () => {
    const selectedCar = useSelector((state) => state.selectedCar);
  console.log("Selected car :", selectedCar);
  return (
    <>
      <div className="black-band">
        <h1>02. Couleur</h1>
      </div>
    </>
  );
};

export default Color;
