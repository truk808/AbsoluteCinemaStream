import type { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import type { FilmState } from "../slice.ts";
import { fetchFilmsByFilter } from "../../services/fetchFilmsByFilter.ts";

export const filmSearchBuilder = (builder: ActionReducerMapBuilder<FilmState>) => {
    builder
        .addCase(fetchFilmsByFilter.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(fetchFilmsByFilter.fulfilled, (state, action) => {
            state.isLoading = false;
            state.filmsSearch = action.payload;
        })
        .addCase(fetchFilmsByFilter.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload || 'Произошла ошибка';
        });
};