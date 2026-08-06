import {useDispatch} from "react-redux";
import type {AppDispatch} from "../../../app/store";
import {fetchFilmByCategory} from "../../../entities/Film";
import {useMemo} from "react";
import type {FilmCategories} from "../../../entities/Film/model/types/categories.ts";

// !!!Вынести функцию
function getArrayFilmsFromAllPages(obj: FilmCategories, category: string) {
    if(!obj[category]) return;
    return Object.values(obj[category]).flatMap((categoryData) => {
        return categoryData.items
    })
}

export const useMainPageContent = (filmsCategory: FilmCategories) => {

    const dispatch = useDispatch<AppDispatch>();

    function addFilms() {
        const loadedPagesCount = Object.keys(filmsCategory['TOP_POPULAR_ALL'] || {}).length;
        const nextPage = loadedPagesCount + 1;

        dispatch(fetchFilmByCategory({ category: 'TOP_POPULAR_ALL', page: nextPage }));
    }

    const filmsPopular = useMemo(() => {
        return getArrayFilmsFromAllPages(filmsCategory, 'TOP_POPULAR_ALL');
    }, [dispatch, filmsCategory])

    const filmsZombie = useMemo(() => {
        return getArrayFilmsFromAllPages(filmsCategory, 'ZOMBI');
    }, [dispatch, filmsCategory])

    const filmsComic = useMemo(() => {
        return getArrayFilmsFromAllPages(filmsCategory, 'COMICS_THEME');
    }, [dispatch, filmsCategory])

    return {
        addFilms,
        filmsPopular,
        filmsZombie,
        filmsComic,
    }
}