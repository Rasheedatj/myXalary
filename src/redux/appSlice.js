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
  },
});

export default appSlice.reducer;
export const { openModal, closeModal, toggleMenu } = appSlice.actions;
