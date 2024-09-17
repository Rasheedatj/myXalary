import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalState: true,
  openMenu: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    openModal(state) {
      state.modalState = true;
    },
    closeModal(state) {
      state.modalState = false;
    },
    toggleMenu(state) {
      state.openMenu = !state.openMenu;
    },
    closeMenu(state) {
      state.openMenu = false;
    },
  },
});

export default appSlice.reducer;
export const { openModal, closeModal, toggleMenu, closeMenu } =
  appSlice.actions;
