import { createSlice } from "@reduxjs/toolkit";

export const provinsiSlice = createSlice({
  name: "provinsi",
  initialState: {
    selectedProvinsi: "",
  },
  reducers: {
    changeProvinsi: (state, action) => {
      state.selectedProvinsi = action.payload;
    },
  },
  //extra reducers here
});

// Selector
export const selectProvinsi = (state) => state.provinsi.selectedProvinsi;
// actions + reducer
export const { changeProvinsi } = provinsiSlice.actions;
export default provinsiSlice.reducer;
