import noImageAvailable from '../assets/no_image_available.png';
import trelloClone from '../assets/angular/trelloClone.png';
import buscadorImagenesGatos from '../assets/react/buscador_images_gatos.png';
import buscadorPeliculas from '../assets/react/buscador_peliculas.png';
import crudUsersReactRedux from '../assets/react/crud_users_react_&_redux.png';
import googleTranslateClone from '../assets/react/google_translate_clone.png';
import reactShopTailWindCss from '../assets/react/react_shop_tailwindcss.png';
import shoppingCartReact from '../assets/react/shopping_cart_react.png';
import todoListReactTypeScript from '../assets/react/todo_list_react_typescript.png';
import todoMachine from '../assets/react/todo_machine.png';
import twitterCard from '../assets/react/twitter_card.png';
import usersList from '../assets/react/users_list.png';
import commentsList from '../assets/react/comments_list.png';
import booksList from '../assets/react/books_list.png';
import javascriptQuiz from '../assets/react/javascript_quiz.png';
import survey from '../assets/react/survey.png';
import expenseTracker from '../assets/react/expense_tracker.png';
import wordle from '../assets/react/wordle.png';
import memoryGame from '../assets/react/memory_game.png';
import exchangeCriptomonedas from '../assets/landingPage/exchange_criptomendas.png';
import blog from '../assets/landingPage/blog.png';
import googleClone from '../assets/landingPage/google_clone.png';

export const projects = {
    angular: {
        title: 'Proyectos Desarrollados con Angular',
        projects: [
            { 
                id: crypto.randomUUID(), 
                title: 'Trello Clone', 
                imgUrl: trelloClone, 
                repoUrl: 'https://github.com/rolando22/angular-trello-clone', 
                demoUrl: 'https://angular-trello-clone-4071b.web.app', 
                description: 'Una aplicación de un clone de Trello, autenticación de usuarios, poder crear Boards, Lists y Cards en cuenta propia.', 
            },
        ]
    },
    nodejs: {
        title: 'Proyectos Desarrollados con NodeJS',
        projects: [
            { 
                id: crypto.randomUUID(), 
                title: 'PlatziStore API - MongoDB', 
                imgUrl: noImageAvailable, 
                repoUrl: 'https://github.com/rolando22/nestjs-platzi-store-mongodb', 
                demoUrl: '', 
                description: 'Una API de una store con NestJS y MongoDB como DB.', 
            },
            { 
                id: crypto.randomUUID(), 
                title: 'PlatziStore API', 
                imgUrl: noImageAvailable, 
                repoUrl: 'https://github.com/rolando22/nestjs-platzi-store', 
                demoUrl: '', 
                description: 'Una API de una store con NestJS y Postgres como DB.', 
            },
            { 
                id: crypto.randomUUID(), 
                title: 'Todo API', 
                imgUrl: noImageAvailable, 
                repoUrl: 'https://github.com/rolando22/todo-api', 
                demoUrl: '', 
                description: 'Una API de un CRUD de ToDos con MySQL, MongoDB como BD.', 
            },
            { 
                id: crypto.randomUUID(), 
                title: 'Shop API', 
                imgUrl: noImageAvailable, 
                repoUrl: 'https://github.com/rolando22/react-shop-backend', 
                demoUrl: '', 
                description: 'Una API de un E-commerce con Postgress como BD.', 
            },
            { 
                id: crypto.randomUUID(), 
                title: 'Notes APP', 
                imgUrl: noImageAvailable, 
                repoUrl: 'https://github.com/rolando22/notes-app', 
                demoUrl: '', 
                description: 'Un servidor web de una APP de notas con MongoDB como BD.', 
            },
        ]
    },
    react: {
        title: 'Proyectos Desarrollados con React',
        projects: [
            { 
                id: crypto.randomUUID(), 
                title: 'Memory Game con React & TailwindCSS', 
                imgUrl: memoryGame, 
                repoUrl: 'https://github.com/rolando22/memory-game', 
                demoUrl: 'https://rolando22.github.io/memory-game/', 
                description: 'Una aplicación de un juego de memoria, cuenta la cantidad de movimientos realizados para ganar y un botón para reiniciar el juego.', 
            },
            { 
                id: crypto.randomUUID(), 
                title: 'Wordle con React', 
                imgUrl: wordle, 
                repoUrl: 'https://github.com/rolando22/wordle', 
                demoUrl: 'https://rolando22.github.io/wordle/', 
                description: 'Una aplicación de un juego de adivinar la palabra en un máximo de 6 turnos.', 
            },
            { 
                id: crypto.randomUUID(), 
                title: 'Expense Tracker con React & TailwindCSS', 
                imgUrl: expenseTracker, 
                repoUrl: 'https://github.com/rolando22/expense-tracker', 
                demoUrl: 'https://rolando22.github.io/expense-tracker/', 
                description: 'Una aplicación para administrar gastos e ingresos, y visualizarlos en un gráfico usando Victory.', 
            },
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
        ]
    },
    ['html-css']: {
        title: 'Proyectos Desarrollados con HTML & CSS',
        projects: [
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
        ]
    },
};
