import { configureStore } from "@reduxjs/toolkit";
import provinsiReducer from "../features/provinsi/provinsiSlice";
import kabupatenReducer from "../features/kabupaten/kabupatenSlice";
import kecamatanReducer from "../features/kecamatan/kecamatanSlice";
import desaReducer from "../features/desa/desaSlice";

export const store = configureStore({
  reducer: {
    provinsi: provinsiReducer,
    kabupaten: kabupatenReducer,
    kecamatan: kecamatanReducer,
    desa: desaReducer,
  },
});
