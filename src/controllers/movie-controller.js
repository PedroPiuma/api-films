import { prisma } from "../helpers/utils.js";

export const getAllMovies = async (request, reply) => {
    try {
        const movies = await prisma.movie.findMany();
        return movies;
    } catch (error) {
        reply.status(500).send("Não foi possível encontrar os filmes");
    }
};

export const getUniqueMovie = async (request, reply) => {
    try {
        const { id } = request.params
        const movie = await prisma.movie.findUnique({
            where: { id: Number(id) },
        })
        reply.status(200).send(movie)
    } catch (error) {
        reply.status(500).send("Não foi possível encontrar o filme")
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

export const updateMovie = async (request, reply) => {
    try {
        const { id } = request.params
        const { title, description, gender_id } = request.body
        let result = {}
        title ? result.title = title : ''
        description ? result.description = description : ''
        gender_id ? result.gender = { connect: { id: Number(gender_id) } } : ''
        const patch = await prisma.movie.update({
            where: { id: Number(id) },
            data: result
        })
        reply.status(201).send(patch)
    } catch (error) {
        reply.status(500).send("Não foi possível atualizar o filme")
    }
}

export const deleteMovie = async (req, reply) => {
    try {
        const id = Number(req.params.id)
        const post = await prisma.movie.delete({ where: { id } });
        reply.send(post);
    } catch (error) {
        console.log(error);
        reply.status(500).send("Não foi possível deletar o filme");
    }
};
