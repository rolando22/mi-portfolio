/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';

import './TechnologyCard.css';

export function TechnologyCard({ title, logo, description }) {
  return (
    <article className='Portfolio-technology'>
      <NavLink to={`/portfolio/${title.toLocaleLowerCase()}`}>
        <h3>{title}</h3>
        <div className='Portfolio-technology-logo'>
          {logo}
        </div>
        <p>{description}</p>
      </NavLink>
    </article>
  );
}
