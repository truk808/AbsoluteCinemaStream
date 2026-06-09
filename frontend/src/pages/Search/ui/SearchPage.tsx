import {useParams, useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchFilmsByKeywords, selectFilmsSearch} from "../../../entities/Film";
import {useEffect} from "react";
import {FilmCardHorizontal} from "../../../entities/Film/ui/FilmCardHorizontal.tsx";
import type {AppDispatch} from "../../../app/store";

export const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        console.log('keyword', keyword);
        if (keyword) {
            dispatch(fetchFilmsByKeywords({keyword}))
        }
    }, [dispatch]);

    const filmsSearch = useSelector(selectFilmsSearch)

    useEffect(() => {
        console.log(filmsSearch);
    }, [filmsSearch])

    return (
        <div>
            <div className="text-brand-text">
                Возможно, вы искали
            </div>
            <div>
                {
                    filmsSearch?.films.map((film) => {
                        return <FilmCardHorizontal film={film}/>
                    })
                }
            </div>
        </div>
    );
};
