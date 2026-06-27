import type {ProfileTabsProps} from "../ui/ProfileTabs.tsx";
import {useMemo, useState} from "react";

type SortField = 'alphabet' | 'kpRating' | 'userRating';
type SortOrder = 'asc' | 'desc' | null;

function stringCompare(a?: string | null, b?: string | null) {
    const aa = (a || '').toString().toLowerCase();
    const bb = (b || '').toString().toLowerCase();
    if (aa < bb) return -1;
    if (aa > bb) return 1;
    return 0;
}

export const useProfileTabs = ({watchList, ratings} :ProfileTabsProps) => {
    const [searchValue, setSearchValue] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<SortOrder>(null);
    const [sortField, setSortField] = useState<SortField | null>(null);

    const filterAndSortWatchList = useMemo(() => {
        const q = searchValue.trim().toLowerCase();
        let list = watchList.filter((film) => (
            !q || (film.nameRu || '').toLowerCase().includes(q)
        ));

        if (!sortOrder || !sortField) return list;

        list = [...list].sort((a, b) => {
            if (sortField === 'alphabet') {
                return stringCompare(a.nameRu, b.nameRu) * (sortOrder === 'asc' ? 1 : -1);
            }

            if (sortField === 'kpRating') {
                const va = a.ratingKinopoisk ?? 0;
                const vb = b.ratingKinopoisk ?? 0;
                return (va - vb) * (sortOrder === 'asc' ? 1 : -1);
            }

            // userRating not available on plain watchList; keep original order
            return 0;
        });

        return list;
    }, [watchList, searchValue, sortOrder, sortField]);

    const filterAndSortRatings = useMemo(() => {
        const q = searchValue.trim().toLowerCase();
        let list = Object.values(ratings).filter(({film}) => (
            !q || (film.nameRu || '').toLowerCase().includes(q)
        ));

        if (!sortOrder || !sortField) return list;

        list = [...list].sort((a, b) => {
            if (sortField === 'alphabet') {
                return stringCompare(a.film.nameRu, b.film.nameRu) * (sortOrder === 'asc' ? 1 : -1);
            }

            if (sortField === 'kpRating') {
                const va = a.film.ratingKinopoisk ?? 0;
                const vb = b.film.ratingKinopoisk ?? 0;
                return (va - vb) * (sortOrder === 'asc' ? 1 : -1);
            }

            if (sortField === 'userRating') {
                const va = a.score ?? 0;
                const vb = b.score ?? 0;
                return (va - vb) * (sortOrder === 'asc' ? 1 : -1);
            }

            return 0;
        });

        return list;
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