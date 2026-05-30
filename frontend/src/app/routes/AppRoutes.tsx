import {Navigate, Route, Routes} from "react-router-dom";
import {routes} from "./Routes.tsx";
import {ROUTES} from "../../shared/config";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
            ))}
            <Route path="*" element={<Navigate to={ROUTES.MAIN} replace />} />
        </Routes>
    );
};

export default AppRouter;