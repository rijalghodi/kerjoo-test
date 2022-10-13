import { createSlice } from "@reduxjs/toolkit";

export const kecamatanSlice = createSlice({
  name: "kecamatan",
  initialState: {
    kecamatan: [],
    selectedKecamatan: {},
  },
  reducers: {
    addKecamatan: (state, action) => {
      state.kecamatan = action.payload;
    },
    changeKecamatan: (state, action) => {
      state.selectedKecamatan = { id: action.payload.id, name: action.payload.name };
    },
  },
  //extra reducers here
});

// Selector
export const selectKecamatan = (state) => state.kecamatan.kecamatan;
export const selectSelectedKecamatanID = (state) => state.kecamatan.selectedKecamatan.id;

// actions + reducer
export const { changeKecamatan, addKecamatan } = kecamatanSlice.actions;
export default kecamatanSlice.reducer;
