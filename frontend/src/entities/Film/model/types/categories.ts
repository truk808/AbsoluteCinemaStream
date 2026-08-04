import type {Film} from './film.ts'

export type FilmCategories = Record<string, PaginatedCategory>

export type PaginatedCategory = Record<number, CategoryData>

export interface PaginatedCategoryData extends CategoryData {
    page: number
    category: string
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

