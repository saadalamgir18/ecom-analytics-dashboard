import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpen: false,
};
const navBarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    toggleMenu(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleMenu } = navBarSlice.actions;

export default navBarSlice;

export const getIsOpen = (state) => state.navbar.isOpen;
