import type {ChangeEvent} from "react";
import type {FromToSliderProps} from "./FromToSlider.tsx";

export const useFromToSlider = ({ slider }: FromToSliderProps) => {


    const handleMinChange = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        if (Number.isNaN(Number(e.target.value))) return;
        if (Number(e.target.value) < slider.minValue) {
            return slider.setMinCurrentValue(slider.minValue);
        }
        const value = Math.min(Number(e.target.value), slider.maxCurrentValue - 1);
        slider.setMinCurrentValue(value);
    };

    const handleMaxChange = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        if (Number.isNaN(Number(e.target.value))) return;
        if (Number(e.target.value) > slider.maxValue) {
            return slider.setMaxCurrentValue(slider.maxValue);
        }
        const value = Math.max(Number(e.target.value), slider.minCurrentValue + 1);
        slider.setMaxCurrentValue(value);
    };

    const minLeft = ((slider.minCurrentValue - slider.minValue) / (slider.maxValue - slider.minValue)) * 100;
    const maxLeft = ((slider.maxCurrentValue - slider.minValue) / (slider.maxValue - slider.minValue)) * 100;

    return ({
        handleMinChange,
        handleMaxChange,
        minLeft,
        maxLeft,
    })
}