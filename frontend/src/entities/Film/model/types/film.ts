export interface FilmCountry {
    country: string;
}

export interface FilmGenre {
    genre: string;
}

export interface Film {
    kinopoiskId: number;
    nameRu: string | null;
    nameEn: string | null;
    nameOriginal: string | null;
    posterUrl: string;
    posterUrlPreview: string;
    countries: FilmCountry[];
    genres: FilmGenre[];
    year: number | null;
    ratingKinopoisk: number | null;
    ratingImdb: number | null;
    coverUrl: string | null ;
    logoUrl: string | null ;
    ratingRfCritics?: number | null;
    ratingRfCriticsVoteCount?: number | null;
    editorAnnotation: string | null;
    isTicketsAvailable: boolean;
    endYear?: Date | null;
    imdbId?: string | null;
    slogan?: string | null;
    description?: string | null;
    shortDescription?: string | null;
    filmLength?: number | null;
    type?: string | null;
    ratingAgeLimits?: string | null; // Например, "age16"
    ratingMpaa?: string | null;
    kinopoiskHDId?: string | null;
    reviewsCount?: number;
    ratingGoodReview?: number | null;
    ratingGoodReviewVoteCount?: number | null;
    ratingKinopoiskVoteCount?: number | null;
    ratingImdbVoteCount?: number | null;
    ratingFilmCritics?: number | null;
    ratingFilmCriticsVoteCount?: number | null;
    ratingAwait?: number | null;
    ratingAwaitCount?: number | null;
    webUrl?: string;
    productionStatus?: 'FILMING' | 'PRE_PRODUCTION' | 'COMPLETED' | 'ANNOUNCED' | 'UNKNOWN' | null;
    lastSync?: string;
    hasImax?: boolean;
    has3D?: boolean;
    startYear?: number | null;
    serial?: boolean;
    shortFilm?: boolean;
    completed?: boolean;
}