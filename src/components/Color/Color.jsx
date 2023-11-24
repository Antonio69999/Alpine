import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedColor, setSelectedCar } from "../../features/modeleSlice";

const Color = () => {
  const colors = useSelector((state) => state.cars.models);
  const selectedColorFromRedux = useSelector(
    (state) => state.cars.selectedColor
  );
  const selectedCarFromRedux = useSelector((state) => state.cars.selectedCar);
  const dispatch = useDispatch();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!selectedColorFromRedux && colors && colors.length > 0) {
      const defaultCar = colors[0];
      dispatch(setSelectedCar(defaultCar));
      dispatch(
        setSelectedColor(
          defaultCar.colorOptions.find((option) => option.default)
        )
      );
    }
  }, [colors, dispatch, selectedColorFromRedux]);

  const handleColorChange = (color) => {
    dispatch(setSelectedColor(color));
    setCurrentImageIndex(0);

    if (!selectedCarFromRedux) {
      dispatch(setSelectedCar(color || colors[0]));
    }
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < Object.values(selectedColorFromRedux?.images || {}).length - 1
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
        {selectedCarFromRedux && selectedColorFromRedux && (
          <div className="max-w-full overflow-hidden">
            {Object.values(selectedColorFromRedux.images).map(
              (image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Car View ${index + 1}`}
                  className={`w-full mx-auto ${
                    index === currentImageIndex ? "" : "hidden"
                  }`}
                  style={{ maxHeight: "400px" }} // Adjust the max height as needed
                />
              )
            )}
          </div>
        )}
      </div>

      <div className="flex justify-center mt-4">
        <button onClick={handlePrevImage} disabled={!selectedColorFromRedux}>
          Previous
        </button>
        <button onClick={handleNextImage} disabled={!selectedColorFromRedux}>
          Next
        </button>
      </div>

      <div className="mt-8">
        <div className="flex justify-center space-x-4 bg-black p-4">
          {selectedCarFromRedux &&
            selectedCarFromRedux.colorOptions.map((color) => {
              console.log("Color Object:", color);

              const imagePath = color.blanc || color.bleu || color.noir;
              console.log("Image Path:", imagePath);

              // Check if imagePath is defined
              if (imagePath) {
                // Dynamically import the image
                const imagePromise = import(imagePath);

                // Use a state variable to track when the image is loaded
                const [loadedImage, setLoadedImage] = useState(null);

                // Load the image when the promise is resolved
                useEffect(() => {
                  imagePromise
                    .then((module) => {
                      setLoadedImage(module.default);
                    })
                    .catch((error) => {
                      console.error("Error loading image:", error);
                    });
                }, [imagePromise]);

                // Render the image as a clickable button when loadedImage is set
                return (
                  <div key={color.id} className="text-center">
                    {loadedImage && (
                      <button
                        onClick={() => handleColorChange(color)}
                        className="focus:outline-none"
                      >
                        <img
                          src={loadedImage}
                          alt={color.name}
                          className="w-32 h-24 object-cover mx-auto mb-2"
                        />
                      </button>
                    )}
                    <p className="text-lg text-white">{color.name}</p>
                    <p className="text-sm text-gray-300">
                      Price: ${color.price}
                    </p>
                  </div>
                );
              }
              return null; // Added to handle the case when imagePath is not defined
            })}
        </div>
      </div>
    </>
  );
};

export default Color;
