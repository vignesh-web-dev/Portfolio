import { createSlice } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
  name: "nav",
  initialState: { isMenu: false },
  reducers: {
    menu(state) {
      state.isMenu = !state.isMenu;
    },
  },
});

export const navbarActions = navbarSlice.actions;

export default navbarSlice;
