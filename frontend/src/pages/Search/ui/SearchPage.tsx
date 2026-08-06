import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {fetchFilmsByFilter, selectFilmsCategory, clearSearchCategory, categoriesLoading} from "../../../entities/Film";
import { useEffect, useMemo } from "react";
import type { AppDispatch } from "../../../app/store";
import {SearchPageContent} from "./SearchPageContent.tsx";

export const SearchPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [searchParams, setSearchParams] = useSearchParams();
    const filmsCategory = useSelector(selectFilmsCategory)['SEARCH'];
    const currentPage = Number(searchParams.get("page")) || 1;
    const SearchPageLoading = useSelector(categoriesLoading)["SEARCH"]

    const baseParams = useMemo(() => {
        const params = Object.fromEntries(searchParams.entries());

        return {
            keyword: params.keyword || undefined,
            countries: params.countries ? Number(params.countries) : undefined,
            genres: params.genres ? Number(params.genres) : undefined,
            order: params.order as 'RATING' | 'NUM_VOTE' | 'YEAR' | undefined,
            type: params.type as any,
            ratingFrom: params.ratingFrom ? Number(params.ratingFrom) : undefined,
            ratingTo: params.ratingTo ? Number(params.ratingTo) : undefined,
            yearFrom: params.yearFrom ? Number(params.yearFrom) : undefined,
            yearTo: params.yearTo ? Number(params.yearTo) : undefined,
        };

    }, [searchParams]);

    const baseParamsString = JSON.stringify(baseParams);

    useEffect(() => {
        dispatch(clearSearchCategory());
    }, [dispatch, baseParamsString]);

    useEffect(() => {
        if (!filmsCategory?.[currentPage]) {
            dispatch(fetchFilmsByFilter({ ...baseParams, page: currentPage }));
        }
    }, [dispatch, currentPage, baseParams, filmsCategory]);

    if(!filmsCategory && !SearchPageLoading){
        return <div className='text-brand-text text-5xl mb-6 text-center font-bold'>По запросу ничего не найдено</div>
    }

    return (
        <div>
            <SearchPageContent
                SearchPageLoading={SearchPageLoading}
                currentPage={currentPage}
                setSearchParams={setSearchParams}
                filmsCategory={filmsCategory}
            />
        </div>
    );
};