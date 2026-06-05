import {$kinopoiskHost} from "../../../shared/api";

export const getFilmById = async (id: number) => {
    const { data } = await $kinopoiskHost.get(`/api/v2.2/films/${id}`);
    console.log('getFilmById', data)
    return data;
}

export const getFilmTrailerById = async (id: number) => {
    const { data } = await $kinopoiskHost.get(`/api/v2.2/films/${id}/videos`);
    console.log('getFilmTrailerById', data)
    return data;
}