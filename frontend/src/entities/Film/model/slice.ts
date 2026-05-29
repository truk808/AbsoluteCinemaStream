import type {Film} from "./type.ts";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

export interface FilmState {
    currentFilm: Film | null;
}

const initialState: FilmState = {
    currentFilm: null
}

export const filmSlice = createSlice({
    name: "film",
    initialState,
    reducers: {
        setFilm(state, action: PayloadAction<Film>) {
            state.currentFilm = action.payload;
        }
    }
})

export const { setFilm } = filmSlice.actions;
export const filmReducer = filmSlice.reducer;