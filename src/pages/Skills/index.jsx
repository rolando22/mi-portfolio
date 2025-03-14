import { useEffectElement } from '../../hooks/useEffectElement';
import './Skills.css';

const skills = [
    { 
        id: crypto.randomUUID(), 
        title: 'Lenguajes', 
        technologies: ['JavaScript', 'TypeScript'] 
    },
    { 
        id: crypto.randomUUID(), 
        title: 'Tecnologías para desarrollo Frontend', 
        technologies: ['HTML5', 'CSS3', 'React', 'Redux', 'Angular', 'SASS', 'Bootstrap', 'TailwindCSS'] 
    },
    { 
        id: crypto.randomUUID(), 
        title: 'Tecnologías para desarrollo Backend', 
        technologies: ['NodeJS', 'Express', 'Sequelize', 'Mongoose'] 
    },
    { 
        id: crypto.randomUUID(), 
        title: 'DBA', 
        technologies: ['MongoDB', 'MySQL', 'PostgreSQL'] 
    }, 
];

export function Skills() {
    const { node } = useEffectElement({ styles: 'Skills-container effect' });

    return (
        <section className="Skills">
            <h2>Habilidades</h2>
            <div ref={node} className="Skills-container">
                {skills.map(skill => 
                    <article 
                        className='Skills-skill'
                        key={skill.id}
                    >
                        <h3>{skill.title}</h3>
                        <ul>
                            {skill.technologies.map((technology, index) => 
                                <li key={index}>{technology}</li>
                            )}
                        </ul>
                    </article>
                )}
            </div>
        </section>
    );
}
