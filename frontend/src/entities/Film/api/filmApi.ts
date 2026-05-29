import {$kinopoiskHost} from "../../../shared/api";

export const getFilmById = async (id: number) => {
    const { data } = await $kinopoiskHost.get(`/api/v2.2/films/${id}`);
    return data;
}