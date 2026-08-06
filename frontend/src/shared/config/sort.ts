import type {SelectOption} from "../ui";

export const SORT_OPTIONS: SelectOption[] = [
    { id: '', label: 'Отменить' },
    { id: 'RATING', label: 'По рейтенгу' },
    { id: 'NUM_VOTE', label: 'По голосам' },
    { id: 'YEAR', label: 'По годам' },
];