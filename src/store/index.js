import { configureStore } from "@reduxjs/toolkit";
import navbarSlice from "./navbar-slice";

const store = configureStore({
  reducer: {
    nav: navbarSlice.reducer,
  },
});

export default store;
