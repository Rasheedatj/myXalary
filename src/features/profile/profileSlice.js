import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profileScore: 90,
  isAuthenticated: true,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
});

export default profileSlice.reducer;
