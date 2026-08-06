import {createAsyncThunk} from "@reduxjs/toolkit";
import {getStaffByFilmId} from "../../api/filmApi.ts";
import type {AxiosError} from "axios";
import type {Staff} from "../types/staff.ts";

export const fetchStaffByFilmId = createAsyncThunk<Staff[], number, { rejectValue: string }>(
    'film/fetchStaffByFilmId',
    async (filmId, { rejectWithValue }) => {
        try {
            console.log('getStaffByFilmId')
            return await getStaffByFilmId(filmId);
        } catch (error) {
            const err = error as AxiosError<{ message: string }>;
            return rejectWithValue(err.response?.data?.message || 'Ошибка загрузки актеров');
        }
    }
);