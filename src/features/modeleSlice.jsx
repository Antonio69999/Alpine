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
      colorOptions: [
        {
          name: "Peinture opaque Blanc Glacier",
          img: pureblanchefront,
          price: "0",
          default: true,
          id: 1,
        },
        {
          name: "Teinte spéciale Bleu Alpine",
          img: purebleufront,
          price: "1800",
          default: false,
          id: 2,
        },
        {
          name: "Teinte métallisée Noir Profond",
          img: purenoirfront,
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
      img: pure,
      energetique: D,
      id: 2,
      colorOptions: [
        {
          name: "Peinture opaque Blanc Glacier",
          img: legendeblanchefront,
          price: "0",
          default: true,
          id: 4,
        },
        {
          name: "Teinte spéciale Bleu Alpine",
          img: legendebbleufront,
          price: "1800",
          default: false,
          id: 5,
        },
        {
          name: "Teinte métallisée Noir Profond",
          img: legendebnoirfront,
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
    },
    setSelectedColor: (state, action) => {
      state.selectedColor = action.payload;
    },
  },
});

export const { setNextStep, setSelectedCar, setSelectedColor } =
  modelSlice.actions;

export default modelSlice.reducer;
