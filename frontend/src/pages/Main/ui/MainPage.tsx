// import {HeroBanner} from "../../../widjets/HeroBanner";
import {NEW_FILMS} from '../../../consts.ts'

import {CarouselSection} from "../../../widjets/CarouselSection";
import {FilmCard} from "../../../entities/Film";
import {CardList} from "../../../shared/ui";

export const MainPage = () => {
    return (
        <div className=''>
            <CarouselSection title={'Попул'} films={NEW_FILMS.items}/>
            <CardList>
                {[
                    <FilmCard film={NEW_FILMS.items[0]} />,
                    <FilmCard film={NEW_FILMS.items[1]} />,
                    <FilmCard film={NEW_FILMS.items[2]} />,
                    <FilmCard film={NEW_FILMS.items[3]} />,
                    <FilmCard film={NEW_FILMS.items[4]} />,
                    <FilmCard film={NEW_FILMS.items[5]} />,
                    <FilmCard film={NEW_FILMS.items[0]} />,
                    <FilmCard film={NEW_FILMS.items[1]} />,
                    <FilmCard film={NEW_FILMS.items[2]} />,
                    <FilmCard film={NEW_FILMS.items[3]} />,
                    <FilmCard film={NEW_FILMS.items[4]} />,
                    <FilmCard film={NEW_FILMS.items[5]} />,
                    <FilmCard film={NEW_FILMS.items[0]} />,
                    <FilmCard film={NEW_FILMS.items[1]} />,
                    <FilmCard film={NEW_FILMS.items[2]} />,
                    <FilmCard film={NEW_FILMS.items[3]} />,
                    <FilmCard film={NEW_FILMS.items[4]} />,
                    <FilmCard film={NEW_FILMS.items[5]} />,
                    <FilmCard film={NEW_FILMS.items[0]} />,
                    <FilmCard film={NEW_FILMS.items[1]} />,
                    <FilmCard film={NEW_FILMS.items[2]} />,
                    <FilmCard film={NEW_FILMS.items[3]} />,
                    <FilmCard film={NEW_FILMS.items[4]} />,
                    <FilmCard film={NEW_FILMS.items[5]} />,
                    <FilmCard film={NEW_FILMS.items[0]} />,
                    <FilmCard film={NEW_FILMS.items[1]} />,
                    <FilmCard film={NEW_FILMS.items[2]} />,
                    <FilmCard film={NEW_FILMS.items[3]} />,
                    <FilmCard film={NEW_FILMS.items[4]} />,
                    <FilmCard film={NEW_FILMS.items[5]} />,
                    <FilmCard film={NEW_FILMS.items[0]} />,
                    <FilmCard film={NEW_FILMS.items[1]} />,
                    <FilmCard film={NEW_FILMS.items[2]} />,
                    <FilmCard film={NEW_FILMS.items[3]} />,
                    <FilmCard film={NEW_FILMS.items[4]} />,
                    <FilmCard film={NEW_FILMS.items[5]} />,
                ]}

            </CardList>
        </div>
    );
};