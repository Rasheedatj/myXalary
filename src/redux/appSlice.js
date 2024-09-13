import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalState: true,
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
  },
});

export default appSlice.reducer;
export const { openModal, closeModal } = appSlice.actions;
