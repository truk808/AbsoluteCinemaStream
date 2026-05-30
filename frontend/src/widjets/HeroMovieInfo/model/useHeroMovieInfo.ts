import { useSelector } from 'react-redux';
import {selectCurrentFilm} from "../../../entities/Film";
import {selectFilmTrailer} from "../../../entities/Film";
import {selectIsLoading} from "../../../entities/Film";
import {selectError} from "../../../entities/Film";

export const useHeroMovieInfo = () => {
    const film = useSelector(selectCurrentFilm);
    const trailer = useSelector(selectFilmTrailer);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    return {
        film,
        trailer,
        isLoading,
        error,
    };
};