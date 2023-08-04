import { useRoutes } from "react-router-dom";
import { About, Home, Portfolio, Projects } from './../pages';

export function AppRoutes() {
    
    const routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/portfolio', element: <Portfolio /> },
        { path: '/portfolio/:technology', element: <Projects /> },
    ]);

    return routes;
}
