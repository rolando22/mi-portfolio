import { HashRouter } from 'react-router-dom';

import { Header } from './components';
import { AppLayout } from './layouts/AppLayout';
import { AppRoutes } from './routes/AppRoutes';

import './App.css';

export function App() {
    return (
        <HashRouter>
            <AppLayout>
                <Header />
                <AppRoutes />
            </AppLayout>
        </HashRouter>
    );
}
