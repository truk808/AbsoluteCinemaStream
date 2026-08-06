import {NavLink} from "react-router-dom";
import {ROUTES} from "../../../shared/config";
import type {SearchFilm} from "../model/types/search.ts";
import type {Film} from "../model/types/film.ts";

interface FilmCardHorizontalProps {
    film: SearchFilm | Film;
}

export const FilmCardHorizontal = ({film}: FilmCardHorizontalProps) => {
    return (
        <NavLink className='min-w-[800px] flex justify-center ' to={`${ROUTES.FILM}/${film.kinopoiskId}`}>
            <div
                className="w-full bg-brand-bg text-brand-text max-w-4xl p-6 rounded-xl flex flex-col md:flex-row gap-6 border border-zinc-800/50 shadow-2xl">

                <div className="w-full md:w-[100px] max-h-[330px] flex-shrink-0 rounded-lg overflow-hidden shadow-lg">
                    <img
                        src={film.posterUrl}
                        alt={film.nameOriginal || ''}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex-grow flex flex-col justify-start pt-1 relative">

                    <div className="flex items-start justify-between gap-4 mb-1">
                        <div>
                            <h2 className="text-3xl font-bold tracking-wide">{film.nameRu}</h2>
                            <p className="text-brand-text-muted text-sm mt-0.5">{film.nameEn}</p>
                        </div>

                        <div
                            className="bg-brand-primary text-zinc-950 font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-sm shadow-md hover:bg-brand-primary-hover transition-colors cursor-pointer">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path
                                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                            </svg>
                            <span>{film.ratingKinopoisk}</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-brand-text-muted text-base font-medium my-4">
                        <span>{film.year}</span>
                        <span className="text-zinc-600">•</span>
                            {film.genres.map(((genre) => {
                                return(<span>{genre.genre}</span>)
                            }))}
                        <span className="text-zinc-600">•</span>
                        {film.countries.map(((countries) => {
                            return(<span>{countries.country}</span>)
                        }))}
                    </div>
                </div>
            </div>
        </NavLink>

    );
};

