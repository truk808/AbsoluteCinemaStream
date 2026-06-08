// import {HeroBanner} from "../../../widjets/HeroBanner";
// import {NEW_FILMS} from '../../../consts.ts'
import {CarouselSection} from "../../../widjets/CarouselSection";
import {selectFilmsCategory} from "../../../entities/Film/model/selectors.ts";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch} from "../../../app/store";
import {fetchFilmByCategory} from "../../../entities/Film/model/services/fetchFilmsByCategory.ts";
import {useEffect} from "react";
// import {FilmCard} from "../../../entities/Film";

export const MainPage = () => {
    const filmsCategory = useSelector(selectFilmsCategory);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchFilmByCategory({category: 'TOP_POPULAR_ALL'}))
    }, [dispatch]);

    return (
        <div className=''>
            <CarouselSection title={'Попул'} films={filmsCategory['TOP_POPULAR_ALL']?.items || []}/>
        </div>
    );
};