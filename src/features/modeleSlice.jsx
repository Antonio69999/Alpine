import { createSlice } from "@reduxjs/toolkit";
import legende from "../assets/Images/configurateur/modele/selection/legende";
import pure from "../assets/Images/configurateur/modele/selection/pure";

const initialState = {
  models: [
    {
      name: "A110 Pure",
      price: "54 700",
      img: legende,
    },

    {
      name: "A110 Légende",
      price: "58 500",
      img: pure,
    },
  ],
};

const Card = () => {};
