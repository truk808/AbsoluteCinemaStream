import type {Film} from "../model/type.ts";
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../../shared/config";

interface FilmCardProps {
    film: Film;
}

export const FilmCard = ({film}: FilmCardProps) => {
    return (
        <NavLink to={`${ROUTES.FILM}/${film.kinopoiskId}`}>
            <div className="flex flex-col min-w-[200px] min-h-[600px] max-w-[375px] max-h-[750px] m-5">
                <div className="">
                    <div
                        className="relative top-18 left-2 w-20 bg-[#f39d0b] px-5 py-3 rounded-xl flex flex-col items-center justify-center text-[#19120a] shadow-lg">
                        <span className="text-3xl font-black">{film.ratingKinopoisk}</span>
                    </div>
                    <img className='rounded-2xl mb-6' src={film.posterUrl} alt=""/>
                </div>
                <h3 className='text-[#eedfd0] font-bold text-5xl'>{film.nameRu}</h3>
                <div className='text-[#eedfd0]/70 font-medium'>
                    {
                        film.genres.map(genre => {
                            return <span>{`${genre.genre} `}</span>
                        })
                    }
                </div>
            </div>
        </NavLink>

    );
};

