import {configureStore} from "@reduxjs/toolkit";
import {filmReducer} from "../../entities/Film";

export const store = configureStore({
    reducer: {
        film: filmReducer,
    }
});

export type RootState = ReturnType<typeof store.dispatch>;
export type AppDispatch = typeof store.dispatch;