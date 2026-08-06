import type {Film} from "../../../entities/Film";

export const HeroMovieDescription = ({film}: {film: Film}) => {
    return (
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 max-w-3xl">
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
    );
};
