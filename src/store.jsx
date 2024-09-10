import { configureStore } from '@reduxjs/toolkit';
import profileSlice from './features/profile/profileSlice';

const store = configureStore({
  reducer: {
    profile: profileSlice,
  },
});

export default store;
