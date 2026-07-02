import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilmsByFilter, selectFilmsSearch } from "../../../entities/Film";
import { useEffect } from "react";
import { FilmCardHorizontal } from "../../../entities/Film/ui/FilmCardHorizontal.tsx";
import type { AppDispatch } from "../../../app/store";
import type { FetchCategoryArgs } from "../../../entities/Film/model/types/search.ts";

export const SearchPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch<AppDispatch>();
    const filmsSearch = useSelector(selectFilmsSearch);

    const currentPage = filmsSearch?.page || 1;
    const totalPages = filmsSearch?.totalPages || 1;

    useEffect(() => {
        const params = Object.fromEntries(searchParams.entries());

        const fetchArgs: FetchCategoryArgs = {
            keyword: params.keyword || undefined,
            page: params.page ? Number(params.page) : 1,
            countries: params.countries ? Number(params.countries) : undefined,
            genres: params.genres ? Number(params.genres) : undefined,
            order: params.order as 'RATING' | 'NUM_VOTE' | 'YEAR' | undefined,
            type: params.type as any,
            ratingFrom: params.ratingFrom ? Number(params.ratingFrom) : undefined,
            ratingTo: params.ratingTo ? Number(params.ratingTo) : undefined,
            yearFrom: params.yearFrom ? Number(params.yearFrom) : undefined,
            yearTo: params.yearTo ? Number(params.yearTo) : undefined,
        };

        dispatch(fetchFilmsByFilter(fetchArgs));
    }, [dispatch, searchParams]);

    const handlePageChange = (newPage: number) => {
        if (newPage < 1 || newPage > totalPages) return;

        const nextParams = new URLSearchParams(searchParams);
        nextParams.set('page', String(newPage));
        setSearchParams(nextParams);
    };

    return (
        <div className="container mx-auto p-6 flex flex-col min-h-screen justify-between">
            <div>
                <h1 className="text-brand-text text-2xl font-medium mb-6">
                    Возможно, вы искали
                </h1>

                {filmsSearch?.items?.length === 0 && (
                    <div className="text-brand-text-muted text-center py-10">
                        Ничего не найдено по заданным фильтрам
                    </div>
                )}

                <div className="flex flex-col gap-4">
                    {filmsSearch?.items?.map((item) => (
                        <FilmCardHorizontal key={item.kinopoiskId} film={item} />
                    ))}
                </div>
            </div>

            {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-8">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 border rounded-md text-brand-text disabled:opacity-50 disabled:cursor-not-allowed hover:bg-neutral-100 transition-colors"
                    >
                        Назад
                    </button>

                    <div className="flex items-center gap-1 text-brand-text font-medium px-4">
                        <span>{currentPage}</span>
                        <span className="text-neutral-400">/</span>
                        <span className="text-neutral-400">{totalPages}</span>
                    </div>

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 border rounded-md text-brand-text disabled:opacity-50 disabled:cursor-not-allowed hover:bg-neutral-100 transition-colors"
                    >
                        Вперед
                    </button>
                </div>
            )}
        </div>
    );
};