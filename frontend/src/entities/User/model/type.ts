import type {Film} from "../../Film";

export interface User {
    id: number;
    email: string;
    img?: string;
    firstName: string;
    lastName: string;
    phoneNumber?: string;
    dateRegistration : Date;
}

export type RatingsUserFilm = Record<number, { film: Film; score: number }>