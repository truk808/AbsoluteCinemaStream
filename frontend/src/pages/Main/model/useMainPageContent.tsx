import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch} from "../../../app/store";
import {categoriesLoading, fetchFilmByCategory} from "../../../entities/Film";
import {useMemo} from "react";
import type {FilmCategories} from "../../../entities/Film/model/types/categories.ts";

function hasUnloadedPages(obj: Record<string, Record<number, boolean>>, category: string): boolean {
    const categoryPages = obj[category];
    if (!categoryPages) return false;

    return Object.values(categoryPages).includes(false);
}

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
        return getArrayFilmsFromAllPages(filmsCategory, 'ZOMBIE_THEME');
    }, [dispatch, filmsCategory])

    const filmsComic = useMemo(() => {
        return getArrayFilmsFromAllPages(filmsCategory, 'COMICS_THEME');
    }, [dispatch, filmsCategory])

    const isCategories = useSelector(categoriesLoading)

    const isFilmsPopular = useMemo(() => {
        return hasUnloadedPages(isCategories, "TOP_POPULAR_ALL")
    }, [dispatch, isCategories]);

    const isFilmsZombie = useMemo(() => {
        return hasUnloadedPages(isCategories, "ZOMBIE_THEME")
    }, [dispatch, isCategories]);

    const isFilmsComic  = useMemo(() => {
        return hasUnloadedPages(isCategories, "COMICS_THEME")
    }, [dispatch, isCategories]);

    return {
        addFilms,
        filmsPopular,
        filmsZombie,
        filmsComic,
        isFilmsPopular,
        isFilmsZombie,
        isFilmsComic,
    }
}