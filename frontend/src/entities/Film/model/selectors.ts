import type { FilmState } from './slice';

interface StateWithFilm {
    film: FilmState;
}

export const selectCurrentFilm = (state: StateWithFilm) => state.film.currentFilm;