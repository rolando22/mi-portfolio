import { useState } from 'react';
import { MenuResponsiveIcon } from '../';
import './Header.css';

export function Header() {
    const [showMenuResponsive, setShowMenuResponsive] = useState(false);

    const classResponsive = showMenuResponsive ? 'responsive' : '';

    const handleOnClickShowMenuResponsive = () => setShowMenuResponsive(!showMenuResponsive);

    return (
        <header className='Header'>
            <section className='Header-container'>
                <section className='Header-logo'>
                    <a href="#">Rolando</a>
                </section>
                <nav className={`Header-nav ${classResponsive}`}>
                    <ul>
                        <li><a href="#inicio">INICIO</a></li>
                        <li><a href="#sobremi">SOBRE MI</a></li>
                        <li><a href="#skills">SKILLS</a></li>
                        {/* <li><a href="#curriculum">CURRICULUM</a></li> */}
                        <li><a href="#portfolio">PORTFOLIO</a></li>
                        {/* <li><a href="#contacto">CONTACTO</a></li> */}
                    </ul>
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
