import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profileScore: 0,
  isAuthenticated: false,
  user: null,
  token: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.token = action.payload.accessToken;
      state.isAuthenticated = true;
      document.body.style.overflow = 'auto';
    },
    logOut(state) {
      state.isAuthenticated = false;
    },
  },
});

export const { login, logOut } = profileSlice.actions;
export default profileSlice.reducer;
