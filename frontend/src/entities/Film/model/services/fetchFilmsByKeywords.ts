import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFilmsByFilter } from "../../api/filmApi.ts";
import type { AxiosError } from "axios";
import type { Search } from "../types/search.ts";

export interface FetchCategoryArgs {
    keyword?: string;
    page?: number;
    countries?: (string | number)[];
    genres?: (string | number)[];
    order?: 'RATING' | 'NUM_VOTE' | 'YEAR';
    type?: 'FILM' | 'TV_SHOW' | 'TV_SERIES' | 'MINI_SERIES' | 'ALL';
    ratingFrom?: number;
    ratingTo?: number;
    yearFrom?: number;
    yearTo?: number;
    imdbId?: string;
}

export const fetchFilmsByKeywords = createAsyncThunk<Search, FetchCategoryArgs, { rejectValue: string }>(
    'film/FilmsByKeywords',
    async ({ keyword, page = 1, type, imdbId, order, genres, ratingFrom, ratingTo, yearFrom, yearTo, countries }, { rejectWithValue }) => {
        try {
            const data = await getFilmsByFilter({
                keyword,
                page,
                type,
                imdbId,
                order,
                genres,
                ratingFrom,
                ratingTo,
                yearFrom,
                yearTo,
                countries,
            });

            if (page > data.pagesCount) {
                return rejectWithValue('Запрашиваемая страница не существует');
            }

            return {
                page,
                keyword: keyword ?? '',
                pagesCount: data.pagesCount || 0,
                films: data.films || [],
                searchFilmsCountResult: data.searchFilmsCountResult || 0,
            };
        } catch (error) {
            const err = error as AxiosError<{ message: string }>;
            return rejectWithValue(err.response?.data?.message || `Ошибка загрузки `);
        }
    }
);