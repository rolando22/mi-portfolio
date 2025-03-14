import './SkillsCard.css';

// eslint-disable-next-line react/prop-types
export function SkillsCard({ title, technologies = [] }) {
  return (
    <article 
      className='Skills-skill'
    >
      <h3>{title}</h3>
      <p>{technologies.join(', ')}.</p>
    </article>
  );
}
