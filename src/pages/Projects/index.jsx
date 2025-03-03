import { useParams } from 'react-router-dom';

import { ProjectList } from '../../components';
import { projects } from '../../data/projects';

import './Projects.css';

export function Projects() {
    const { technology } = useParams();

    return (
        <section className='Projects'>
            <h2>{projects[technology].title}</h2>
            <ProjectList projects={projects[technology].projects} />
        </section>
    );
}
