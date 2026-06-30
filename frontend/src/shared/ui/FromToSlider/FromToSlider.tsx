import {useFromToSlider} from "./useFromToSlider.ts";

export interface FromToSliderProps {
    slider: {
        minCurrentValue: number;
        setMinCurrentValue: (value: number) => void;
        maxCurrentValue: number;
        setMaxCurrentValue: (value: number) => void;
        minValue: number;
        maxValue: number;
    }
    title: string;
}

export const FromToSlider = ({ slider, title }: FromToSliderProps) => {

    const {
        handleMinChange,
        handleMaxChange,
        minLeft,
        maxLeft,
    } = useFromToSlider({slider, title});

    return (
        <div className="flex flex-col items-center bg-brand-bg p-6 rounded-lg w-full min-w-[400px] max-w-md select-none">
            <span className="text-brand-text text-lg mb-4 font-medium">{title}</span>

            <div className="flex items-center w-full gap-3">
                <input
                    onChange={(e) => {
                        handleMinChange(e)
                    }}
                    value={slider.minCurrentValue}
                    type="text"
                    className='text-center w-16 h-9 flex items-center justify-center bg-[#2d2d2d] border border-brand-primary rounded-xl text-brand-text text-base'
                />

                <div className="relative flex-1 h-9 flex items-center">
                    <input
                        type="range"
                        min={slider.minValue}
                        max={slider.maxValue}
                        value={slider.minCurrentValue}
                        onChange={handleMinChange}
                        className="absolute w-full appearance-none bg-transparent pointer-events-none z-20 h-0 accent-transparent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand-primary [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-brand-primary [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
                    />
                    <input
                        type="range"
                        min={slider.minValue}
                        max={slider.maxValue}
                        value={slider.maxCurrentValue}
                        onChange={handleMaxChange}
                        className="absolute w-full appearance-none bg-transparent pointer-events-none z-20 h-0 accent-transparent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand-primary [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-brand-primary [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
                    />

                    <div className="relative w-full h-0.5 bg-[#4a4a4a] rounded">
                        <div
                            className="absolute h-full bg-brand-primary"
                            style={{left: `${minLeft}%`, right: `${100 - maxLeft}%`}}
                        />
                        <div
                            className="absolute w-1 h-3 bg-brand-primary top-1/2 -translate-y-1/2 -translate-x-1/2 z-10"
                            style={{left: `${minLeft}%`}}
                        />
                        <div
                            className="absolute w-1 h-3 bg-brand-primary top-1/2 -translate-y-1/2 -translate-x-1/2 z-10"
                            style={{left: `${maxLeft}%`}}
                        />
                    </div>
                </div>

                <input
                    onChange={(e) => {
                        handleMaxChange(e)
                    }}
                    value={slider.maxCurrentValue}
                    type="text"
                    className='text-center w-16 h-9 flex items-center justify-center bg-[#2d2d2d] border border-brand-primary rounded-xl text-brand-text text-base'
                />
            </div>
        </div>
    );
}