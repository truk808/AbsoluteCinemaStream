import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilmsByFilter, selectFilmsCategory, clearSearchCategory } from "../../../entities/Film";
import { useEffect, useMemo } from "react";
import { FilmCardHorizontal } from "../../../entities/Film/ui/FilmCardHorizontal.tsx";
import type { AppDispatch } from "../../../app/store";

export const SearchPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const dispatch = useDispatch<AppDispatch>();
    const filmsCategory = useSelector(selectFilmsCategory)['SEARCH'];

    const currentPage = Number(searchParams.get("page")) || 1;

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

    const showingFilm = filmsCategory?.[currentPage];

    const handlePageChange = (newPage: number) => {
        if (newPage < 1) return;

        setSearchParams((prevParams) => {
            const nextParams = new URLSearchParams(prevParams);
            nextParams.set("page", String(newPage));
            return nextParams;
        });
    };

    return (
        <div className="container mx-auto p-6 flex flex-col min-h-screen justify-between">
            <div>
                <h1 className="text-brand-text text-2xl font-medium mb-6">
                    Возможно, вы искали
                </h1>

                <div className="flex flex-col gap-4">
                    {showingFilm?.items.map((film) => (
                        <FilmCardHorizontal key={film.kinopoiskId} film={film} />
                    ))}
                </div>
            </div>

            <div className="text-brand-text text-2xl font-medium mb-6 flex gap-4">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage <= 1}
                    className="disabled:opacity-50 cursor-pointer"
                >
                    назад
                </button>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={showingFilm && currentPage >= showingFilm.totalPages}
                    className="disabled:opacity-50 cursor-pointer"
                >
                    вперед
                </button>
            </div>
        </div>
    );
};