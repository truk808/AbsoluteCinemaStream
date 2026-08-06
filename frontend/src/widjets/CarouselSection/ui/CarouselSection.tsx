import {type Film, FilmCard} from "../../../entities/Film";
import {Carousel} from "../../../shared/ui";
import Spinner from "../../../shared/ui/Spinner/Spinner.tsx";

interface CarouselSectionProps {
    title: string;
    films: Film[] | undefined;
    loadMore?: () => void;
    isLoading: boolean;
}

export const CarouselSection = ({title, films, isLoading}: CarouselSectionProps) => {
    if(isLoading) return <Spinner/>
    return (
        <div className='my-6'>
            <h2 className='text-5xl font-black text-brand-text mb-5'>{title}</h2>
            <Carousel>
                {
                    films?.map(film => {
                        return <FilmCard film={film} />
                    })
                }
            </Carousel>
        </div>
    );
};

