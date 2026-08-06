export {selectCurrentFilm, selectFilmTrailer, selectError, selectFilmsCategory, categoriesLoading, isFilmLoading} from "./model/selectors.ts";

export {getFilmById, getFilmsByCategory, getFilmTrailerById} from './api/filmApi.ts'

export { filmReducer, clearCurrentFilm, clearSearchCategory} from './model/slice/slice.ts'

export {FilmCard} from './ui/FilmCard.tsx'
export {FilmCardHorizontal} from './ui/FilmCardHorizontal.tsx'
export {StaffItem} from './ui/StaffItem.tsx'

export type { Film } from './model/types/film.ts'
export type { Trailer } from './model/types/trailer.ts'
export type { Staff } from './model/types/staff.ts'
// export type {  } from './model/types/categories.ts'

export {fetchFilmByCategory} from './model/services/fetchFilmsByCategory.ts'
export {fetchFilmById} from './model/services/fetchFilmById.ts'
export {fetchFilmTrailerById} from './model/services/fetchFilmTrailerById.ts'
export {fetchFilmsByFilter} from './model/services/fetchFilmsByFilter.ts'

