import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import { checkTokenExpirationMiddleware } from '../middlewares/token';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(checkTokenExpirationMiddleware);
  },
});

export default store;
