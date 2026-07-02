export interface Search {
    total: number;
    totalPages: number;
    page: number;
    items: SearchFilm[];
}

export interface FetchCategoryArgs {
    countries?: number;
    genres?: number;
    order?: 'RATING' | 'NUM_VOTE' | 'YEAR';
    type?: 'FILM' | 'TV_SHOW' | 'TV_SERIES' | 'MINI_SERIES' | 'ALL';
    ratingFrom?: number;
    ratingTo?: number;
    yearFrom?: number;
    yearTo?: number;
    imdbId?: string;
    keyword?: string;
    page?: number;
}

interface Country {
    country: string;
}

interface Genre {
    genre: string;
}

export interface SearchFilm {
    kinopoiskId: number;
    imdbId: string;
    nameRu: string;
    nameEn: string;
    nameOriginal: string;
    countries: Country[];
    genres: Genre[];
    ratingKinopoisk: number;
    ratingImdb: number;
    year: number;
    type: string;
    posterUrl: string;
    posterUrlPreview: string;
}