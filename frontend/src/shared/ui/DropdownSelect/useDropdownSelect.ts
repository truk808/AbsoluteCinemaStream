import {useEffect, useRef, useState} from "react";

interface useDropdownSelectProps {
    selectedValues: string[];
    onChange: (values: string[]) => void;
    type?: 'checkbox' | 'radio';
}

export const useDropdownSelect = ({
                                      type,
                                      onChange,
                                      selectedValues,
                                  }: useDropdownSelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleOptionClick = (value: string) => {
        if (type === 'radio') {
            onChange([value]);
            setIsOpen(false);
        } else {
            if (selectedValues.includes(value)) {
                onChange(selectedValues.filter((v) => v !== value));
            } else {
                onChange([...selectedValues, value]);
            }
        }
    };

    return {
        isOpen,
        setIsOpen,
        dropdownRef,
        handleOptionClick,
    }
}