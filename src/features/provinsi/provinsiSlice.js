import { createSlice } from "@reduxjs/toolkit";

export const provinsiSlice = createSlice({
  name: "provinsi",
  initialState: {
    provinsi: [],
    selectedProvinsi: { id: 1, name: "" },
  },
  reducers: {
    addProvinsi: (state, action) => {
      state.provinsi = action.payload;
    },
    changeProvinsi: (state, action) => {
      state.selectedProvinsi = { id: action.payload.id, name: action.payload.name };
    },
  },
  //extra reducers here
});

// Selector
export const selectProvinsi = (state) => state.provinsi.provinsi;
export const selectSelectedProvinsiID = (state) => state.provinsi.selectedProvinsi.id;

// actions + reducer
export const { changeProvinsi, addProvinsi } = provinsiSlice.actions;
export default provinsiSlice.reducer;
