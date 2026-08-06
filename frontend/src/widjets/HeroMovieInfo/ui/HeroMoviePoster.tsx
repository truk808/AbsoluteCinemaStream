import {OpenTrailer} from "../../../features/OpenTrailer";
import {RateFilm} from "../../../features/RateFilm";
import {AddToWatchList} from "../../../features/AddToWatchList";
import type {Film, Trailer} from "../../../entities/Film";

export const HeroMoviePoster = ({film, trailer}: {film: Film, trailer:  Trailer | null}) => {
    return (
        <div className="w-full max-w-[320px] flex flex-col gap-4 flex-shrink-0">
            <div className="flex justify-center items-center">
                <img className="rounded-2xl w-full shadow-2xl border border-white/5" src={film.posterUrl} alt={film.nameRu || ''}/>
            </div>
            <div className="w-full mt-2 gap-2 flex flex-col">
                {/* !!!Переделать*/}
                {(() => {
                    let youtubeTrailer = trailer?.items.find(item => item.name === 'YOUTUBE');
                    if (!youtubeTrailer) {
                        youtubeTrailer = trailer?.items.find(item => item.name.toLocaleLowerCase().split(' ').includes('трейлер'));
                    }

                    return youtubeTrailer ? (
                        <OpenTrailer
                            name={youtubeTrailer.name}
                            url={youtubeTrailer.url}
                            site={youtubeTrailer.site}
                        />
                    ) : null;
                })()}

                <div className="flex gap-3 w-full my-1.5">
                    <RateFilm film={film}/>
                    <AddToWatchList film={film} />
                </div>

            </div>
        </div>
    );
};

