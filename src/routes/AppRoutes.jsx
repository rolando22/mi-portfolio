import { useRoutes } from "react-router-dom";
import { About, Home, Portfolio, Projects, Skills } from './../pages';

export function AppRoutes() {
    
    const routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/portfolio', element: <Portfolio /> },
        { path: '/portfolio/:technology', element: <Projects /> },
        { path: '/skills', element: <Skills /> }
    ]);

    return routes;
}
