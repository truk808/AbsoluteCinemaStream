import {CarouselSection} from "../../../widjets/CarouselSection";
import {selectFilmsCategory} from "../../../entities/Film/model/selectors.ts";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch} from "../../../app/store";
// import {fetchFilmByCategory} from "../../../entities/Film/model/services/fetchFilmsByCategory.ts";
import {useEffect} from "react";
import {CardList} from "../../../shared/ui";
import {fetchFilmByCategory, FilmCard} from "../../../entities/Film";

export const MainPage = () => {
    const filmsCategory = useSelector(selectFilmsCategory);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchFilmByCategory({category: 'TOP_POPULAR_ALL'}))
        // dispatch(fetchFilmByCategory({category: 'ZOMBIE_THEME'}))
        // dispatch(fetchFilmByCategory({category: 'COMICS_THEME'}))
    }, [dispatch]);

    useEffect(() => {
        console.log(filmsCategory)
    }, [filmsCategory]);

    return (
        <div className=''>
            <CardList show={'portion'}>
                {

                    filmsCategory['TOP_POPULAR_ALL']?.items?.map((film) => {
                        return <FilmCard film={film} />
                    })
                }
            </CardList>
            <CarouselSection title={'Комедии'} films={filmsCategory['COMICS_THEME']?.items || []}/>
            <CarouselSection title={'Зондбэ'} films={filmsCategory['ZOMBIE_THEME']?.items || []}/>
        </div>
    );
};