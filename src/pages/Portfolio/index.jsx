import { NavLink } from 'react-router-dom';
import { AngularLogo, CssLogo, HtmlLogo, NodeJSLogo, ReactLogo } from './../../components';
import './Portfolio.css';

const technologies = [
    { 
        id: crypto.randomUUID(), 
        title: 'Angular', 
        logo: <AngularLogo />, 
        description: 'Proyectos desarrollados con Angular' 
    },
    { 
        id: crypto.randomUUID(), 
        title: 'NodeJS', 
        logo: <NodeJSLogo />, 
        description: 'Proyectos desarrollados con NodeJS' 
    },
    { 
        id: crypto.randomUUID(), 
        title: 'React', 
        logo: <ReactLogo />, 
        description: 'Proyectos desarrollados con React' 
    },
    { 
        id: crypto.randomUUID(), 
        title: 'HTML-CSS', 
        logo: <><HtmlLogo /><CssLogo /></>, 
        description: 'Proyectos desarrollados con HTML y CSS' 
    },
];

export function Portfolio() {
    return (
        <section className='Portfolio'>
            <div className='Portfolio-container'>
                {technologies.map(technology => 
                    <article className='Portfolio-technology' key={technology.id}>
                        <NavLink to={`/portfolio/${technology.title.toLocaleLowerCase()}`}>
                            <h3>{technology.title}</h3>
                            <div className='Portfolio-technology-logo'>
                                {technology.logo}
                            </div>
                            <p>{technology.description}</p>
                        </NavLink>
                    </article>
                )}
            </div>
        </section>
    );
}
