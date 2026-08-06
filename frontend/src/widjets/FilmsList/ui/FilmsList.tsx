import {CardList} from "../../../shared/ui";
import {type Film, FilmCard} from "../../../entities/Film";
import Spinner from "../../../shared/ui/Spinner/Spinner.tsx";

interface FilmListProps {
    title: string;
    films: Film[] | undefined
    addFilms: () => void;
    isLoading: boolean;
}

export const FilmsList = ({isLoading, title, films, addFilms}: FilmListProps) => {
    if(isLoading) return <Spinner/>
    return (
        <div>
            <h2 className='text-5xl font-black text-brand-text text-center my-6'>{title}</h2>
            <CardList
                show={'portion'}
                addItem={addFilms}
            >
                {
                    films?.map((film: Film) => {
                        return (
                            <FilmCard
                                key={film.kinopoiskId || film.imdbId}
                                film={film}
                            />
                        )
                    })
                }
            </CardList>
        </div>

    );
};
