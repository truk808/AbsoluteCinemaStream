import type { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import type { FilmState } from "../slice.ts";
import { fetchFilmByCategory } from '../../services/fetchFilmsByCategory.ts';

export const filmByCategory = (builder: ActionReducerMapBuilder<FilmState>) => {
    builder
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
        });
};