export interface Search {
    keyword: string;
    pagesCount: number;
    page: number;
    films: SearchFilm[];
    searchFilmsCountResult: number;
}

export interface SearchFilm {
    filmId: number;
    nameRu: string;
    nameEn: string;
    type: string;
    year: string;
    description: string;
    filmLength: string;
    countries: Country[];
    genres: Genre[];
    rating: string;
    ratingVoteCount: number;
    posterUrl: string;
    posterUrlPreview: string;
}

export interface Country {
    country: string;
}

export interface Genre {
    genre: string;
}