import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

export const menuOpenSlice = createSlice({
  name: "menuOpen",
  initialState,
  reducers: {
    changeMenuOpen: (state) => {
      state.open = !state.open;
    },
  },
});

export const { changeMenuOpen } = menuOpenSlice.actions;

export default menuOpenSlice.reducer;