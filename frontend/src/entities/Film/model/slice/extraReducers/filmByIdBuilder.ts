import type {ActionReducerMapBuilder} from "@reduxjs/toolkit";
import type {FilmState} from "../slice.ts";
import {fetchFilmById} from "../../services/fetchFilmById.ts";

export const filmByIdBuilder = (builder: ActionReducerMapBuilder<FilmState>) => {
    builder
        .addCase(fetchFilmById.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(fetchFilmById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.currentFilm = action.payload;
        })
        .addCase(fetchFilmById.rejected, (state, action) => {
            state.isLoading = false; // Исправили баг!
            state.error = action.payload || 'Не удалось загрузить фильм';
        });
};