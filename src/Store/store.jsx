import { configureStore } from "@reduxjs/toolkit";
import modelReducer from "../features/modeleSlice";

export const store = configureStore({
  reducer: {
    cars: modelReducer,
  },
});
