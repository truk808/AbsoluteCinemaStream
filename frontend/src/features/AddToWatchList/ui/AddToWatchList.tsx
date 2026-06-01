import type {Film} from "../../../entities/Film";
import {useDispatch, useSelector} from "react-redux";
import {removeFilmFromWatchList, selectWatchlist, addFilmToWatchList} from "../../../entities/User";
import {useMemo} from "react";

interface AddToWatchListProps {
    film: Film;
}

export const AddToWatchList = ({film}: AddToWatchListProps) => {
    const dispatch = useDispatch();
    const watchList = useSelector(selectWatchlist);

    const isOnWatchList= useMemo(() => {
        const candidate = watchList.filter((item) => item.kinopoiskId === film.kinopoiskId);
        return candidate.length > 0;
    }, [watchList, dispatch, film]);

    function addToWatchList(): void {
        if (!isOnWatchList) {
            dispatch(addFilmToWatchList(film))
        } else {
            dispatch(removeFilmFromWatchList(film));
        }
    }

    return (
        <button
            onClick={() => {addToWatchList()}}
            className="w-14 h-14 bg-[#271f16] text-brand-text rounded-xl flex items-center justify-center cursor-pointer hover:bg-neutral-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill={ isOnWatchList ? '#f39d0b' : 'none'} viewBox="0 0 24 24" strokeWidth={2}
                 stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
            </svg>
        </button>
    );
};

