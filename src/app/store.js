import { configureStore } from "@reduxjs/toolkit";
import provinsiReducer from "../features/provinsi/provinsiSlice";

export const store = configureStore({
  reducer: {
    provinsi: provinsiReducer,
  },
});
