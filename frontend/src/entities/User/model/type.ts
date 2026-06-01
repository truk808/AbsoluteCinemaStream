export interface User {
    id: number;
    email: string;
    img?: string;
    firstName: string;
    lastName: string;
    phoneNumber?: string;
    dateRegistration : Date;
}