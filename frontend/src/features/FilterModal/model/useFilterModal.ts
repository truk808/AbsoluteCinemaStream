import {useCallback, useEffect, useState} from "react";
import {useFromToState} from "../../../shared/ui";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../../shared/config";

export const useFilterModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const ratingSlider = useFromToState({maxValue: 10, minValue: 0});
    const yearSlider = useFromToState({maxValue: 3000, minValue: 1000});

    const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
    const [selectedSort, setSelectedSort] = useState<string[]>([]);

    useEffect(() => {
        console.log(selectedSort)
    }, [selectedSort]);

    const [searchValue, setSearchValue] = useState<string>('');

    const [page, setPage] = useState<number>(1);

    const navigate = useNavigate();

    function handleOnClick() {
        const params = new URLSearchParams();

        params.append('page', `${page}`)

        if (searchValue.trim()) {
            params.append('keyword', searchValue.trim());
        }

        if (selectedCountries.length > 0) {
            params.append('countries', selectedCountries[0]);
        }

        if (selectedGenres.length > 0) {
            params.append('genres', selectedGenres[0]);
        }

        if (selectedSort.length > 0) {
            params.append('order', selectedSort[0]);
        }

        if (ratingSlider.minCurrentValue !== 0) {
            params.append('ratingFrom', String(ratingSlider.minCurrentValue));
        }
        if (ratingSlider.maxCurrentValue !== 10) {
            params.append('ratingTo', String(ratingSlider.maxCurrentValue));
        }

        if (yearSlider.minCurrentValue !== 1000) {
            params.append('yearFrom', String(yearSlider.minCurrentValue));
        }
        if (yearSlider.maxCurrentValue !== 3000) {
            params.append('yearTo', String(yearSlider.maxCurrentValue));
        }

        setIsOpen(false);

        console.log(`url ${ROUTES.SEARCH}?${params.toString()}`)

        navigate(`${ROUTES.SEARCH}?${params.toString()}`);
    }

    const handleInputChange = useCallback((e:  React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }, [])

    return {
        isOpen,
        setIsOpen,

        ratingSlider,
        yearSlider,

        selectedCountries,
        setSelectedCountries,
        selectedGenres,
        setSelectedGenres,
        selectedSort,
        setSelectedSort,

        searchValue,
        setSearchValue,
        handleOnClick,

        handleInputChange,
        setPage
    }
}