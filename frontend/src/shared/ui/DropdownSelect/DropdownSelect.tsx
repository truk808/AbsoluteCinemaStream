import {useDropdownSelect} from "./useDropdownSelect.ts";
import type {SelectOption} from "./types.ts";

interface DropdownSelectProps {
    label: string;
    options: SelectOption[];
    selectedValues: string[];
    onChange: (values: string[]) => void;
    type?: 'checkbox' | 'radio';
}

export const DropdownSelect = ({
                                   label,
                                   options,
                                   selectedValues,
                                   onChange,
                                   type = 'checkbox',
                               }: DropdownSelectProps) => {

    const {
        dropdownRef,
        setIsOpen,
        handleOptionClick,
        isOpen
    } = useDropdownSelect({selectedValues, onChange, type,})

    return (
        <div ref={dropdownRef} className="relative inline-block w-48 select-none">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full h-9 px-4 bg-[#2d2d2d] border border-brand-primary rounded-xl text-brand-text text-base cursor-pointer outline-none transition-colors"
            >
                <span className="truncate">{label}</span>
                <span
                    className={`w-2 h-2 border-r-2 border-b-2 border-brand-primary transform transition-transform duration-200 ${
                        isOpen ? 'rotate-[-135deg] translate-y-[2px]' : 'rotate-[45deg] translate-y-[-2px]'
                    }`}
                />
            </button>

            {isOpen && (
                <div className="absolute left-0 right-0 mt-2 bg-[#2d2d2d] border border-brand-primary rounded-xl overflow-hidden z-50 shadow-lg max-h-60 overflow-y-auto">
                    {options.map((option) => {
                        const isSelected = selectedValues.includes(option.value);
                        return (
                            <label
                                key={option.value}
                                className="flex items-center gap-3 px-4 py-2 hover:bg-[#3d3d3d] cursor-pointer text-brand-text text-sm transition-colors"
                            >
                                <input
                                    type={type}
                                    name={type === 'radio' ? 'dropdown-radio-group' : undefined}
                                    checked={isSelected}
                                    onChange={() => handleOptionClick(option.value)}
                                    className="w-4 h-4 rounded border-brand-primary accent-brand-primary bg-transparent cursor-pointer"
                                />
                                <span className="truncate">{option.label}</span>
                            </label>
                        );
                    })}
                </div>
            )}
        </div>
    );
};