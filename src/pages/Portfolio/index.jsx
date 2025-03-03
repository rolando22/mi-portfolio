import { AngularLogo, CssLogo, HtmlLogo, NodeJSLogo, ReactLogo, TechnologyList } from './../../components';

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
            <TechnologyList technologies={technologies} />
        </section>
    );
}
