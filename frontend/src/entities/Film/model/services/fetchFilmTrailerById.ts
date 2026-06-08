import {createAsyncThunk} from "@reduxjs/toolkit";
import {getFilmTrailerById} from "../../api/filmApi.ts";
import type {AxiosError} from "axios";
import type {Trailer} from "../types/trailer.ts";

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