import {$kinopoiskHost} from "../../../shared/api";

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