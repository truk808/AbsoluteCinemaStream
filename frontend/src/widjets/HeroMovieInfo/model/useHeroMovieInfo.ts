import { useSelector } from 'react-redux';
import {selectCurrentFilm} from "../../../entities/Film";
import {selectFilmTrailer} from "../../../entities/Film";
import {selectError} from "../../../entities/Film";
import {isFilmLoading} from "../../../entities/Film";

export const useHeroMovieInfo = () => {
    const film = useSelector(selectCurrentFilm);
    const trailer = useSelector(selectFilmTrailer);
    const isLoading = useSelector(isFilmLoading);
    const error = useSelector(selectError);

    return {
        film,
        trailer,
        isLoading,
        error,
    };
};