import { configureStore} from '@reduxjs/toolkit';
// import balanceSlice from "./balanceSlice";
import betsSlice from "./betsSlice";
import blackJackSlice from "./blackJackSlice";

export const store = configureStore({
    reducer:{
        blackJack:blackJackSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>;