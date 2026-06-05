import type {Film, Trailer} from "./type.ts";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {fetchFilmById, fetchFilmTrailerById} from "./services.ts";

export interface FilmState {
    error: string | null;
    isLoading: boolean;
    filmCategories: Film[];
    currentFilm: Film | null;
    filmTrailer: Trailer | null;
}

const initialState: FilmState = {
    error: null,
    isLoading: false,
    filmTrailer: null,
    currentFilm: null,
    filmCategories: [],
    // currentFilm: {
    //     "kinopoiskId": 301,
    //     "kinopoiskHDId": "4824a95e60a7db7e86f14137516ba590",
    //     "imdbId": "tt0133093",
    //     "nameRu": "Матрица",
    //     "nameEn": null,
    //     "nameOriginal": "The Matrix",
    //     "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/301.jpg",
    //     "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/301.jpg",
    //     "coverUrl": "https://avatars.mds.yandex.net/get-ott/2419418/2a0000017c27e0e090b55381c1b06e5c5b0b/orig",
    //     "logoUrl": null,
    //     "reviewsCount": 319,
    //     "ratingGoodReview": 89.0,
    //     "ratingGoodReviewVoteCount": 264,
    //     "ratingKinopoisk": 8.5,
    //     "ratingKinopoiskVoteCount": 796307,
    //     "ratingImdb": 8.7,
    //     "ratingImdbVoteCount": 2200000,
    //     "ratingFilmCritics": 7.9,
    //     "ratingFilmCriticsVoteCount": 209,
    //     "ratingAwait": null,
    //     "ratingAwaitCount": 0,
    //     "ratingRfCritics": 60.0,
    //     "ratingRfCriticsVoteCount": 5,
    //     "webUrl": "https://www.kinopoisk.ru/film/301/",
    //     "year": 1999,
    //     "filmLength": 136,
    //     "slogan": "Добро пожаловать в реальный мир",
    //     "description": "Жизнь Томаса Андерсона разделена на две части: днём он — самый обычный офисный работник, получающий нагоняи от начальства, а ночью превращается в хакера по имени Нео, и нет места в сети, куда он бы не смог проникнуть. Но однажды всё меняется. Томас узнаёт ужасающую правду о реальности.",
    //     "shortDescription": "Хакер Нео узнает, что его мир — виртуальный. Выдающийся экшен, доказавший, что зрелищное кино может быть умным",
    //     "editorAnnotation": null,
    //     "isTicketsAvailable": false,
    //     "productionStatus": null,
    //     "type": "FILM",
    //     "ratingMpaa": "r",
    //     "ratingAgeLimits": "age18",
    //     "countries": [
    //         {
    //             "country": "США"
    //         },
    //         {
    //             "country": "Австралия"
    //         }
    //     ],
    //     "genres": [
    //         {
    //             "genre": "фантастика"
    //         },
    //         {
    //             "genre": "боевик"
    //         }
    //     ],
    //     "startYear": null,
    //     "endYear": null,
    //     "serial": false,
    //     "shortFilm": false,
    //     "completed": false,
    //     "hasImax": false,
    //     "has3D": false,
    //     "lastSync": "2026-04-19T16:02:03.057916"
    // },
    // filmTrailer: {
    //     "total": 8,
    //     "items": [
    //         {
    //             "url": "http://trailers.s3.mds.yandex.net/video_original/162901-0894c2a574be5d911f42d6f7d65d05c5.mov",
    //             "name": "Трейлер к 20-летию фильма (дублированный)",
    //             "site": "UNKNOWN"
    //         },
    //         {
    //             "url": "https://trailers.s3.mds.yandex.net/video_original/184153-8067504155845044.mp4",
    //             "name": "Видеоэссе: Как «Матрица» стала культовым фильмом",
    //             "site": "UNKNOWN"
    //         },
    //         {
    //             "url": "https://youtu.be/L0fw0WzFaBM",
    //             "name": "Трейлер к 20-летию фильма",
    //             "site": "YOUTUBE"
    //         },
    //         {
    //             "url": "https://www.youtube.com/v/mgGqzWL3Kvk",
    //             "name": "Русский ТВ-ролик",
    //             "site": "YOUTUBE"
    //         },
    //         {
    //             "url": "http://www.filmz.ru/videos/files/download/4495/ultra/?url=http%3A%2F%2Fpdl.warnerbros.com%2Fthematrix%2Fus%2Fmed%2Fmatrix_tr_kungfu_640.mov",
    //             "name": "ТВ-ролик №10",
    //             "site": "UNKNOWN"
    //         },
    //         {
    //             "url": "http://www.filmz.ru/videos/files/download/4494/ultra/?url=http%3A%2F%2Fpdl.warnerbros.com%2Fthematrix%2Fus%2Fmed%2Fmatrix_tr_forget_640.mov",
    //             "name": "ТВ-ролик №9",
    //             "site": "UNKNOWN"
    //         },
    //         {
    //             "url": "http://tr.kinopoisk.ru/301/kinopoisk.ru-Matrix-The-133306.flv",
    //             "name": "Музыкальный клип",
    //             "site": "UNKNOWN"
    //         },
    //         {
    //             "url": "http://pdl.warnerbros.com/thematrix/us/med/dvd_trailer_640.mov",
    //             "name": "DVD-трейлер",
    //             "site": "UNKNOWN"
    //         }
    //     ]
    // }
}

export const filmSlice = createSlice({
    name: "film",
    initialState,
    reducers: {
        clearCurrentFilm: (state) => {
            state.currentFilm = null;
            state.filmTrailer = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilmById.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchFilmById.fulfilled, (state, action: PayloadAction<Film>) => {
                state.isLoading = false;
                // state.isLoading = true;

                state.currentFilm = action.payload;
            })
            .addCase(fetchFilmById.rejected, (state, action) => {
                // state.isLoading = false;
                state.isLoading = true;
                state.error = action.payload || 'Произошла непредвиденная ошибка'
            })

            .addCase(fetchFilmTrailerById.fulfilled, (state, action: PayloadAction<Trailer>) => {
                state.filmTrailer = action.payload
            })
    }
})

export const {clearCurrentFilm} = filmSlice.actions;
export const filmReducer = filmSlice.reducer;

