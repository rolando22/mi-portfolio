import './Skills.css';

const skills = [
    { 
        id: crypto.randomUUID(), 
        title: 'Lenguajes', 
        technologies: ['JavaScript', 'TypeScript', 'NodeJS'] 
    },
    { 
        id: crypto.randomUUID(), 
        title: 'Otras Tecnologías Web', 
        technologies: ['HTML5', 'CSS3'] 
    },
    { 
        id: crypto.randomUUID(), 
        title: 'Frameworks/Librerías para desarrollo Frontend', 
        technologies: ['React', 'Redux', 'Xstate', 'Bootstrap', 'TailwindCSS'] 
    },
    { 
        id: crypto.randomUUID(), 
        title: 'Frameworks/Librerías para desarrollo Backend', 
        technologies: ['Express', 'Passport', 'JWT', 'Sequelize'] 
    },
    { 
        id: crypto.randomUUID(), 
        title: 'DBA', 
        technologies: ['MongoDB', 'MySQL', 'PostgreSQL'] 
    }, 
];

export function Skills() {
    return (
        <section className="Skills">
            <h2>Habilidades</h2>
            <div className="Skills-container">
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
