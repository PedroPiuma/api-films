import { prisma } from '../helpers/utils.js'

export const getAllGenders = async (request, reply) => {
    try {
        const genders = await prisma.gender.findMany();
        return genders;
    } catch (error) {
        console.log(error);
        reply.status(500).send("Não foi possível encontrar os gêneros");
    }
};

export const createGender = async (request, reply) => {
    try {
        console.log(request.body)
        const { name } = request.body

        const gender = await prisma.gender.create({
            data: {
                name
            }
        })
        reply.status(201).send(gender)
    } catch (error) {
        reply.status(500).send("Não foi possível criar o gênero")
    }
}