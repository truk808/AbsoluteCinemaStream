import {createAsyncThunk} from "@reduxjs/toolkit";
import {getFilmsByKeywords} from "../../api/filmApi.ts";
import type {AxiosError} from "axios";
import type {Search} from "../types/search.ts";

interface FetchCategoryArgs {
    keyword: string;
    page?: number;
}

export const fetchFilmsByKeywords = createAsyncThunk<Search, FetchCategoryArgs , { rejectValue: string }>(
    'film/FilmsByKeywords',
    async ({keyword, page = 1}, { rejectWithValue }) => {
        try {
            const data = await getFilmsByKeywords(keyword, page);

            console.log(data)
            if (page > data.pagesCount) {
                return rejectWithValue('Запрашиваемая страница не существует')

            };

            return {
                page,
                keyword,
                pagesCount: data.pagesCount || 0,
                films: data.films || [],
                searchFilmsCountResult: data.searchFilmsCountResult || 0,
            }
        } catch (error) {
            const err = error as AxiosError<{ message: string }>;
            return rejectWithValue(err.response?.data?.message || `Ошибка загрузки `);
        }
    }
);