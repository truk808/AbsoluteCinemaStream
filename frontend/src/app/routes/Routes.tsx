import {MainPage} from "../../pages/Main";
import { ROUTES } from '../../shared/config/'
import {MovieDetailsPage} from "../../pages/MovieInfo";

export const routes = [
    {
        path: ROUTES.MAIN,
        element: <MainPage/>
    },
    {
        path: `${ROUTES.FILM}/:id`,
        element: <MovieDetailsPage/>
    },
]