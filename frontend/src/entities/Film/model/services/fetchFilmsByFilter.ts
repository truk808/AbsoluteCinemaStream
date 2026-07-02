import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFilmsByFilter } from "../../api/filmApi.ts";
import type { AxiosError } from "axios";
import type { Search } from "../types/search.ts";
import type { FetchCategoryArgs } from "../types/search.ts"; //

export const fetchFilmsByFilter = createAsyncThunk<Search, FetchCategoryArgs, { rejectValue: string }>(
    'film/FilmsByKeywords',
    async (args, { rejectWithValue }) => {
        try {
            const data = await getFilmsByFilter(args);
            return {
                total: data.total,
                totalPages: data.totalPages,
                page: args.page || 1,
                items: data.items
            };
        } catch (error) {
            const err = error as AxiosError<{ message: string }>;
            return rejectWithValue(err.response?.data?.message || `Ошибка загрузки`);
        }
    }
);