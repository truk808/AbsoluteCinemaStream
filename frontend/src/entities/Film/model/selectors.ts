import type { FilmState } from './slice/slice.ts';

interface StateWithFilm {
    film: FilmState;
}

export const selectCurrentFilm = (state: StateWithFilm) => state.film.currentFilm;
export const selectFilmTrailer = (state: StateWithFilm) => state.film.filmTrailer;
export const selectFilmsCategory = (state: StateWithFilm) => state.film.filmCategories;
export const selectStaff = (state: StateWithFilm) => state.film.staff;

export const selectError = (state: StateWithFilm) => state.film.error;

export const categoriesLoading = (state: StateWithFilm) => state.film.categoriesLoading;
export const isFilmLoading = (state: StateWithFilm) => state.film.isFilmLoading
export const selectIsLoadingStaff = (state: StateWithFilm) => state.film.isLoadingStaff;
export const isTrailerLoading = (state: StateWithFilm) => state.film.isTrailerLoading;
