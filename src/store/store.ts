import navBarSlice from "@/components/navigation/navBarSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    navbar: navBarSlice.reducer,
  },
});
