import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalState: true,
  openMenu: false,
  board: true,
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
      state.activeModal = '';
    },
    toggleMenu(state) {
      state.openMenu = !state.openMenu;
    },
    closeMenu(state) {
      state.openMenu = false;
    },

    // toggleBoard(state) {
    //   state.board = !state.board;
    // },
    openBoard(state) {
      state.board = false;
    },

    closeBoard(state) {
      state.board = true;
    },
  },
});

export default appSlice.reducer;
export const {
  toggleMenu,
  closeMenu,
  // toggleBoard,
  openBoard,
  closeBoard,
} = appSlice.actions;
