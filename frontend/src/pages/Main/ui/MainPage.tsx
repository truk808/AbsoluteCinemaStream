import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../../app/store";
import { selectFilmsCategory } from "../../../entities/Film";
import { fetchFilmByCategory } from "../../../entities/Film";
import {MainPageContent} from "./MainPageContent.tsx";

export const MainPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const filmsCategory = useSelector(selectFilmsCategory);

    useEffect(() => {
        dispatch(fetchFilmByCategory({ category: 'TOP_POPULAR_ALL', page: 1 }));
        // dispatch(fetchFilmByCategory({ category: 'COMICS_THEME', page: 1 }));
        // dispatch(fetchFilmByCategory({ category: 'ZOMBIE_THEME', page: 1 }));
    }, [dispatch]);

    return (
        <div>
            <MainPageContent
                filmsCategory={filmsCategory}
            />
        </div>
    );
};