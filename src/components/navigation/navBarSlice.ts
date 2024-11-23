import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store"; // Adjust the path to your store file

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

export const getIsOpen = (state: RootState) => state.navbar.isOpen;
