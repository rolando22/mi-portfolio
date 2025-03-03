import './ProjectCard.css';

// eslint-disable-next-line react/prop-types
export function ProjectCard({ title, imgUrl, description, repoUrl, demoUrl }) {
  return (
    <article className='Projects-project'>
      <h3>{title}</h3>
      <figure>
        <img 
          src={imgUrl} 
          alt={title} 
        />
      </figure>
      <p>{description}</p>
      <div className='Projects-links'>
        <a 
          href={repoUrl} 
          target='_blank' 
          rel='noreferrer'
        >
          Repositorio
          <span className="overlay"></span>
        </a>
        <a 
          href={demoUrl} 
          target='_blank' 
          rel='noreferrer' 
          style={{ 'display': demoUrl === '' ? 'none' : 'block' }}
        >
          Demo
          <span className="overlay"></span>
        </a>
      </div>
    </article>
  );
}
