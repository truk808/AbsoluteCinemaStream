import {MovieSort} from "./FilmSort.tsx";

type SortField = 'alphabet' | 'kpRating' | 'userRating' | null;
type SortOrder = 'asc' | 'desc' | null;

interface FilterFilmProps {
    searchValue: string;
    setSearchValue: (searchValue: string) => void;
    sortOrder: SortOrder;
    setSortOrder: (value: SortOrder) => void;
    sortField: SortField;
    setSortField: (value: SortField) => void;
}

export const FilterFilm = ({setSearchValue, searchValue, setSortField, setSortOrder}: FilterFilmProps) => {

    return (
        <div className='w-full max-w-[400px] md:max-w-[1200px] bg-brand-bg rounded-[32px] flex flex-col md:flex-row items-center text-center md:text-left justify-between gap-6 md:gap-8 mx-auto'>
            <input
                className={`max-w-[400px] w-full border mt-8 mb-5 border-brand-primary rounded-md px-3 py-1.5 text-white text-sm focus:outline-none transition-all focus:bg-neutral-900`}
                type="text"
                placeholder="Поиск..."
                onChange={(e) => {setSearchValue(e.target.value)}}
                value={searchValue}
            />
            <MovieSort
                onSortChange={(field, order) => {
                    setSortField(order ? field : null);
                    setSortOrder(order);
                }}
            />
        </div>
    );
};

