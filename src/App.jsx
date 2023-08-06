import { BrowserRouter } from 'react-router-dom';
import { Header } from './components';
import { AppRoutes } from './routes/AppRoutes';
import './App.css';

export function App() {
    return (
        <BrowserRouter basename='/mi-portfolio'>
            <Header />
            <AppRoutes />
        </BrowserRouter>
    );
}
