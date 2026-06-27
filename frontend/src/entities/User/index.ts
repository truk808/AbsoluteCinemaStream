export {userReducer, setCurrentUser, addFilmInRatings, removeFilmFromRatings, addFilmToWatchList, removeFilmFromWatchList} from './model/slice.ts'
export {selectUser, selectWatchlist, selectRatings, selectIsAuth} from './model/selectors.ts'
export type {RatingsUserFilm, User} from './model/type.ts'