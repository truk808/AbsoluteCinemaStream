import type { FilmState } from './slice';

interface StateWithFilm {
    film: FilmState;
}

export const selectCurrentFilm = (state: StateWithFilm) => state.film.currentFilm;
export const selectFilmTrailer = (state: StateWithFilm) => state.film.filmTrailer;
export const selectIsLoading = (state: StateWithFilm) => state.film.isLoading;
export const selectError = (state: StateWithFilm) => state.film.error;