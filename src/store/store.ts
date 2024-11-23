import navBarSlice from "@/components/navigation/navBarSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    navbar: navBarSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
