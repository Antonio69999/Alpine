import { useSelector, useDispatch } from "react-redux";
import { setSelectedColor, setSelectedCar } from "../../features/modeleSlice";
//IMAGES PURE
import pureblanchefront from "../../assets/Images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard-1.jpg";
import pureblancheback from "../../assets/Images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard-2.jpg";
import pureblancheleft from "../../assets/Images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard-3.jpg";
import pureblancheright from "../../assets/Images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard-4.jpg";

import purenoirfront from "../../assets/Images/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard-1.jpg";
import purenoirback from "../../assets/Images/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard-2.jpg";
import purenoirleft from "../../assets/Images/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard-3.jpg";
import purenoirright from "../../assets/Images/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard-4.jpg";

import purebleufront from "../../assets/Images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard-1.jpg";
import purebleuback from "../../assets/Images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard-2.jpg";
import purebleuleft from "../../assets/Images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard-3.jpg";
import purebleuright from "../../assets/Images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard-4.jpg";

//IMAGE LEGENDE
import legendeblancheback from "../../assets/Images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-1.jpg";
import legendeblancheright from "../../assets/Images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-2.jpg";
import legendeblancheleft from "../../assets/Images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-3.jpg";
import legendeblanchefront from "../../assets/Images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-4.jpg";

import legendebleuback from "../../assets/Images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-1.jpg";
import legendebleuright from "../../assets/Images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-2.jpg";
import legendebleuleft from "../../assets/Images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-3.jpg";
import legendebleufront from "../../assets/Images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-4.jpg";

import legendebnoireback from "../../assets/Images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-1.jpg";
import legendebnoireright from "../../assets/Images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-2.jpg";
import legendebnoireleft from "../../assets/Images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-3.jpg";
import legendebnoirefront from "../../assets/Images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-4.jpg";

const Color = () => {
  const selectedCar = useSelector((state) => state.cars.selectedCar);
  const colors = useSelector((state) => state.cars.colors);
  const selectedColor = useSelector((state) => state.cars.selectedColor);
  const dispatch = useDispatch();

  const handleColorChange = (color) => {
    dispatch(setSelectedColor(color));
    const carImage = color.image;
    dispatch(setSelectedCar({ ...selectedCar, img: carImage })); //update car
  };

  const PureImages = [
    //Blanc
    pureblanchefront,
    pureblancheback,
    pureblancheleft,
    pureblancheright,
    //Noir
    purenoirfront,
    purenoirback,
    purenoirleft,
    purenoirright,
    //Bleu
    purebleufront,
    purebleuback,
    purebleuleft,
    purebleuright,
  ];

  const LegendeImage = [
    //Blanc
    legendeblancheback,
    legendeblancheright,
    legendeblancheleft,
    legendeblanchefront,

    //BLEU
    legendebleuback,
    legendebleuright,
    legendebleuleft,
    legendebleufront,
    //Noire
    legendebnoireback,
    legendebnoireright,
    legendebnoireleft,
    legendebnoirefront,
  ];

  return (
    <>
      <div className="black-band text-white py-4">
        <h1 className="text-3xl">02. Couleur</h1>
      </div>

      <div className="container flex justify-center items-center mt-8">
        {selectedCar.name === "A110 Pure" && (
          <div className="max-w-full overflow-x-auto">
            <div className="flex space-x-4">
              {PureImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Car View ${index + 1}`}
                  className={`w-full ${index === 0 ? "" : "hidden"}`}
                />
              ))}
            </div>
          </div>
        )}

        {selectedCar.name === "A110 Légende" && (
          <div className="max-w-full overflow-x-auto">
            <div className="flex space-x-4">
              {LegendeImage.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Car View ${index + 1}`}
                  className={`w-full ${index === 0 ? "" : "hidden"}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-8">
        <h2 className="text-xl mb-2">Available Colors:</h2>
        {colors.map((color) => (
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
