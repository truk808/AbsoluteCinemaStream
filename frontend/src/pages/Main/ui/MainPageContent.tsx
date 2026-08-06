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
    } = useMainPageContent(filmsCategory);

    return (
        <div>
            <FilmsList
                title={'Популярное'}
                films={filmsPopular}
                addFilms={addFilms}
            />
            <CarouselSection
                title={'Комедии'}
                films={filmsComic}
            />
            <CarouselSection
                title={'Зондбэ'}
                films={filmsZombie}
            />
        </div>
    );
};
