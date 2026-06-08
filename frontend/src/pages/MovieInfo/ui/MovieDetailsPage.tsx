import {HeroMovieInfo} from "../../../widjets/HeroMovieInfo";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import type {AppDispatch} from "../../../app/store";
import {useEffect} from "react";
import {fetchFilmById, fetchFilmTrailerById} from "../../../entities/Film";

export const MovieDetailsPage = () => {
    const {id} = useParams<{ id: string }>();
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (id) {
            dispatch(fetchFilmById(Number(id)))
            dispatch(fetchFilmTrailerById(Number(id)))
        }
    }, [dispatch, id]);

    return (
        <div>
            <HeroMovieInfo/>
        </div>
    );
};




