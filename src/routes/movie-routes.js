import * as moviesController from '../controllers/movie-controller.js'
import { validateRequest } from '../middleware/auth.js';

export default {
    getAllMovies: {
        method: "GET",
        url: "/movies",
        handler: moviesController.getAllMovies
    },
    getUniqueMovie: {
        method: "GET",
        url: "/movies/:id",
        handler: moviesController.getUniqueMovie
    },
    createMovie: {
        method: "POST",
        url: "/movies",
        preHandler: [validateRequest],
        handler: moviesController.createMovie
    },
    updateMovie: {
        method: "PATCH",
        url: "/movies/:id",
        preHandler: [validateRequest],
        handler: moviesController.updateMovie
    },
    deleteMovie: {
        method: "DELETE",
        url: "/movies/:id",
        preHandler: [validateRequest],
        handler: moviesController.deleteMovie
    },
};
