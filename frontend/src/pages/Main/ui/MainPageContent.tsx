import {FilmsList} from "../../../widjets/FilmsList";
import type {FilmCategories} from "../../../entities/Film/model/types/categories.ts";
import {CarouselSection} from "../../../widjets/CarouselSection";
import {useMainPageContent} from "../model/useMainPageContent.tsx";

interface  MainPageContentProps {
    filmsCategory: FilmCategories
}

export const MainPageContent = ({filmsCategory}: MainPageContentProps) => {
    const {
        filmsComic,
        filmsZombie,
        filmsPopular,
        addFilms,
        isFilmsPopular,
        isFilmsZombie,
        isFilmsComic,
    } = useMainPageContent(filmsCategory);

    return (
        <div>
            <FilmsList
                isLoading={isFilmsPopular}
                title={'Популярное'}
                films={filmsPopular}
                addFilms={addFilms}
            />
            <CarouselSection
                isLoading={isFilmsZombie}
                title={'Зондбэ'}
                films={filmsZombie}
            />
            <CarouselSection
                isLoading={isFilmsComic}
                title={'Комедии'}
                films={filmsComic}
            />
        </div>
    );
};
