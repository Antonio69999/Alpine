import { useSelector, useDispatch } from "react-redux";
import { setSelectedColor, setSelectedCar } from "../../features/modeleSlice";
import { useState, useEffect } from "react";

const Color = () => {
  const selectedCar = useSelector((state) => state.cars.selectedCar);
  const selectedColor = useSelector((state) => state.cars.selectedColor);
  const dispatch = useDispatch();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    console.log("selectedCar:", selectedCar);
    console.log("selectedColor:", selectedColor);
  }, [selectedCar, selectedColor]);

  const handleColorChange = (color) => {
    dispatch(setSelectedColor(color));
    setCurrentImageIndex(0); // Reset image index when color changes
  };

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % selectedColor.images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedColor.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="black-band text-white py-4">
        <h1 className="text-3xl">02. Couleur</h1>
      </div>

      <div className="container flex justify-center items-center mt-8">
        {selectedCar && selectedColor && (
          <div className="max-w-full overflow-hidden">
            {Object.values(selectedColor.images).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Car View ${index + 1}`}
                className={`w-full ${
                  index === currentImageIndex ? "" : "hidden"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Navigation button */}
      <div className="flex justify-center mt-4">
        <button onClick={prevImage} className="mr-2 px-4 py-2 bg-gray-300">
          Previous
        </button>
        <button onClick={nextImage} className="px-4 py-2 bg-gray-300">
          Next
        </button>
      </div>

      <div className="mt-8">
        <h2 className="text-xl mb-2">Available Colors:</h2>
        {selectedCar.colorOptions.map((color) => (
          <div key={color.id} className="mb-4">
            <p className="text-lg">{color.name}</p>
            <button
              onClick={() => handleColorChange(color)}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Select Color
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-xl mb-2">Selected Color:</h2>
        {selectedColor && (
          <div>
            <p className="text-lg">{selectedColor.name}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Color;
