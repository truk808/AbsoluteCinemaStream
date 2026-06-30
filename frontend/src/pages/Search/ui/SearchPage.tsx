import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilmsByKeywords, selectFilmsSearch } from "../../../entities/Film";
import { useEffect } from "react";
import { FilmCardHorizontal } from "../../../entities/Film/ui/FilmCardHorizontal.tsx";
import type { AppDispatch } from "../../../app/store";

export const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch<AppDispatch>();
    const filmsSearch = useSelector(selectFilmsSearch);

    useEffect(() => {
        console.log(filmsSearch);
    }, [filmsSearch])

    useEffect(() => {
        const params = Object.fromEntries(searchParams.entries());

        const fetchArgs = {
            keyword: params.keyword || undefined,
            page: params.page ? Number(params.page) : 1,
            countries: params.countries ? [params.countries] : undefined,
            genres: params.genres ? [params.genres] : undefined,
            order: params.order as 'RATING' | 'NUM_VOTE' | 'YEAR' | undefined,
            type: params.type as any,
            ratingFrom: params.ratingFrom ? Number(params.ratingFrom) : undefined,
            ratingTo: params.ratingTo ? Number(params.ratingTo) : undefined,
            yearFrom: params.yearFrom ? Number(params.yearFrom) : undefined,
            yearTo: params.yearTo ? Number(params.yearTo) : undefined,
        };

        dispatch(fetchFilmsByKeywords(fetchArgs));
    }, [dispatch, searchParams]);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-brand-text text-2xl font-medium mb-6">
                Возможно, вы искали
            </h1>

            {filmsSearch?.films?.length === 0 && (
                <div className="text-brand-text-muted text-center py-10">
                    Ничего не найдено по заданным фильтрам
                </div>
            )}

            <div className="flex flex-col gap-4">
                {filmsSearch?.films?.map((film) => (
                    <FilmCardHorizontal key={film.filmId} film={film} />
                ))}
            </div>
        </div>
    );
};