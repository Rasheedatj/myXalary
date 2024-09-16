import { configureStore } from '@reduxjs/toolkit';
import profileSlice from './profileSlice';
import appSlice from './appSlice';

const store = configureStore({
  reducer: {
    profile: profileSlice,
    app: appSlice,
  },
});

export default store;
