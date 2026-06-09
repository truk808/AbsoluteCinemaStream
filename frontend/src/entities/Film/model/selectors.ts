import type { FilmState } from './slice/slice.ts';

interface StateWithFilm {
    film: FilmState;
}

export const selectCurrentFilm = (state: StateWithFilm) => state.film.currentFilm;
export const selectFilmTrailer = (state: StateWithFilm) => state.film.filmTrailer;
export const selectFilmsCategory = (state: StateWithFilm) => state.film.filmCategories;
export const selectFilmsSearch = (state: StateWithFilm) => state.film.filmsSearch;
export const selectIsLoading = (state: StateWithFilm) => state.film.isLoading;
export const selectError = (state: StateWithFilm) => state.film.error;
