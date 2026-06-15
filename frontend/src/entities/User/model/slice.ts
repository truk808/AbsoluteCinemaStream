import type {User} from "./type.ts";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {Film} from "../../Film";
import {RATING_FILMS, WATCHLIST} from "../../../consts.ts";

export interface UserState {
    user: User;
    isAuth: boolean;
    watchlist: Film[];
    ratings: Record<number, { film: Film; score: number }>
}

const initialState: UserState = {
    user: {
        id: 1,
        email: 'uwu2010@mail.ru',
        img: 'https://hi-news.ru/wp-content/uploads/2025/07/spokoimaya-kapibara-1-e1752078102391.jpg',
        firstName: 'Василий',
        lastName: 'Картман',
        phoneNumber: '+79185325543',
        dateRegistration: new Date("2026-04-19T16:02:03.057916"),
    },
    isAuth: true,
    // watchlist: [],
    // ratings: {},
    watchlist: WATCHLIST,
    ratings: RATING_FILMS,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setCurrentUser: (state: UserState, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        addFilmInRatings: (state: UserState, action: PayloadAction<{film: Film, score: number}>) => {
            const { film, score } = action.payload;

            state.ratings[film.kinopoiskId] = {
                film: film,
                score: score
            };
        },
        removeFilmFromRatings: (state: UserState, action: PayloadAction<number>) => {
            const filmId = action.payload;
            delete state.ratings[filmId];
        },

        addFilmToWatchList: (state: UserState, action: PayloadAction<Film>)=> {
            state.watchlist = [...state.watchlist, action.payload];
        },
        removeFilmFromWatchList: (state: UserState, action: PayloadAction<Film>)=> {
            state.watchlist = state.watchlist.filter(film => { film.kinopoiskId === action.payload.kinopoiskId });
        }
    }
})

export const {setCurrentUser, addFilmInRatings, removeFilmFromRatings, addFilmToWatchList, removeFilmFromWatchList} = userSlice.actions;
export const userReducer = userSlice.reducer;