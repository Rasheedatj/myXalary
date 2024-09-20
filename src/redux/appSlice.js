import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalState: true,
  openMenu: false,
  activeModal: '',
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
    changeModal(state, action) {
      state.activeModal = action.payload;
      state.modalState = true;
    },
  },
});

export default appSlice.reducer;
export const { openModal, closeModal, toggleMenu, closeMenu, changeModal } =
  appSlice.actions;

// THUNKS
export const handleLogin = () => (dispatch) => {
  dispatch(changeModal('login'));
};

export const handleSignup = () => (dispatch) => {
  dispatch(changeModal('signup'));
};
