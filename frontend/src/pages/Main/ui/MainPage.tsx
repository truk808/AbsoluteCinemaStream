import { selectFilmsCategory } from "../../../entities/Film/model/selectors.ts";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../../app/store";
import { useEffect } from "react";
import { CardList } from "../../../shared/ui";
import { fetchFilmByCategory, FilmCard } from "../../../entities/Film";

export const MainPage = () => {
    const filmsCategory = useSelector(selectFilmsCategory);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchFilmByCategory({ category: 'TOP_POPULAR_ALL', page: 1 }));
    }, [dispatch]);

    function addFilms() {
        const loadedPagesCount = Object.keys(filmsCategory['TOP_POPULAR_ALL'] || {}).length;
        const nextPage = loadedPagesCount + 1;

        dispatch(fetchFilmByCategory({ category: 'TOP_POPULAR_ALL', page: nextPage }));
    }

    return (
        <div className=''>
            <h1 className='m-6 text-6xl text-center text-brand-text'>Популярное</h1>
            <CardList
                show={'portion'}
                addItem={addFilms}
            >
                {Object.values(filmsCategory['TOP_POPULAR_ALL'] || {}).flatMap((categoryData) => {
                    return categoryData.items.map((film) => {
                        return (
                            <FilmCard
                                key={film.kinopoiskId || film.imdbId}
                                film={film}
                            />
                        );
                    });
                })}
            </CardList>
            {/*<CarouselSection title={'Комедии'} films={filmsCategory['COMICS_THEME']?.items || []}/>*/}
            {/*<CarouselSection title={'Зондбэ'} films={filmsCategory['ZOMBIE_THEME']?.items || []}/>*/}
        </div>
    );
};