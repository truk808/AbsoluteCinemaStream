export {selectCurrentFilm, selectFilmTrailer, selectIsLoading, selectError, selectFilmsSearch, selectFilmsCategory} from "./model/selectors.ts";

export {getFilmById, getFilmsByCategory, getFilmTrailerById} from './api/filmApi.ts'

export { filmReducer, clearCurrentFilm } from './model/slice/slice.ts'

export {FilmCard} from './ui/FilmCard.tsx'

export type { Film } from './model/types/film.ts'
export type { Trailer } from './model/types/trailer.ts'
// export type {  } from './model/types/categories.ts'

export {fetchFilmByCategory} from './model/services/fetchFilmsByCategory.ts'
export {fetchFilmById} from './model/services/fetchFilmById.ts'
export {fetchFilmTrailerById} from './model/services/fetchFilmTrailerById.ts'
export {fetchFilmsByKeywords} from './model/services/fetchFilmsByKeywords.ts'

