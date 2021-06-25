import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './store';

const initialState= {
    isVisible:false,
}

const betsSlice = createSlice({
    name:'bets',
    initialState,
    reducers:{

    }
})

export default betsSlice.reducer;

export const {} = betsSlice.actions;

