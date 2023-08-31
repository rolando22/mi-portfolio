import { HashRouter } from 'react-router-dom';
import { Header } from './components';
import { AppRoutes } from './routes/AppRoutes';
import './App.css';

export function App() {
    return (
        <HashRouter>
            <Header />
            <AppRoutes />
        </HashRouter>
    );
}
