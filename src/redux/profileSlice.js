import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profileScore: 100,
  isAuthenticated: true,
  user: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logOut(state) {
      state.isAuthenticated = false;
    },
  },
});

export const { login, logOut } = profileSlice.actions;
export default profileSlice.reducer;
