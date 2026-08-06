import type { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import type { FilmState } from "../slice.ts";
import { fetchFilmTrailerById } from "../../services/fetchFilmTrailerById.ts";

export const filmTrailerBuilder = (builder: ActionReducerMapBuilder<FilmState>) => {
    builder
        .addCase(fetchFilmTrailerById.pending, (state) => {
            state.isTrailerLoading = true;
            state.error = null;
        })
        .addCase(fetchFilmTrailerById.fulfilled, (state, action) => {
            state.isTrailerLoading = false;
            state.filmTrailer = action.payload;
        })
        .addCase(fetchFilmTrailerById.rejected, (state, action) => {
            state.isTrailerLoading = false;
            state.error = action.payload as string || "Не удалось загрузить трейлер";
        });
};