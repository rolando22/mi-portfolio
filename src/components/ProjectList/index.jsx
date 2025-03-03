import { ProjectCard } from '../../components';

import './ProjectList.css';

// eslint-disable-next-line react/prop-types
export function ProjectList({ projects = [] }) { 
  return (
    <div className='Projects-container'>
      {projects.map(project => 
        <ProjectCard
          key={project.id}
          title={project.title}
          imgUrl={project.imgUrl}
          description={project.description}
          repoUrl={project.repoUrl}
          demoUrl={project.demoUrl}
        />
      )}
    </div>
  );
}
