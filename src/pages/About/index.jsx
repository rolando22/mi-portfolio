import { useEffectElement } from '../../hooks/useEffectElement';

import './About.css';

export function About() {
    const { node } = useEffectElement({ styles: 'About-container effect' });

    return (
        <section className="About">
            <div ref={node} className="About-container">
                <h2>Sobre Mí</h2>
                <p>
                    Soy Desarrollador Web y Mobile con JavaScript. Tengo más 2 años de experiencia laboral en los cuáles he
                    trabajado en proyectos desarrollando nuevas funcionalidades, refactorizando código e implementando APIs
                    externas.
                </p>
                <h3>Datos Personales</h3>
                <div className="fila">
                    <div className="Abount-col-left">
                        <ul>
                            <li>
                                <strong>Nombre y Apellido</strong>
                            </li>
                            <li>
                                <strong>Email</strong>
                            </li>
                            <li>
                                <strong>Localidad</strong>
                            </li>
                            <li>
                                <strong>País</strong>
                            </li>
                        </ul>
                    </div>
                    <div className="Abount-col-right">
                        <ul>
                            <li>
                                <p>Rolando Rafael Castañon Fernández</p>
                            </li>
                            <li>
                                <p>rolando2207@gmail.com</p>
                            </li>
                            <li>
                                <p>Jujuy</p>
                            </li>
                            <li>
                                <p>Argentina</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <a 
                    href='https://rolando22.github.io/mi_cv/' 
                    target='_blank' 
                    rel='noreferrer'
                >
                    Currículum Vitae <i className="fa-solid fa-download"></i>
                    <span className="overlay"></span>
                </a>
            </div>
        </section>
    );
}
