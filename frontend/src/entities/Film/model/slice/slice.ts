import type {Film} from "../types/film.ts";
import type {Trailer} from "../types/trailer.ts";
import type {FilmCategories} from "../types/categories.ts";
import {filmByIdBuilder} from "./extraReducers/filmByIdBuilder.ts";
import {filmTrailerBuilder} from "./extraReducers/filmTrailerBuilder.ts";
import {createSlice} from "@reduxjs/toolkit";
import {filmByCategory} from "./extraReducers/filmByCategoryBuilder.ts";
// import {NEW_FILMS} from "../../../../consts.ts";
import type {Search} from "../types/search.ts";
import {filmSearchBuilder} from "./extraReducers/filmSearchBuilder.ts";
import {CURRENTFIM, FILMCATEGORIES, FILMSEARCH, FILMTRAILER} from "../../../../consts.ts";

export interface FilmState {
    isFilmLoading: boolean;
    isSearchLoading: boolean;
    isTrailerLoading: boolean;
    categoriesLoading: Record<string, boolean>;
    error: string | null;
    filmCategories: FilmCategories;
    currentFilm: Film | null;
    filmTrailer: Trailer | null;
    filmsSearch: Search | null;
}

const initialState: FilmState = {
    isFilmLoading: true,
    isSearchLoading: true,
    isTrailerLoading: true,
    categoriesLoading: {},
    error: null,
    // filmsSearch: null,
    // filmTrailer: null,
    filmCategories: {},
    // currentFilm: null,
    filmsSearch: FILMSEARCH,
    filmTrailer: FILMTRAILER,
    // filmCategories: FILMCATEGORIES,
    currentFilm: CURRENTFIM,
}

export const filmSlice = createSlice({
    name: "film",
    initialState,
    reducers: {
        clearCurrentFilm: (state) => {
            state.currentFilm = null;
            state.filmTrailer = null;
        }
    },
    extraReducers: (builder) => {
        filmByIdBuilder(builder);
        filmTrailerBuilder(builder);
        filmByCategory(builder);
        filmSearchBuilder(builder);
    }
})

export const {clearCurrentFilm} = filmSlice.actions;
export const filmReducer = filmSlice.reducer;

