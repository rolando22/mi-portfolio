import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { MenuResponsiveIcon } from '../';

import './Header.css';

const menu = [
    { id: crypto.randomUUID(), to: '/', text: 'INICIO' },
    { id: crypto.randomUUID(), to: '/about', text: 'SOBRE MÍ' },
    { id: crypto.randomUUID(), to: '/skills', text: 'HABILIDADES' },
    // { id: crypto.randomUUID(), to: '/curriculum', text: 'CURRICULUM' },
    { id: crypto.randomUUID(), to: '/portfolio', text: 'PORTAFOLIO' },
    // { id: crypto.randomUUID(), to: '/contacto', text: 'CONTACTO' },
];

export function Header() {
    const [showMenuResponsive, setShowMenuResponsive] = useState(false);

    const classResponsive = showMenuResponsive ? 'responsive' : '';

    const handleOnClickShowMenuResponsive = () => setShowMenuResponsive(!showMenuResponsive);

    return (
        <header className='Header'>
            <section className='Header-container'>
                <section className='Header-logo'>
                    <NavLink to='/'>Rolando</NavLink>
                </section>
                <nav className={`Header-nav ${classResponsive}`}>
                    <div className='Header-nav-desktop'>
                        <ul>
                            {menu.map(item => 
                                <li key={item.id}>
                                    <NavLink 
                                        to={item.to}
                                        onClick={handleOnClickShowMenuResponsive}
                                    >
                                        {item.text}
                                    </NavLink>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className={`Header-nav-mobile ${showMenuResponsive ? 'show' : ''}`}>
                        <ul>
                            {menu.map(item => 
                                <li key={item.id}>
                                    <NavLink 
                                        to={item.to}
                                        onClick={handleOnClickShowMenuResponsive}
                                    >
                                        {item.text}
                                    </NavLink>
                                </li>
                            )}
                        </ul>
                    </div>
                </nav>
                <section 
                    className='Header-nav-responsive'
                    onClick={handleOnClickShowMenuResponsive}
                >
                    <MenuResponsiveIcon />
                </section>
            </section>
        </header>
    );
}
