import { FromToSlider, Modal } from "../../../shared/ui";
import { useFilterModal } from "../model/useFilterModal.ts";
import { DropdownSelect } from "../../../shared/ui/DropdownSelect";
import { COUNTRY_OPTIONS, GENRES_OPTIONS, SORT_OPTIONS } from "../../../shared/config";

export const FilterModal = () => {
    const {
        isOpen,
        setIsOpen,
        ratingSlider,
        yearSlider,
        setSelectedCountries,
        selectedCountries,
        setSelectedGenres,
        selectedGenres,
        setSelectedSort,
        selectedSort,
        searchValue,
        setSearchValue,
        handleOnClick
    } = useFilterModal();

    return (
        <>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div className="w-full h-full max-w-2xl p-8 flex flex-col items-center justify-center gap-6 rounded-2xl">
                    <h2 className='text-center text-4xl text-brand-text'>Фильтры</h2>
                    <div className="flex items-center justify-between gap-10 w-full">
                        <div className="flex flex-col gap-7 items-center w-48">
                            <DropdownSelect
                                selectedValues={selectedCountries}
                                onChange={setSelectedCountries}
                                options={COUNTRY_OPTIONS}
                                label={selectedCountries.length > 0 ? `Выбрано: ${selectedCountries.length}` : 'Страны'}
                                type="checkbox"
                            />
                            <DropdownSelect
                                selectedValues={selectedGenres}
                                onChange={setSelectedGenres}
                                options={GENRES_OPTIONS}
                                label={selectedGenres.length > 0 ? `Выбрано: ${selectedGenres.length}` : 'Жанры'}
                                type="checkbox"
                            />
                            <DropdownSelect
                                selectedValues={selectedSort}
                                onChange={setSelectedSort}
                                options={SORT_OPTIONS}
                                label={selectedSort.length > 0 ? `Выбрано: ${selectedSort[0]}` : 'Сортировка'}
                                type="radio"
                            />
                        </div>

                        <div className="flex-1 flex flex-col gap-4">
                            <FromToSlider title="Рейтинг" slider={ratingSlider} />
                            <FromToSlider title="Год" slider={yearSlider} />
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 w-full items-center mt-2">
                        <input
                            value={searchValue}
                            onChange={(e) => {setSearchValue(e.target.value)}}
                            className="w-full border border-brand-primary bg-[#2d2d2d] rounded-xl px-4 h-9 text-brand-text text-base focus:outline-none transition-all placeholder:text-brand-text-muted"
                            type="text"
                            placeholder="Поиск..."
                        />
                        <button
                            onClick={() => {handleOnClick()}}
                            type="button"
                            className="flex items-center justify-center w-2/3 h-9 px-6 bg-[#2d2d2d] border border-brand-primary rounded-xl text-brand-text text-base font-medium transition-colors duration-200 cursor-pointer outline-none hover:bg-[#3d3d3d] hover:text-brand-primary-hover active:bg-[#222222]"
                        >
                            Найти
                        </button>
                    </div>

                </div>
            </Modal>

            <button onClick={() => setIsOpen(true)}>
                <svg fill="#eedfd0" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="35" height="35">
                    <path d="M1,4.75H3.736a3.728,3.728,0,0,0,7.195,0H23a1,1,0,0,0,0-2H10.931a3.728,3.728,0,0,0-7.195,0H1a1,1,0,0,0,0,2ZM7.333,2a1.75,1.75,0,1,1-1.75,1.75A1.752,1.752,0,0,1,7.333,2Z" />
                    <path d="M23,11H20.264a3.727,3.727,0,0,0-7.194,0H1a1,1,0,0,0,0,2H13.07a3.727,3.727,0,0,0,7.194,0H23a1,1,0,0,0,0-2Zm-6.333,2.75A1.75,1.75,0,1,1,18.417,12,1.752,1.752,0,0,1,16.667,13.75Z" />
                    <path d="M23,19.25H10.931a3.728,3.728,0,0,0-7.195,0H1a1,1,0,0,0,0,2H3.736a3.728,3.728,0,0,0,7.195,0H23a1,1,0,0,0,0-2ZM7.333,22a1.75,1.75,0,1,1,1.75-1.75A1.753,1.753,0,0,1,7.333,22Z" />
                </svg>
            </button>
        </>
    );
};