export interface Film {
    kinopoiskId: number;
    kinopoiskHDId: string;
    imdbId: string;
    nameRu: string;
    nameEn: null;
    nameOriginal: string;
    posterUrl: string;
    posterUrlPreview: string;
    coverUrl: string;
    logoUrl: null;
    reviewsCount: number;
    ratingGoodReview: number;
    ratingGoodReviewVoteCount: number;
    ratingKinopoisk: number;
    ratingKinopoiskVoteCount: number;
    ratingImdb: number;
    ratingImdbVoteCount: number;
    ratingFilmCritics: number;
    ratingFilmCriticsVoteCount: number;
    ratingAwait: null;
    ratingAwaitCount: number;
    ratingRfCritics: number;
    ratingRfCriticsVoteCount: number;
    webUrl: string;
    year: number;
    filmLength: number;
    slogan: string;
    description: string;
    shortDescription: string;
    editorAnnotation: null;
    isTicketsAvailable: boolean;
    productionStatus: null;
    type: string;
    ratingMpaa: string;
    ratingAgeLimits: string;
    countries: Country[];
    genres: Genre[];
    startYear: null;
    endYear: null;
    serial: boolean;
    shortFilm: boolean;
    completed: boolean;
    hasImax: boolean;
    has3D: boolean;
    lastSync: Date;
}

export interface Country {
    country: string;
}

export interface Genre {
    genre: string;
}