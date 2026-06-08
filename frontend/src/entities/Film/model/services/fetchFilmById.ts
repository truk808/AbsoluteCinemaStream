import {createAsyncThunk} from "@reduxjs/toolkit";
import {getFilmById} from "../../api/filmApi.ts";
import type {AxiosError} from "axios";
import type {Film} from "../types/film.ts";

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