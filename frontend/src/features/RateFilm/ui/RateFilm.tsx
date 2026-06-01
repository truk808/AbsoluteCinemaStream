import {Modal} from "../../../shared/ui";
import {useEffect, useState} from "react";
import type {Film} from "../../../entities/Film";
import {useDispatch, useSelector} from "react-redux";
import {addFilmInRatings, removeFilmFromRatings} from "../../../entities/User/model/slice.ts";
import {selectRatings} from "../../../entities/User";

interface RateFilmProps {
    film: Film;
}

export const RateFilm = ({film}: RateFilmProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [rating, setRating] = useState<number | null>(null);

    const dispatch = useDispatch();


    const ratings = useSelector(selectRatings);

    useEffect(() => {
        console.log(ratings);
    }, [ratings]);

    function rateFilm() {
        if (rating === null) {
            console.log('deleteed')
            dispatch(removeFilmFromRatings(film.kinopoiskId))
        } else  {
            console.log(film)
            dispatch(addFilmInRatings({film, score: rating }));
        }

    }

    return (
        <>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div className="flex flex-col items-center justify-center text-brand-text">
                    <h1 className='font-bold text-brand-text text-4xl py-8'>Оцените фильм</h1>
                    <div className="grid grid-cols-6 sm:flex sm:flex-wrap justify-center gap-2 mb-8">
                        {Array.from({length: 11}, (_, i) => {
                            const isSelected = rating === i;
                            return (
                                <button
                                    key={i}
                                    type="button"
                                    onClick={() => setRating(i)}
                                    className={`w-11 h-11 sm:w-12 sm:h-12 text-base font-black rounded-xl cursor-pointer flex items-center justify-center transition-all duration-200 active:scale-90 ${
                                        isSelected
                                            ? 'bg-brand-primary text-brand-bg shadow-lg shadow-brand-primary/20 scale-105'
                                            : 'bg-[#271f16] text-brand-text/80 hover:bg-neutral-800 hover:text-brand-primary border border-transparent hover:border-brand-primary/30'
                                    }`}
                                >
                                    {i}
                                </button>
                            );
                        })}
                    </div>
                    <div className='flex gap-3'>
                        <button
                            onClick={() => {
                                rateFilm()
                            }}
                            className="flex-1 bg-brand-primary text-brand-bg font-bold text-base px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 cursor-pointer hover:bg-brand-primary-hover transition-colors">
                            Оценить фильм
                        </button>
                        <button
                            onClick={() => {
                                setRating(null)
                            }}
                            className="flex-1 bg-brand-text-muted text-brand-bg font-bold text-base px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 cursor-pointer hover:bg-brand-primary-hover transition-colors">
                            Сбросить оценку
                        </button>
                    </div>


                </div>
            </Modal>
            <button
                onClick={() => {
                    setIsOpen(true)
                }}
                className="flex-1 bg-brand-primary text-brand-bg font-bold text-base px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 cursor-pointer hover:bg-brand-primary-hover transition-colors">
                Оценить фильм
            </button>
        </>

    );
};

