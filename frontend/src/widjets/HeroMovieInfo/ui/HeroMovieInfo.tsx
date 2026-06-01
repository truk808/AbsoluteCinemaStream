import {OpenTrailer} from "../../../features/OpenTrailer";
import {useHeroMovieInfo} from "../model/useHeroMovieInfo.ts";
import {RateFilm} from "../../../features/RateFilm";
import {AddToWatchList} from "../../../features/AddToWatchList";

export const HeroMovieInfo = () => {
    const {film, trailer} = useHeroMovieInfo()

    if (!film) return <div className='w-full h-full text-white text-9xl felx justify-center items-center'>загрузка</div>;

    return (
        <div className=" min-h-screen bg-brand-bg overflow-x-hidden">

            <div className="absolute top-0 left-0 w-full h-[870px] pointer-events-none z-0">
                <div className="hidden md:block w-full h-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/30 to-transparent z-10"/>
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-transparent to-brand-bg/20 z-10"/>
                    <img
                        className="w-full h-full object-cover opacity-25 scale-105 filter blur-[1px]"
                        src={film.coverUrl || ''}
                        alt="Backdrop Background"
                    />
                </div>
            </div>

            <div className="relative z-10 mx-auto flex flex-col md:flex-row gap-8 items-center md:items-start mt-6">
                <div className="w-full max-w-[320px] flex flex-col gap-4 flex-shrink-0">
                    <div className="flex justify-center items-center">
                        <img className="rounded-2xl w-full shadow-2xl border border-white/5" src={film.posterUrl} alt={film.nameRu || ''}/>
                    </div>
                    <div className="w-full mt-2 gap-2 flex flex-col">
                        {/*Переделать*/}
                        {(() => {
                            const youtubeTrailer = trailer?.items.find(item => item.site === 'YOUTUBE');

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
                <div
                    className="flex flex-col items-center md:items-start text-center md:text-left gap-6 max-w-3xl">
                    <div className="w-full flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                        <div>
                            <h1 className="text-4xl md:text-6xl text-brand-text font-bold tracking-tight">{film.nameRu}</h1>
                            <div
                                className="text-lg md:text-xl text-brand-text/70 font-medium flex flex-wrap gap-2 justify-center md:justify-start mt-2">
                                <span>{film.nameEn}</span>
                                <span>•</span>
                                <span>{film.year}</span>
                                <span>•</span>
                                {film.countries.map(() => {
                                    return <span> country </span>
                                })}
                            </div>
                        </div>

                        <div className="self-center md:self-start bg-brand-primary px-5 py-3 rounded-xl flex flex-col items-center justify-center text-brand-bg min-w-[100px] shadow-lg">
                            <span className="text-xs font-bold uppercase tracking-wider opacity-70">Cine Rating</span>
                            <span className="text-3xl font-black">{film.ratingKinopoisk}</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 text-brand-text">
                        {film.genres.map((genre) => (
                            <span
                                className="inline-block rounded-full bg-[#3c3329]/60 text-brand-text border border-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider"
                                key={genre.genre}
                            >
                                {genre.genre}
                            </span>
                        ))}
                    </div>

                    <div className="w-full border-t border-white/5 pt-6">
                        <h4 className="text-brand-primary text-xl font-bold mb-3">О фильме</h4>
                        <p className="text-brand-text-muted text-base md:text-lg leading-relaxed font-normal opacity-90">
                            {film.shortDescription}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};