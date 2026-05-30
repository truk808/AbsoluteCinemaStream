// import {HeroBanner} from "../../../widjets/HeroBanner";

import {useSelector} from "react-redux";
import {FilmCard, selectCurrentFilm} from "../../../entities/Film";

export const MainPage = () => {
    const film = useSelector(selectCurrentFilm)

    if (!film) {
        return null
    }

    return (
        <div>
            <FilmCard film={film} />
        </div>
    );
};