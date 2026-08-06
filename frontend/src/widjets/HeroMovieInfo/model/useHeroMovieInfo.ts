import { useSelector } from 'react-redux';
import {selectCurrentFilm} from "../../../entities/Film";
import {selectFilmTrailer} from "../../../entities/Film";
import {selectError} from "../../../entities/Film";
import {isFilmLoading} from "../../../entities/Film";
import {selectStaff} from "../../../entities/Film/model/selectors.ts";

export const useHeroMovieInfo = () => {
    const film = useSelector(selectCurrentFilm);
    const trailer = useSelector(selectFilmTrailer);
    const isLoading = useSelector(isFilmLoading);
    const error = useSelector(selectError);
    const staff = useSelector(selectStaff);


    return {
        film,
        trailer,
        isLoading,
        error,
        staff,
    };
};