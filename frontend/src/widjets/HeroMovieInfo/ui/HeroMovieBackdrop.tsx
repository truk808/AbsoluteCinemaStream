import type {Film} from "../../../entities/Film";

export const HeroMovieBackdrop = ({film}: {film: Film}) => {
    return (
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
    );
};

