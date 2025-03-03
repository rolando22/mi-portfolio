import { GitHubIcon, LinkedInIcon } from "../../components";

import { useEffectElement } from "../../hooks/useEffectElement";

import './Home.css';

export function Home() {
    const { node } = useEffectElement({ styles: 'Home-container effect2' });

    return (
        <section className='Home'>
            <div ref={node} className='Home-container'>
                {/* <div className="contenedor-img">
                    <img src="img/hero.png" alt="" />
                </div> */}
                <h1>Rolando Rafael Castañon Fernández</h1>
                <h2>Desarrollador Web (Stack React/NodeJS)</h2>
                <div className='Home-redes'>
                    <a 
                        className='Home-redes-item' 
                        href='https://www.linkedin.com/in/rolando-rafael-casta%C3%B1on-fern%C3%A1ndez-973917252/' 
                        target='_blank'
                        rel='noreferrer'
                    >
                        <LinkedInIcon />
                    </a>
                    <a 
                        className='Home-redes-item' 
                        href='https://github.com/rolando22' 
                        target='_blank'
                        rel='noreferrer'
                    >
                        <GitHubIcon />
                    </a>
                </div>
            </div>
        </section>
    );
}
