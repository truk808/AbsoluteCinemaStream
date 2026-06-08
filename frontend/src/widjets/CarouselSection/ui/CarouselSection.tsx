import {type Film, FilmCard} from "../../../entities/Film";
import {Carousel} from "../../../shared/ui";

interface CarouselSectionProps {
    title: string;
    films: Film[]
    loadMore?: () => void;
}

export const CarouselSection = ({title, films}: CarouselSectionProps) => {
    return (
        <div className='my-6'>
            <h2 className='text-5xl font-black text-brand-text mb-5'>{title}</h2>
            <Carousel>
                {
                    films.map(film => {
                        return <FilmCard film={film} />
                    })
                }
            </Carousel>
        </div>
    );
};

