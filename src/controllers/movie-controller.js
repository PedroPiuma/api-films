import { prisma } from "../helpers/utils.js";

export const getAllMovies = async (request, reply) => {
    try {
        const movies = await prisma.movie.findMany();
        return movies;
    } catch (error) {
        console.log(error);
        reply.status(500).send("Não foi possível encontrar os filmes");
    }
};

export const getUniqueMovie = async (request, reply) => {
    try {
        const { id } = request.params
        console.log(id)
        const movie = await prisma.movie.findUnique({
            where: { id: Number(id) },
        })
        console.log(movie)
        reply.status(200).send(movie)
    } catch (error) {
        reply.status(500).send("Não foi possível encontror o filme")
    }
}

export const createMovie = async (request, reply) => {
    try {
        const { id } = request.user
        const { title, description, gender_id } = request.body
        const post = await prisma.movie.create({
            data: {
                title,
                description,
                gender: {
                    connect: { id: Number(gender_id) }
                },
                user: {
                    connect: { id: Number(id) }
                }
            }
        })
        reply.status(201).send(post)
    } catch (error) {
        reply.status(500).send("Não foi possível criar o filme")
    }
}
