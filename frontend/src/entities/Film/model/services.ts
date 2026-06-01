import {createAsyncThunk} from "@reduxjs/toolkit";
import type {Film, Trailer} from "./type.ts";
import {getFilmById, getFilmTrailerById} from "../api/filmApi.ts";
import type {AxiosError} from "axios";

export const fetchFilmById = createAsyncThunk<Film, number, { rejectValue: string }>(
    'film/fetchFilmById',
    async (filmId, { rejectWithValue }) => {
        try {
            return await getFilmById(filmId);
        } catch (error) {
            const err = error as AxiosError<{ message: string }>;
            return rejectWithValue(err.response?.data?.message || 'Ошибка загрузки фильма');
        }
    }
);

export const fetchFilmTrailerById = createAsyncThunk<Trailer, number, { rejectValue: string }>(
    'film/fetchFilmTrailerById',
    async (filmId, { rejectWithValue }) => {
        try {
            return await getFilmTrailerById(filmId);
        } catch (error) {
            const err = error as AxiosError<{ message: string }>;
            return rejectWithValue(err.response?.data?.message || 'Ошибка загрузки трейлера');
        }
    }
);



