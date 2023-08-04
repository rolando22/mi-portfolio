import { useRoutes } from "react-router-dom";
import { Home, Portfolio, Projects } from './../pages';

export function AppRoutes() {
    
    const routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/portfolio', element: <Portfolio /> },
        { path: '/portfolio/:technology', element: <Projects /> },
    ]);

    return routes;
}
