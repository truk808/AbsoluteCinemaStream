import type { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import type { FilmState } from "../slice.ts";
import { fetchFilmsByFilter } from "../../services/fetchFilmsByFilter.ts";

export const filmSearchBuilder = (builder: ActionReducerMapBuilder<FilmState>) => {
    builder
        .addCase(fetchFilmsByFilter.pending, (state, action) => {
            const { page = 1 } = action.meta.arg;

            if (!state.categoriesLoading["SEARCH"]) {
                state.categoriesLoading["SEARCH"] = {};
            }

            state.categoriesLoading["SEARCH"][page] = true;
        })
        .addCase(fetchFilmsByFilter.fulfilled, (state, action) => {
            const {page, totalPages, total, items} = action.payload;

            if (!state.filmCategories["SEARCH"]) {
                state.filmCategories["SEARCH"] = {};
            }

            state.filmCategories["SEARCH"][page] = {
                page,
                totalPages,
                total,
                items,
            };
            state.categoriesLoading["SEARCH"][page] = false;
        })
        .addCase(fetchFilmsByFilter.rejected, (state, action) => {
            const { page = 1 } = action.meta.arg;

            state.categoriesLoading["SEARCH"][page] = false;
            state.error = action.payload || 'Произошла ошибка';
        });
};