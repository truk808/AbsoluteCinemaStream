import { useState } from 'react';

type SortField = 'alphabet' | 'kpRating' | 'userRating';
type SortOrder = 'asc' | 'desc' | null;

interface MovieSortProps {
    onSortChange?: (field: SortField, order: SortOrder) => void;
}

export const MovieSort = ({ onSortChange }: MovieSortProps) => {
    const [sortField, setSortField] = useState<SortField | null>(null);
    const [sortOrder, setSortOrder] = useState<SortOrder>(null);

    const handleSort = (field: SortField) => {
        let nextOrder: SortOrder = 'desc';

        if (sortField === field) {
            if (sortOrder === 'desc') nextOrder = 'asc';
            else if (sortOrder === 'asc') nextOrder = null;
        }

        setSortField(nextOrder ? field : null);
        setSortOrder(nextOrder);

        if (onSortChange) {
            onSortChange(field, nextOrder);
        }
    };

    const renderArrow = (field: SortField) => {
        if (sortField !== field || !sortOrder) return null;
        return (
            <svg
                className={`w-3 h-3 transition-transform duration-200 ${sortOrder === 'asc' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
        );
    };

    const getBtnClass = (field: SortField) => {
        const baseClass = "flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer border border-transparent";
        const activeClass = "bg-brand-primary/15 border-brand-primary text-brand-primary shadow-sm shadow-brand-primary/5";
        const inactiveClass = "bg-zinc-900/40 text-brand-text-muted hover:text-brand-text hover:bg-zinc-800/60 border-zinc-800/40";

        return `${baseClass} ${sortField === field ? activeClass : inactiveClass}`;
    };

    return (
        <div className="flex items-center gap-2 bg-brand-bg p-1 rounded-xl">
            <button
                onClick={() => handleSort('alphabet')}
                className={getBtnClass('alphabet')}
            >
                <span>По алфавиту</span>
                {renderArrow('alphabet')}
            </button>

            <button
                onClick={() => handleSort('kpRating')}
                className={getBtnClass('kpRating')}
            >
                <span>Рейтинг Кинопоиска</span>
                {renderArrow('kpRating')}
            </button>

            <button
                onClick={() => handleSort('userRating')}
                className={getBtnClass('userRating')}
            >
                <span>Мой рейтинг</span>
                {renderArrow('userRating')}
            </button>
        </div>
    );
};