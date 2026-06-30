import type {ActionReducerMapBuilder} from "@reduxjs/toolkit";
import type {FilmState} from "../slice.ts";
import {fetchFilmByCategory} from '../../services/fetchFilmsByCategory.ts'

export const filmByCategory = (builder: ActionReducerMapBuilder<FilmState>) => {
    builder
        .addCase(fetchFilmByCategory.fulfilled, (state, action) => {
            const { items, totalPages, category, page, total } = action.payload;

            if (!state.filmCategories[category]) {
                state.filmCategories[category] = {
                    category,
                    page,
                    totalPages,
                    items,
                    total,
                };
            } else {
                // console.log(state.filmCategories[category].items)
                // state.filmCategories[category].items = [
                //     ...state.filmCategories[category].items,
                //     ...NEW_FILMS.items
                // ];
                console.log(state.filmCategories[category].items)
                state.filmCategories[category].items = [
                    ...state.filmCategories[category].items,
                    ...items
                ];
            }
        })
}
