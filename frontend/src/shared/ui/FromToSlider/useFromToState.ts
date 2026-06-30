import { useState } from 'react';

interface UseFromToStateParams {
    minValue?: number;
    maxValue?: number;
}

export const useFromToState = ({ minValue = 0, maxValue = 10 }: UseFromToStateParams = {}) => {
    const [minCurrentValue, setMinCurrentValue] = useState(minValue);
    const [maxCurrentValue, setMaxCurrentValue] = useState(maxValue);

    return {
        minValue,
        maxValue,
        minCurrentValue,
        setMinCurrentValue,
        maxCurrentValue,
        setMaxCurrentValue,
    };
};