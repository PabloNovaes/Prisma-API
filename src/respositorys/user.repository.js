import prisma from "../utils/client"


export const createUser = async (data) => {
    const user = await prisma.user.create({
        data,
    });
    return user
}