import { createSlice } from "@reduxjs/toolkit";

//IMAGES
import legende from "../assets/Images/configurateur/modele/selection/legende.png";
import pure from "../assets/Images/configurateur/modele/selection/pure.png";
import D from "../assets/Images/logoD.png";

//COULEURS
import blanc from "../assets/Images/configurateur/couleurs/selection/blanc.jpg";
import bleu from "../assets/Images/configurateur/couleurs/selection/bleu.jpg";
import noir from "../assets/Images/configurateur/couleurs/selection/noir.jpg";

const initialState = {
  models: [
    {
      name: "A110 Pure",
      price: "54 700",
      rent: "650",
      img: legende,
      energetique: D,
      id: 1,
    },

    {
      name: "A110 Légende",
      price: "58 500",
      rent: "760",
      img: pure,
      energetique: D,
      id: 2,
    },
  ],
  colors: [
    {
      name: "Peinture opaque Blanc Glacier",
      img: blanc,
      price: "0",
      id: 1,
    },
    {
      name: "Teinte spéciale Bleu Alpine",
      img: bleu,
      price: "1800",
      id: 2,
    },
    {
      name: "Teinte métallisée Noir Profond",
      img: noir,
      price: "840",
      id: 3,
    },
  ],

  currentStep: 0,
  selectedCar: null,
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
    },
  },
});

export const { setNextStep, setSelectedCar } = modelSlice.actions;

export default modelSlice.reducer;
