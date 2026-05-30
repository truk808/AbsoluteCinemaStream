import type {Film} from "../model/type.ts";
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../../shared/config";

interface FilmCardProps {
    film: Film;
}

export const FilmCard = ({film}: FilmCardProps) => {
    return (
        <NavLink to={`${ROUTES.FILM}/${film.kinopoiskId}`} className="block">
            <div className="flex flex-col w-full max-w-[250px] h-[480px] group cursor-pointer select-none">
                <div className="relative w-full h-[340px] rounded-2xl overflow-hidden bg-neutral-900 mb-4">
                    <div className="absolute top-3 left-3 z-10 bg-[#f39d0b] px-3 py-1.5 rounded-xl flex items-center justify-center text-[#19120a] font-black text-sm shadow-md">
                        <span>{film.ratingKinopoisk ? film.ratingKinopoisk.toFixed(1) : '✔'}</span>
                    </div>
                    <img
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        src={film.posterUrl}
                        alt={film.nameRu || ""}
                    />
                </div>
                <div className="flex flex-col flex-1 justify-start">
                    <h3 className="text-[#eedfd0] font-bold text-lg sm:text-xl line-clamp-2 leading-tight group-hover:text-[#f39d0b] transition-colors">
                        {film.nameRu}
                    </h3>
                    <div className="text-[#eedfd0]/60 font-medium text-xs sm:text-sm mt-1 line-clamp-1">
                        {film.genres.map((genre, index) => (
                            <span key={index}>{genre.genre}{index < film.genres.length - 1 ? ', ' : ''}</span>
                        ))}
                    </div>
                </div>
            </div>
        </NavLink>
    );
};

