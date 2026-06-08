import type {Film} from './film.ts'

export type FilmCategories = Record<string, PaginatedCategory>

export interface PaginatedCategory extends CategoryData {
    category: string
    page: number
}

export interface CategoryData {
    items: Film[];
    totalPages: number;
    total: number;
}

// const rrr: PaginatedCategory = {
//     page: 1,
//     items: [],
//     total: 12,
//     totalPages: 0,
// };