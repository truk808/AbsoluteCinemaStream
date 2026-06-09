import {CarouselSection} from "../../../widjets/CarouselSection";
import {selectFilmsCategory} from "../../../entities/Film/model/selectors.ts";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch} from "../../../app/store";
// import {fetchFilmByCategory} from "../../../entities/Film/model/services/fetchFilmsByCategory.ts";
import {useEffect} from "react";

export const MainPage = () => {
    const filmsCategory = useSelector(selectFilmsCategory);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        // dispatch(fetchFilmByCategory({category: 'TOP_POPULAR_ALL'}))
        // dispatch(fetchFilmByCategory({category: 'ZOMBIE_THEME'}))
    }, [dispatch]);

    useEffect(() => {
        console.log(filmsCategory)
    }, [filmsCategory]);

    return (
        <div className=''>
            <CarouselSection title={'Попул'} films={filmsCategory['TOP_POPULAR_ALL']?.items || []}/>
            <CarouselSection title={'Зондбэ'} films={filmsCategory['ZOMBIE_THEME']?.items || []}/>
        </div>
    );
};