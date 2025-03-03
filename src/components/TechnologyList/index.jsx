import { TechnologyCard } from '../TechnologyCard';

import './TechnologyList.css';

// eslint-disable-next-line react/prop-types
export function TechnologyList({ technologies = [] }) {
  return (
    <div className='Portfolio-container'>
      {technologies.map(technology => 
        <TechnologyCard
          key={technology.id}
          title={technology.title}
          logo={technology.logo}
          description={technology.description}
        />
      )}
    </div>
  );
}
