import {configureStore} from "@reduxjs/toolkit";
import {filmReducer} from "../../entities/Film";
import {userReducer} from "../../entities/User";

export const store = configureStore({
    reducer: {
        film: filmReducer,
        user: userReducer,
    }
});

export type RootState = ReturnType<typeof store.dispatch>;
export type AppDispatch = typeof store.dispatch;