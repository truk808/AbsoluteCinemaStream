import {createAsyncThunk} from "@reduxjs/toolkit";
import {getFilmsByCategory} from "../../api/filmApi.ts";
import type {AxiosError} from "axios";
import type {PaginatedCategory} from "../types/categories.ts";

interface FetchCategoryArgs {
    category: string;
    page?: number;
}

export const fetchFilmByCategory = createAsyncThunk<PaginatedCategory, FetchCategoryArgs , { rejectValue: string }>(
    'film/FilmByCategory',
    async ({category, page = 1}, { rejectWithValue }) => {
        try {
            const data = await getFilmsByCategory(category, page);

            if (page > data.length) {
                return rejectWithValue('Запрашиваемая страница не существует')
            };

            return {
                category,
                page,
                items: data.items || [],
                total: data.total || 0,
                totalPages: data.totalPages || 0,
            }
        } catch (error) {
            const err = error as AxiosError<{ message: string }>;
            return rejectWithValue(err.response?.data?.message || `Ошибка загрузки ${'sdsds'}`);
        }
    }
);