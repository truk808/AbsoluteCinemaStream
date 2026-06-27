import type {RatingsUserFilm, User} from "../../../entities/User/model/type.ts";
import {useMemo} from "react";
import {OpenProfileSettings} from "../../../features/OpenProfileSettings";

interface ProfileHeroProps {
    user: User;
    ratings: RatingsUserFilm
}


export const ProfileHero = ({ user, ratings }: ProfileHeroProps) => {

    const formattedDate = user.dateRegistration
        ? new Date(user.dateRegistration).toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }).replace(' г.', '')
        : "1 января 1000";

    const stats = useMemo(() => {
        return [
            { count: Object.values(ratings).length, label: "ФИЛЬМОВ" },
            { count: 0, label: "РЕЦЕНЗИЙ" },
        ]
    }, [ratings]);

    return (
        <div className="w-full max-w-[400px] md:max-w-[1200px] bg-brand-bg rounded-[32px] flex flex-col md:flex-row items-center text-center md:text-left justify-between gap-6 md:gap-8 mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 w-full md:w-auto">
                <div className="relative shrink-0">
                    <div className="w-32 h-32 md:w-36 md:h-36 rounded-[24px] md:rounded-[28px] overflow-hidden border border-neutral-800">
                        <img
                            src={user.img}
                            alt={`${user.firstName} ${user.lastName}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <button className="absolute -bottom-1 -right-1 bg-brand-primary hover:bg-brand-primary-hover text-brand-bg p-2 rounded-xl shadow-lg transition-transform active:scale-90 cursor-pointer flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col gap-4 md:gap-5">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-brand-text font-black text-2xl md:text-3xl tracking-tight">
                            {user.firstName || "Клевое"} {user.lastName || "Имя"}
                        </h1>
                        <p className="text-neutral-500 text-xs md:text-sm font-semibold">
                            Участник с {formattedDate}
                        </p>
                    </div>
                    <div className="grid grid-cols-3 md:flex gap-0 md:gap-8 border-t border-b md:border-none border-neutral-900/60 py-3 md:py-0 w-full">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`flex flex-col md:flex-row items-center md:gap-3 justify-center ${
                                    index === 1 ? 'border-x md:border-none border-neutral-800/60 px-2 md:px-0' : ''
                                }`}
                            >
                                <span className="text-brand-primary text-xl md:text-2xl font-black tracking-tight leading-none">
                                    {stat.count}
                                </span>
                                <span className="text-neutral-500 text-[9px] md:text-xs font-black tracking-wider uppercase md:mt-0.5">
                                    {stat.label}
                                </span>
                                {/* Тонкий вертикальный разделитель для десктопа (кроме последнего элемента) */}
                                {index < stats.length - 1 && (
                                    <div className="hidden md:block w-[1px] h-5 bg-neutral-800 ml-5" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <div className="flex w-full md:w-auto gap-3 items-center shrink-0">
                <OpenProfileSettings />
            </div>

        </div>
    );
};