import {MainPage} from "../../pages/Main";
import { ROUTES } from '../../shared/config/'

export const routes = [
    {
        path: ROUTES.MAIN,
        element: <MainPage/>
    },
    {
        path: "/",
        element: <MainPage/>
    },
]