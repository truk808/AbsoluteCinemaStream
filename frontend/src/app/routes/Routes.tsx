import {MainPage} from "../../pages/Main";
import { ROUTES } from '../../shared/config/'
import {MovieDetailsPage} from "../../pages/MovieInfo";
import {ProfilePage} from "../../pages/Profile";
import {SearchPage} from "../../pages/Search";

export const routes = [
    {
        path: ROUTES.MAIN,
        element: <MainPage/>
    },
    {
        path: `${ROUTES.FILM}/:id`,
        element: <MovieDetailsPage/>
    },
    {
        path: `${ROUTES.PROFILE}`,
        element: <ProfilePage/>
    },
    {
        path: `${ROUTES.SEARCH}`,
        element: <SearchPage/>
    },
]