import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/Auth/AuthSlice';

import { offreSlice } from '../features/Auth/OffresSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    offre: offreSlice.reducer,
  },
});
