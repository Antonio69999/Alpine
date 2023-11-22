import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedColor, setSelectedCar } from "../../features/modeleSlice";

const Color = () => {
  const colors = useSelector((state) => state.cars.colors);
  const selectedColorFromRedux = useSelector(
    (state) => state.cars.selectedColor
  );
  const selectedCarFromRedux = useSelector((state) => state.cars.selectedCar);
  const dispatch = useDispatch();

  // Initialize local state for selected color and current image index
  const [selectedColor, setSelectedColorLocal] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Set the default color and car when the component mounts
    if (!selectedColorFromRedux && colors && colors.length > 0) {
      const defaultCar = colors[0]; // Assuming the first car in the array is the default
      dispatch(setSelectedCar(defaultCar));
      dispatch(setSelectedColor(defaultCar.colorOptions.find((option) => option.default)));
    }
  
    // Update local state when selectedColorFromRedux changes
    setSelectedColorLocal(selectedColorFromRedux);
  
    // Select the default car if not selected
    if (!selectedCarFromRedux && colors && colors.length > 0) {
      const defaultCar = colors[0];
      dispatch(setSelectedCar(defaultCar));
      dispatch(setSelectedColor(defaultCar.colorOptions.find((option) => option.default)));
    }
  }, [colors, dispatch, selectedColorFromRedux, selectedCarFromRedux]);
  
  
  const handleColorChange = (color) => {
    dispatch(setSelectedColor(color));
    setSelectedColorLocal(color);
    setCurrentImageIndex(0); // Reset the current image index when the color changes
  
    // Update selected car when color changes
    if (!selectedCarFromRedux) {
      dispatch(setSelectedCar(color || colors[0])); // Select the default car
      setSelectedCarLocal(color || colors[0]);
    }
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < Object.values(selectedColor.images).length - 1
        ? prevIndex + 1
        : prevIndex
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  return (
    <>
      <div className="black-band text-white py-4">
        <h1 className="text-3xl">02. Couleur</h1>
      </div>

      <div className="container flex justify-center items-center mt-8">
        {selectedCarFromRedux && selectedColor && (
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
        <button onClick={handlePrevImage} disabled={!selectedColor}>
          Previous
        </button>
        <button onClick={handleNextImage} disabled={!selectedColor}>
          Next
        </button>
      </div>

      <div className="mt-8">
        <h2 className="text-xl mb-2">Available Colors:</h2>
        {selectedCarFromRedux.colorOptions.map((color) => (
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
