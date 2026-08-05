import type { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import type { FilmState } from "../slice.ts";
import { fetchFilmByCategory } from '../../services/fetchFilmsByCategory.ts';

export const filmByCategory = (builder: ActionReducerMapBuilder<FilmState>) => {
    builder
        .addCase(fetchFilmByCategory.pending, (state, action) => {
            const { category, page = 1 } = action.meta.arg;

            if (!state.categoriesLoading[category]) {
                state.categoriesLoading[category] = {};
            }

            state.categoriesLoading[category][page] = true;
        })
        .addCase(fetchFilmByCategory.fulfilled, (state, action) => {
            const { items, totalPages, category, page, total } = action.payload;

            if (!state.filmCategories[category]) {
                state.filmCategories[category] = {};
            }

            state.filmCategories[category][page] = {
                items,
                totalPages,
                total,
            };

            state.categoriesLoading[category][page] = true;
        })
        .addCase(fetchFilmByCategory.rejected, (state, action) => {
        const { category, page = 1 } = action.meta.arg;

        if (state.categoriesLoading[category]) {
            state.categoriesLoading[category][page] = false;
        }
    });;
};