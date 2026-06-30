import type {SelectOption} from "../ui";

export const SORT_OPTIONS: SelectOption[] = [
    { value: '', label: 'Отменить' },
    { value: 'RATING', label: 'По рейтенгу' },
    { value: 'NUM_VOTE', label: 'По голосам' },
    { value: 'YEAR', label: 'По годам' },
];