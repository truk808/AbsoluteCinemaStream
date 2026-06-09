import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../../shared/config";

interface SearchInputProps {
    className?: string;
}

export const SearchInput = ({ className = '' }: SearchInputProps) => {
    const navigate = useNavigate();
    const [value, setValue] = useState('');

    function handleOnClick(event) {
        if (event.key === 'Enter') {
            navigate(`${ROUTES.SEARCH}?keyword=${event.target.value}`);
        }
    }

    return (
        <input
            value={value}
            onChange={(event) => {setValue(event.target.value)}}
            onKeyDown={(event) => {handleOnClick(event)}}
            className={`border border-brand-primary bg-neutral-900/50 rounded-md px-3 py-1.5 text-white text-sm focus:outline-none transition-all focus:bg-neutral-900 ${className}`}
            type="text"
            placeholder="Поиск..."
        />
    );
};