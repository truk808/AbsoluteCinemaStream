import { useHeroMovieInfo } from "../model/useHeroMovieInfo.ts";
import Spinner from "../../../shared/ui/Spinner/Spinner.tsx";
import { HeroMoviePoster } from "./HeroMoviePoster.tsx";
import { HeroMovieDescription } from "./HeroMovieDescription.tsx";
import { HeroMovieBackdrop } from "./HeroMovieBackdrop.tsx";
import { HeroMovieStaffList } from "./HeroMovieStaffList.tsx";

export const HeroMovieInfo = () => {
    const { film, staff, trailer, isLoading } = useHeroMovieInfo();

    if (!film) return <div className="w-full h-full text-white text-9xl flex justify-center items-center">фильма нет! :(</div>;

    if (isLoading) return <Spinner />;

    return (
        <div className="min-h-screen bg-brand-bg overflow-x-hidden">
            <HeroMovieBackdrop film={film} />
            <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] lg:grid-cols-[300px_1fr_300px] gap-8 items-start">

                    <div className="w-full justify-self-center md:justify-self-start max-w-[300px]">
                        <HeroMoviePoster film={film} trailer={trailer} />
                    </div>

                    <div className="w-full">
                        <HeroMovieDescription film={film} />
                    </div>

                    <div className="w-full md:col-span-2 lg:col-span-1">
                        <HeroMovieStaffList staff={staff} />
                    </div>

                </div>
            </div>
        </div>
    );
};