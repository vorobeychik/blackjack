import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './store';

export enum Languages {
  Ru = 'Ru',
  EN = 'En',
}

const languageSlice = createSlice({
  name: 'languageSlice',
  initialState: Languages.Ru,
  reducers: {
    changeLanguage: (state, action:PayloadAction<Languages>) => {
      state = action.payload;

      return state;
    },
  },
});

export default languageSlice.reducer;

export const {changeLanguage} = languageSlice.actions;

export const selectLanguage = (state:RootState) => state.language;
