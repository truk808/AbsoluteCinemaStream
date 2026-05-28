import {OpenTrailer} from "../../../features/OpenTrailer";

const MOVIE_DATA = {
    nameRu: "Матрица", //
    nameEn: "The Matrix", //
    nameOriginal: "The Matrix", //
    year: 1999, //
    country: "  США", //
    rating: "8.5", //
    genres: [
        {
            genre: "фантастика"
        },
        {
            genre: "ужасы"
        },
        {
            genre: "боевик"
        },
    ],
    ratingAgeLimits: "age16",
    filmLength: "136",
    shortDescription: "Хакер Нео узнает, что его мир — виртуальный. Выдающийся экшен, доказавший, что зрелищное кино может быть умным",
    posterUrl: "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/cf1970bc-3f08-4e0e-a095-2fb57c3aa7c6/360",
    coverUrl: "https://avatars.mds.yandex.net/get-ott/1672343/2a0000016cc7177239d4025185c488b1bf43/orig",
};

export const HeroMovieInfo = () => {
    return (
        <div className=" min-h-screen bg-[#19120a] p-4 md:p-12 overflow-x-hidden">

            <div className="absolute top-0 left-0 w-full h-[870px] pointer-events-none z-0">
                <div className="hidden md:block w-full h-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#19120a] via-[#19120a]/30 to-transparent z-10"/>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#19120a] via-transparent to-[#19120a]/20 z-10"/>
                    <img
                        className="w-full h-full object-cover opacity-25 scale-105 filter blur-[1px]"
                        src={MOVIE_DATA.coverUrl}
                        alt="Backdrop Background"
                    />
                </div>
            </div>

            <div className="relative z-10 mx-auto flex flex-col md:flex-row gap-8 items-center md:items-start mt-6">
                <div className="w-full max-w-[320px] flex flex-col gap-4 flex-shrink-0">
                    <div className="flex justify-center items-center">
                        <img className="rounded-2xl w-full shadow-2xl border border-white/5" src={MOVIE_DATA.posterUrl} alt={MOVIE_DATA.nameRu}/>
                    </div>
                    <div className="w-full mt-2 gap-2 flex flex-col">
                        <OpenTrailer />
                        <button
                            className="w-full bg-[#271f16] my-1.5 text-[#eedfd0] border-1 border-[#454545] font-semibold text-base px-4 py-3.5 rounded-xl text-[#19120a] flex items-center justify-center gap-2 cursor-pointer hover:bg-[#eeb163] transition-colors">
                            Добавить в
                        </button>
                    </div>
                </div>
                <div
                    className="flex flex-col items-center md:items-start text-center md:text-left gap-6 max-w-3xl">
                    <div className="w-full flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                        <div>
                            <h1 className="text-4xl md:text-6xl text-[#eedfd0] font-bold tracking-tight">{MOVIE_DATA.nameRu}</h1>
                            <div className="text-lg md:text-xl text-[#eedfd0]/70 font-medium flex flex-wrap gap-2 justify-center md:justify-start mt-2">
                                <span>{MOVIE_DATA.nameEn}</span>
                                <span>•</span>
                                <span>{MOVIE_DATA.year}</span>
                                <span>•</span>
                                <span>{MOVIE_DATA.country.trim()}</span>
                            </div>
                        </div>

                        <div className="self-center md:self-start bg-[#f39d0b] px-5 py-3 rounded-xl flex flex-col items-center justify-center text-[#19120a] min-w-[100px] shadow-lg">
                            <span className="text-xs font-bold uppercase tracking-wider opacity-70">Cine Rating</span>
                            <span className="text-3xl font-black">{MOVIE_DATA.rating}</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 text-[#d7bca7]">
                        {MOVIE_DATA.genres.map((genre) => (
                            <span
                                className="inline-block rounded-full bg-[#3c3329]/60 text-[#eedfd0] border border-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider"
                                key={genre.genre}
                            >
                                {genre.genre}
                            </span>
                        ))}
                    </div>

                    <div className="w-full border-t border-white/5 pt-6">
                        <h4 className="text-[#f39d0b] text-xl font-bold mb-3">О фильме</h4>
                        <p className="text-[#d7bca7] text-base md:text-lg leading-relaxed font-normal opacity-90">
                            {MOVIE_DATA.shortDescription}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};


