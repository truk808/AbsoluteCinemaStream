import type {Film} from "../types/film.ts";
import type {Trailer} from "../types/trailer.ts";
import type {FilmCategories} from "../types/categories.ts";
import {filmByIdBuilder} from "./extraReducers/filmByIdBuilder.ts";
import {filmTrailerBuilder} from "./extraReducers/filmTrailerBuilder.ts";
import {createSlice} from "@reduxjs/toolkit";
import {filmByCategory} from "./extraReducers/filmByCategoryBuilder.ts";
import {filmSearchBuilder} from "./extraReducers/filmSearchBuilder.ts";
import type {Staff} from "../types/staff.ts";
import {staffBuilder} from "./extraReducers/staffBuilder.ts";

export interface FilmState {
    isFilmLoading: boolean;
    isTrailerLoading: boolean;
    categoriesLoading: Record<string, Record<number, boolean>>;
    error: string | null;
    filmCategories: FilmCategories;
    currentFilm: Film | null;
    filmTrailer: Trailer | null;
    staff: Staff[];
    isLoadingStaff: boolean;
}

const initialState: FilmState = {
    isFilmLoading: true,
    isTrailerLoading: true,
    categoriesLoading: {},
    error: null,
    filmTrailer: null,
    filmCategories: {},
    currentFilm: null,
    staff: [],
    isLoadingStaff: true,
}

export const filmSlice = createSlice({
    name: "film",
    initialState,
    reducers: {
        clearCurrentFilm: (state) => {
            state.currentFilm = null;
            state.filmTrailer = null;
        },
        clearSearchCategory: (state) => {
            if (state.filmCategories["SEARCH"]) {
                delete state.filmCategories["SEARCH"];
            }
            if (state.categoriesLoading["SEARCH"]) {
                delete state.categoriesLoading["SEARCH"];
            }
        },
    },
    extraReducers: (builder) => {
        filmByIdBuilder(builder);
        filmTrailerBuilder(builder);
        filmByCategory(builder);
        filmSearchBuilder(builder);
        staffBuilder(builder);
    }
})

export const {clearCurrentFilm, clearSearchCategory} = filmSlice.actions;
export const filmReducer = filmSlice.reducer;

