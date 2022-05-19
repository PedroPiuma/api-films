import * as moviesController from '../controllers/movie-controller.js'
import { validateRequest } from '../middleware/auth.js';

// const routes = [
//     {
//         method: "GET",
//         url: "/movies",
//         handler: moviesController.getAllMovies
//     },
//     {
//         method: "POST",
//         url: "/movies",
//         preHandler: [validateRequest],
//         handler: moviesController.createMovie
//     },
// ]

export default {
    getAllMovies: {
        method: "GET",
        url: "/movies",
        handler: moviesController.getAllMovies
    },
    createMovie: {
        method: "POST",
        url: "/movies",
        preHandler: [validateRequest],
        handler: moviesController.createMovie
    },
};

// export default (fastify, _, next) => {
//     for (let route of routes) {
//         fastify.route(route);
//     }
//     next();
// };
