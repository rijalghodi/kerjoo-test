import { createSlice } from "@reduxjs/toolkit";

export const desaSlice = createSlice({
  name: "desa",
  initialState: {
    desa: [],
    selectedDesa: {},
  },
  reducers: {
    addDesa: (state, action) => {
      state.desa = action.payload;
    },
    changeDesa: (state, action) => {
      state.selectedDesa = { id: action.payload.id, name: action.payload.name };
    },
  },
  //extra reducers here
});

// Selector
export const selectDesa = (state) => state.desa.desa;
export const selectSelectedDesaID = (state) => state.desa.selectedDesa.id;

// actions + reducer
export const { changeDesa, addDesa } = desaSlice.actions;
export default desaSlice.reducer;
