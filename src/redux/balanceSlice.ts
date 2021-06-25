import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './store';

const initialState = 30000

const balanceSlice = createSlice({
    name:'balance',
    initialState,
    reducers:{

    }

})

export default balanceSlice.reducer;


