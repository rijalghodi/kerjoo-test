import { createSlice } from "@reduxjs/toolkit";

export const kabupatenSlice = createSlice({
  name: "kabupaten",
  initialState: {
    kabupaten: [],
    selectedKabupaten: {},
  },
  reducers: {
    addKabupaten: (state, action) => {
      state.kabupaten = action.payload;
    },
    changeKabupaten: (state, action) => {
      state.selectedKabupaten = { id: action.payload.id, name: action.payload.name };
    },
  },
  //extra reducers here
});

// Selector
export const selectKabupaten = (state) => state.kabupaten.kabupaten;
export const selectSelectedKabupatenID = (state) => state.kabupaten.selectedKabupaten.id;
// actions + reducer
export const { changeKabupaten, addKabupaten } = kabupatenSlice.actions;
export default kabupatenSlice.reducer;
