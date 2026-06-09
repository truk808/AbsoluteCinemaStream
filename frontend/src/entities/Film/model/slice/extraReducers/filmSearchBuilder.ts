import type {ActionReducerMapBuilder} from "@reduxjs/toolkit";
import type {FilmState} from "../slice.ts";
import { fetchFilmsByKeywords} from "../../services/fetchFilmsByKeywords.ts";

export const filmSearchBuilder = (builder: ActionReducerMapBuilder<FilmState>) => {
    builder
        .addCase(fetchFilmsByKeywords.fulfilled, (state, action) => {
            const { page, keyword, pagesCount, films, searchFilmsCountResult } = action.payload;

            if (!state.filmsSearch) {
                state.filmsSearch = {
                    page,
                    keyword,
                    pagesCount,
                    films,
                    searchFilmsCountResult,
                };
            } else {
                state.filmsSearch.films = [
                    ...state.filmsSearch.films,
                    ...films
                ];
            }
        });
};