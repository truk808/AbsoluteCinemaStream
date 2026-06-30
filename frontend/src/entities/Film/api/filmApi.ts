import {$kinopoiskHost} from "../../../shared/api";
import type {FetchCategoryArgs} from "../model/services/fetchFilmsByKeywords.ts";

export const getFilmById = async (id: number) => {
    const { data } = await $kinopoiskHost.get(`/api/v2.2/films/${id}`);
    return data;
}

export const getFilmTrailerById = async (id: number) => {
    const { data } = await $kinopoiskHost.get(`/api/v2.2/films/${id}/videos`);
    return data;
}

export const getFilmsByCategory = async (type: string = 'TOP_POPULAR_ALL',  page: number = 1) => {
    const { data } = await $kinopoiskHost.get('/api/v2.2/films/collections', {
        params: { type, page }
    });
    return data;
}

// export const getFilmsByKeywords = async (keyword: string, page: number = 1) => {
//     const { data } = await $kinopoiskHost.get('/api/v2.1/films/search-by-keyword', {
//         params: { keyword, page }
//     });
//     return data;
// }

export const getFilmsByFilter = async ({
                                           keyword,
                                           page = 1,
                                           countries = [],
                                           genres = [],
                                           order = 'RATING',
                                           type = 'ALL',
                                           ratingFrom = 0,
                                           ratingTo = 10,
                                           yearFrom = 1000,
                                           yearTo = 3000,
                                           imdbId,
                                       }: FetchCategoryArgs) => {
    const { data } = await $kinopoiskHost.get('/api/v2.1/films', {
        params: {
            keyword,
            page,
            countries: countries.length > 0 ? countries.join(',') : undefined,
            genres: genres.length > 0 ? genres.join(',') : undefined,
            order,
            type,
            ratingFrom,
            ratingTo,
            yearFrom,
            yearTo,
            imdbId,
        },
    });
    return data;
};