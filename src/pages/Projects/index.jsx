import { useParams } from 'react-router-dom';
import buscadorImagenesGatos from './../../assets/react/buscador_images_gatos.png';
import buscadorPeliculas from './../../assets/react/buscador_peliculas.png';
import crudUsersReactRedux from './../../assets/react/crud_users_react_&_redux.png';
import googleTranslateClone from './../../assets/react/google_translate_clone.png';
import reactShopTailWindCss from './../../assets/react/react_shop_tailwindcss.png';
import shoppingCartReact from './../../assets/react/shopping_cart_react.png';
import todoListReactTypeScript from './../../assets/react/todo_list_react_typescript.png';
import todoMachine from './../../assets/react/todo_machine.png';
import twitterCard from './../../assets/react/twitter_card.png';
import usersList from './../../assets/react/users_list.png';
import commentsList from './../../assets/react/comments_list.png';
import booksList from './../../assets/react/books_list.png';
import javascriptQuiz from './../../assets/react/javascript_quiz.png';
import survey from './../../assets/react/survey.png';
import exchangeCriptomonedas from './../../assets/landingPage/exchange_criptomendas.png';
import blog from './../../assets/landingPage/blog.png';
import googleClone from './../../assets/landingPage/google_clone.png';
import './Projects.css';

const projects = {
    react: [
        { 
            id: crypto.randomUUID(), 
            title: 'Survey con React & TailwindCSS', 
            imgUrl: survey, 
            repoUrl: 'https://github.com/rolando22/survey', 
            demoUrl: 'https://rolando22.github.io/survey/', 
            description: 'Una aplicación de una prueba técnica de Payana de una encuesta, calificar preguntas hasta con 5 estrellas y al finalizar un resumen de la encuesta con las calificaciones de cada pregunta.', 
        },
        { 
            id: crypto.randomUUID(), 
            title: 'JavaScript Quiz con React & Zustand', 
            imgUrl: javascriptQuiz, 
            repoUrl: 'https://github.com/rolando22/javascript-quiz', 
            demoUrl: 'https://rolando22.github.io/javascript-quiz/', 
            description: 'Una aplicación de un cuestionario de JavaScript usando Zustand.', 
        },
        { 
            id: crypto.randomUUID(), 
            title: 'Books List con React & TailwindCSS', 
            imgUrl: booksList, 
            repoUrl: 'https://github.com/rolando22/books-list', 
            demoUrl: 'https://rolando22.github.io/books-list/', 
            description: 'Una aplicación que lista libros, filtra por género y cantidad de páginas, se pueden añadir a una lista de lectura, eliminarlos de la lista de lectura y persistir la misma con Localstorage.', 
        },
        { 
            id: crypto.randomUUID(), 
            title: 'Comments List con React & React Query', 
            imgUrl: commentsList, 
            repoUrl: 'https://github.com/rolando22/comments-react-query', 
            demoUrl: 'https://rolando22.github.io/comments-react-query/', 
            description: 'Una aplicación que lista y crea comentarios obtenidos asincrónicamente usando TanStack Query.', 
        },
        { 
            id: crypto.randomUUID(), 
            title: 'Users List con React & TypeScript', 
            imgUrl: usersList, 
            repoUrl: 'https://github.com/rolando22/users-list', 
            demoUrl: 'https://rolando22.github.io/users-list/', 
            description: 'Una aplicación de una prueba técnica que lista usuarios de la API https://randomuser.me/api, poder ordenarlos por nombre, apellido o país, filtrar por país, eliminar usuarios, poder restaurar la lista original y pintar las celdas de la tabla.', 
        },
        { 
            id: crypto.randomUUID(), 
            title: 'CRUD Users con React & Redux', 
            imgUrl: crudUsersReactRedux, 
            repoUrl: 'https://github.com/rolando22/crud-redux-users', 
            demoUrl: 'https://rolando22.github.io/crud-redux-users/', 
            description: 'Una aplicación que gestiona el CRUD de usuarios con Redux toolkit.', 
        },
        { 
            id: crypto.randomUUID(), 
            title: 'Google Translate Clone con React', 
            imgUrl: googleTranslateClone, 
            repoUrl: 'https://github.com/rolando22/google-translate-clone', 
            demoUrl: 'https://rolando22.github.io/google-translate-clone/', 
            description: 'Una aplicación de un clone del traductor de Google, usando la API de https://translate.argosopentech.com/ para realizar la traducción.', 
        },
        { 
            id: crypto.randomUUID(), 
            title: 'React Shop con TailwindCSS', 
            imgUrl: reactShopTailWindCss, 
            repoUrl: 'https://github.com/rolando22/react-shop-tailwindcss', 
            demoUrl: 'https://rolando22.github.io/react-shop-tailwindcss/', 
            description: 'Una aplicación de una tienda online, una lista de productos para poder filtrar por título, categoría y poder añadirlos al carrito de compras, un historial de las compras realizadas y poder ver el detalles de los mismos.', 
        },
        { 
            id: crypto.randomUUID(), 
            title: 'TODO List con React & TypeScript', 
            imgUrl: todoListReactTypeScript, 
            repoUrl: 'https://github.com/rolando22/todo-list-ts', 
            demoUrl: 'https://rolando22.github.io/todo-list-ts/', 
            description: 'Una aplicación para registrar tareas, marcarlas como completadas y/o eliminarlas, filtro por completadas/no completadas y un contador de tareas pendientes.', 
        },
        { 
            id: crypto.randomUUID(), 
            title: 'Shopping Cart con React', 
            imgUrl: shoppingCartReact, 
            repoUrl: 'https://github.com/rolando22/shopping-cart', 
            demoUrl: 'https://rolando22.github.io/shopping-cart/', 
            description: 'Una aplicación de una tienda online, poder agregar o eliminar del carrito los productos listados. En el carrito poder aumentar o disminuir la cantidad de los productos y poder limpiar el carrito por completo.', 
        },
        { 
            id: crypto.randomUUID(), 
            title: 'Buscador de Películas con React', 
            imgUrl: buscadorPeliculas, 
            repoUrl: 'https://github.com/rolando22/buscador-peliculas', 
            demoUrl: 'https://rolando22.github.io/buscador-peliculas/', 
            description: 'Una aplicación para obtener información de películas una API, mostrando al usuario título, año de estreno, poster y poder ordenarlos por título.', 
        },
        { 
            id: crypto.randomUUID(), 
            title: 'Buscador de Imágenes de Gatos con React', 
            imgUrl: buscadorImagenesGatos, 
            repoUrl: 'https://github.com/rolando22/react-prueba-tecnica', 
            demoUrl: 'https://rolando22.github.io/react-prueba-tecnica/', 
            description: 'Una aplicación para obtener un hecho aleatorio de gatos de una API, luego recuperar la primera palabra del hecho y usarla como parámetro en otra API para obtener una imágen aleatoria de gatos.', 
        },
        { 
            id: crypto.randomUUID(), 
            title: 'Twitter Card con React', 
            imgUrl: twitterCard, 
            repoUrl: 'https://github.com/rolando22/twitter-card', 
            demoUrl: 'https://rolando22.github.io/twitter-card/', 
            description: 'Una aplicación que es una réplica de las cards de Twitter, muestra si se está o no siguiendo a los usuarios que salen en la lista y poder seguir o dejar de seguir dependiendo el caso.', 
        },
        { 
            id: crypto.randomUUID(), 
            title: 'TODO Machine con React', 
            imgUrl: todoMachine, 
            repoUrl: 'https://github.com/rolando22/todo-machine', 
            demoUrl: 'https://rolando22.github.io/todo-machine/', 
            description: 'Una aplicación para registrar tareas, categorizarlas, marcarlas como completadas y/o eliminarlas, un buscador de tareas, filtro por categorías y un contador de tareas completadas/total de tareas.', 
        },
        // { id: crypto.randomUUID(), title: '', imgUrl: '', repoUrl: '', demoUrl: '', description: '' },
    ],
    ['html-css']: [
        { 
            id: crypto.randomUUID(), 
            title: 'Exchange de Criptomonedas', 
            imgUrl: exchangeCriptomonedas, 
            repoUrl: 'https://github.com/rolando22/curso-mobile-first', 
            demoUrl: 'https://rolando22.github.io/curso-mobile-first/', 
            description: 'Landing Page de un Exchange de Criptomonedas', 
        },
        { 
            id: crypto.randomUUID(), 
            title: 'Blog', 
            imgUrl: blog, 
            repoUrl: 'https://github.com/rolando22/blog-curso-maquetacion-css', 
            demoUrl: 'https://rolando22.github.io/blog-curso-maquetacion-css/', 
            description: 'Landing Page de un Blog', 
        },
        { 
            id: crypto.randomUUID(), 
            title: 'Buscador de Google', 
            imgUrl: googleClone, 
            repoUrl: 'https://github.com/rolando22/google-clone', 
            demoUrl: 'https://rolando22.github.io/google-clone/', 
            description: 'Landing Page del buscador de Google', 
        },
    ],
};

export function Projects() {
    const { technology } = useParams();

    return (
        <section className='Projects'>
            <div className='Projects-container'>
                {projects[technology]?.map(project => 
                    <article className='Projects-project' key={project.id}>
                        <h3>{project.title}</h3>
                        <figure>
                            <img 
                                src={project.imgUrl} 
                                alt={project.title} 
                            />
                        </figure>
                        <p>{project.description}</p>
                        <div className='Projects-links'>
                            <a 
                                href={project.repoUrl} 
                                target='_blank' 
                                rel='noreferrer'
                            >
                                Repositorio
                                <span className="overlay"></span>
                            </a>
                            <a 
                                href={project.demoUrl} 
                                target='_blank' 
                                rel='noreferrer'
                            >
                                Demo
                                <span className="overlay"></span>
                            </a>
                        </div>
                    </article>
                )}
            </div>
        </section>
    );
}