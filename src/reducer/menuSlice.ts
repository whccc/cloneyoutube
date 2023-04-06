import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IMenu {
  isActive: boolean;
}

const initialState: IMenu = {
  isActive: false,
};

const menuSlice = createSlice({
  name: "MenuActive",
  initialState,
  reducers: {
    actionMenuShowOrHidden: (state) => {
      state.isActive = !state.isActive;
    },
  },
});

export const { actionMenuShowOrHidden } = menuSlice.actions;

export default menuSlice.reducer;
