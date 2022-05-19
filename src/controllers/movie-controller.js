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

export const createMovie = async (request, reply) => {
    try {
        console.log(request.body)
        const { title, description, gender_id, user_id } = request.body

        const post = await prisma.movie.create({
            data: {
                title,
                description,
                gender: {
                    connect: { id: Number(gender_id) }
                },
                user: {
                    connect: { id: Number(user_id) }
                }
            }
        })
    } catch (error) {
        reply.status(500).send("Não foi possível criar o filme")
    }
}
