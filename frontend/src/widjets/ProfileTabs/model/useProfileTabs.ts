import type {ProfileTabsProps} from "../ui/ProfileTabs.tsx";
import {useMemo, useState} from "react";

type SortField = 'alphabet' | 'kpRating' | 'userRating';
type SortOrder = 'asc' | 'desc' | null;

function filter(film, value) {

}

export const useProfileTabs = ({watchList, ratings} :ProfileTabsProps) => {
    const [searchValue, setSearchValue] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<SortOrder>(null);
    const [sortField, setSortField] = useState<SortField>("alphabet");

    const filterAndSortWatchList = useMemo(() => {
        const filter = watchList.filter((film) => film.nameRu?.toLowerCase().includes(searchValue.toLowerCase()));
        return filter
    }, [watchList, searchValue, sortOrder, sortField]);

    const filterAndSortRatings = useMemo(() => {
        const filter = Object.values(ratings).filter((filmAndScore) => {
            return  filmAndScore.film.nameRu?.toLowerCase().includes(searchValue.toLowerCase());
        });
        return filter
    }, [ratings, searchValue, sortOrder, sortField]);

    return {
        filterAndSortRatings,
        filterAndSortWatchList,

        searchValue,
        setSearchValue,

        sortOrder,
        setSortOrder,

        sortField,
        setSortField,
    }
}