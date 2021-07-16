import { configureStore } from '@reduxjs/toolkit';
import blackJackSlice from './blackJackSlice';
import languageSlice from './languageSlice';

export const store = configureStore({
  reducer: {
    blackJack: blackJackSlice,
    language: languageSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
