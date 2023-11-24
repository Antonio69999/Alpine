import { createSlice } from "@reduxjs/toolkit";

//IMAGES
import legende from "../assets/Images/configurateur/modele/selection/legende.png";
import pure from "../assets/Images/configurateur/modele/selection/pure.png";
import D from "../assets/Images/logoD.png";

//COULEURS
import bleu from "../assets/Images/configurateur/couleurs/selection/bleu.jpg";
import blanc from "../assets/Images/configurateur/couleurs/selection/blanc.jpg";
import noir from "../assets/Images/configurateur/couleurs/selection/noir.jpg";

//IMAGES PURE
import pureblanchefront from "../assets/Images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard-1.jpg";
import pureblancheback from "../assets/Images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard-2.jpg";
import pureblancheleft from "../assets/Images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard-3.jpg";
import pureblancheright from "../assets/Images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard-4.jpg";

import purenoirfront from "../assets/Images/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard-1.jpg";
import purenoirback from "../assets/Images/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard-2.jpg";
import purenoirleft from "../assets/Images/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard-3.jpg";
import purenoirright from "../assets/Images/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard-4.jpg";

import purebleufront from "../assets/Images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard-1.jpg";
import purebleuback from "../assets/Images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard-2.jpg";
import purebleuleft from "../assets/Images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard-3.jpg";
import purebleuright from "../assets/Images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard-4.jpg";

//IMAGE LEGENDE
import legendeblancheback from "../assets/Images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-1.jpg";
import legendeblancheright from "../assets/Images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-2.jpg";
import legendeblancheleft from "../assets/Images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-3.jpg";
import legendeblanchefront from "../assets/Images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-4.jpg";

import legendebleuback from "../assets/Images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-1.jpg";
import legendebleuright from "../assets/Images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-2.jpg";
import legendebleuleft from "../assets/Images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-3.jpg";
import legendebleufront from "../assets/Images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-4.jpg";

import legendebnoireback from "../assets/Images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-1.jpg";
import legendebnoireright from "../assets/Images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-2.jpg";
import legendebnoireleft from "../assets/Images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-3.jpg";
import legendebnoirefront from "../assets/Images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-4.jpg";

const initialState = {
  models: [
    {
      name: "A110 Pure",
      price: "54 700",
      rent: "650",
      img: pure,
      energetique: D,
      id: 1,
      colorOptions: [
        {
          name: "Peinture opaque Blanc Glacier",
          blanc: blanc,
          images: {
            front: pureblanchefront,
            back: pureblancheback,
            left: pureblancheleft,
            right: pureblancheright,
          },
          price: "0",
          default: true,
          id: 1,
        },
        {
          name: "Teinte spéciale Bleu Alpine",
          bleu: bleu,
          images: {
            front: purebleufront,
            back: purebleuback,
            left: purebleuleft,
            right: purebleuright,
          },
          price: "1800",
          default: false,
          id: 2,
        },
        {
          name: "Teinte métallisée Noir Profond",
          noir: noir,
          images: {
            front: purenoirfront,
            back: purenoirback,
            left: purenoirleft,
            right: purenoirright,
          },
          price: "840",
          default: false,
          id: 3,
        },
      ],
    },

    {
      name: "A110 Légende",
      price: "58 500",
      rent: "760",
      img: legende,
      energetique: D,
      id: 2,
      colorOptions: [
        {
          name: "Peinture opaque Blanc Glacier",
          blanc: blanc,
          images: {
            front: legendeblanchefront,
            back: legendeblancheback,
            left: legendeblancheleft,
            right: legendeblancheright,
          },
          price: "0",
          default: true,
          id: 4,
        },
        {
          name: "Teinte spéciale Bleu Alpine",
          bleu: bleu,
          images: {
            front: legendebleufront,
            back: legendebleuback,
            left: legendebleuleft,
            right: legendebleuright,
          },
          price: "1800",
          default: false,
          id: 5,
        },
        {
          name: "Teinte métallisée Noir Profond",
          noir: noir,
          images: {
            front: legendebnoirefront,
            back: legendebnoireback,
            left: legendebnoireleft,
            right: legendebnoireright,
          },
          price: "840",
          default: false,
          id: 6,
        },
      ],
    },
  ],

  currentStep: 0,
  selectedCar: null,
  selectedColor: null,
};

export const modelSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setNextStep: (state) => {
      return {
        ...state,
        currentStep: state.currentStep + 1,
      };
    },
    setSelectedCar: (state, action) => {
      state.selectedCar = action.payload;
      state.selectedColor = action.payload.colorOptions.find(
        (colorOption) => colorOption.default
      );
    },
    setSelectedColor: (state, action) => {
      state.selectedColor = action.payload;
    },
  },
});

export const { setNextStep, setSelectedCar, setSelectedColor } =
  modelSlice.actions;

export default modelSlice.reducer;
