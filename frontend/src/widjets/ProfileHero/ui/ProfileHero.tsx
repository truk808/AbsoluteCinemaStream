import type { User } from "../../../entities/User/model/type.ts";

interface ProfileHeroProps {
    user: User;
}

export const ProfileHero = ({ user }: ProfileHeroProps) => {
    const stats = [
        { count: 142, label: "ФИЛЬМОВ" },
        { count: 48, label: "РЕЦЕНЗИЙ" },
        { count: 12, label: "СПИСКОВ" }
    ];

    const formattedDate = user.dateRegistration
        ? new Date(user.dateRegistration).toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }).replace(' г.', '')
        : "1 января 1000";

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
                            {user.firstName || "Александр"} {user.lastName || "Громов"}
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
                <button className="flex-1 md:flex-none bg-brand-primary hover:bg-brand-primary text-brand-bg font-black text-sm py-3.5 px-8 rounded-2xl transition-all active:scale-[0.98] cursor-pointer shadow-lg">
                    Подписка Pro
                </button>

                <button
                    className="bg-[#271f16] hover:bg-[#382d20] border border-neutral-800/80 text-brand-text p-3.5 rounded-2xl transition-all active:scale-95 cursor-pointer flex items-center justify-center"
                    aria-label="Настройки"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.43l-1.003.767a1.123 1.123 0 00-.417 1.03c.004.074.006.148.006.222 0 .074-.002.148-.006.222a1.123 1.123 0 00.417 1.03l1.003.767a1.125 1.125 0 01.26 1.43l-1.296 2.247a1.125 1.125 0 01-1.37.49l-1.216-.456a1.125 1.125 0 00-1.076.124a2.08 2.08 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281a1.125 1.125 0 00-.646-.87a2.08 2.08 0 01-.22-.127c-.324-.196-.72-.257-1.075-.124l-1.217.456a1.125 1.125 0 01-1.37-.49l-1.296-2.247a1.125 1.125 0 01.26-1.43l1.003-.767a1.122 1.122 0 00.417-1.03a2.07 2.07 0 01-.006-.222c0-.074.002-.149.006-.222a1.122 1.122 0 00-.417-1.03l-1.003-.767a1.125 1.125 0 01-.26-1.43l1.296-2.247a1.125 1.125 0 011.37-.49l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </button>
            </div>

        </div>
    );
};