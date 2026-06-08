import type {ActionReducerMapBuilder} from "@reduxjs/toolkit";
import type {FilmState} from "../slice.ts";
import {fetchFilmTrailerById} from "../../services/fetchFilmTrailerById.ts";

export const filmTrailerBuilder = (builder: ActionReducerMapBuilder<FilmState>) => {
    builder
        .addCase(fetchFilmTrailerById.fulfilled, (state, action) => {
            state.filmTrailer = action.payload;
        });
};