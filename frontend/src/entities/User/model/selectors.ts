import type {UserState} from "./slice.ts";

interface StateWithUser {
    user: UserState;
}


export const selectUser = (state: StateWithUser) => state.user.user ;
export const selectWatchlist = (state: StateWithUser) => state.user.watchlist
export const selectRatings = (state: StateWithUser) => state.user.ratings
export const selectIsAuth = (state: StateWithUser) => state.user.isAuth; ;