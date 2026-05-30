export {selectCurrentFilm, selectFilmTrailer, selectIsLoading, selectError} from "./model/selectors.ts";

export type { Film } from './model/type.ts'
export { filmReducer, clearCurrentFilm } from './model/slice.ts'

export {FilmCard} from './ui/FilmCard.tsx'