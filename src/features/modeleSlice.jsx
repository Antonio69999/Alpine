import { createSlice } from "@reduxjs/toolkit";

//IMAGES
import legende from "../assets/Images/configurateur/modele/selection/legende.png";
import pure from "../assets/Images/configurateur/modele/selection/pure.png";
import D from "../assets/Images/logoD.png";

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
};

export const modelSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
});

export default modelSlice.reducer;
