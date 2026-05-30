// import {HeroBanner} from "../../../widjets/HeroBanner";
import {NEW_FILMS} from '../../../consts.ts'

import {CarouselSection} from "../../../widjets/CarouselSection";

export const MainPage = () => {
    return (
        <div className=''>
            <CarouselSection title={'Популярное сейчас'} films={NEW_FILMS.items}/>
        </div>
    );
};