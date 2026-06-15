import {MovieSort} from "./FilmSort.tsx";

interface FilterFilmProps {
    searchValue: string;
    setSearchValue: (searchValue: string) => void;
    sortOrder: string
    setSortOrder: (value: string) => {}
    sortField: string
    setSortField: (value: string) => {}
}

export const FilterFilm = ({setSearchValue, searchValue}: FilterFilmProps) => {

    return (
        <div className='w-full max-w-[400px] md:max-w-[1200px] bg-brand-bg rounded-[32px] flex flex-col md:flex-row items-center text-center md:text-left justify-between gap-6 md:gap-8 mx-auto'>
            <input
                className={`max-w-[400px] w-full border border-brand-primary rounded-md px-3 py-1.5 text-white text-sm focus:outline-none transition-all focus:bg-neutral-900`}
                type="text"
                placeholder="Поиск..."
                onChange={(e) => {setSearchValue(e.target.value)}}
                value={searchValue}
            />
            <MovieSort />
        </div>
    );
};

