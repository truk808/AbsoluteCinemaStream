import {FilmCardHorizontal} from "../../../entities/Film/ui/FilmCardHorizontal.tsx";
import type {CategoryData, PaginatedCategory} from "../../../entities/Film/model/types/categories.ts";
import type {SetURLSearchParams} from "react-router-dom";
import type {Film} from "../../../entities/Film";
import Spinner from "../../../shared/ui/Spinner/Spinner.tsx";

interface ProfilePageContentProps {
    SearchPageLoading:  Record<number, boolean>;
    filmsCategory: PaginatedCategory ,
    currentPage: number;
    setSearchParams:  SetURLSearchParams
}

export  const SearchPageContent = ({SearchPageLoading, filmsCategory, currentPage, setSearchParams}: ProfilePageContentProps) => {
    const showingFilm: CategoryData | undefined = filmsCategory?.[currentPage];

    const handlePageChange = (newPage: number) => {
        if (newPage < 1) return;

        setSearchParams((prevParams) => {
            const nextParams = new URLSearchParams(prevParams);
            nextParams.set("page", String(newPage));
            return nextParams;
        });
    };

    if(SearchPageLoading != undefined && SearchPageLoading[currentPage]) {
        return <Spinner />;
    }

    return (
        <div className="container mx-auto p-6 flex flex-col min-h-screen justify-between">
            <div>
                <h1 className="text-brand-text text-5xl mb-6 text-center font-bold">
                    Возможно, вы искали
                </h1>

                <div className="flex flex-col gap-4">
                    {showingFilm?.items.map((film: Film) => (
                        <FilmCardHorizontal key={film.kinopoiskId} film={film} />
                    ))}
                </div>
            </div>

            <div className="flex justify-center text-brand-text text-2xl font-medium m-6 flex gap-4">
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