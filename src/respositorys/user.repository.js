import prisma from "../utils/client"


export const createUser = async (data) => {
    const user = await prisma.user.create({
        data,
    });
    return user
}

export const getUsers = async () => {
    const users = await prisma.user.findMany({});
    return users
}

export const getUserById = async (id) => {
    const user = await prisma.user.findFirst({
        where:{
            id,
        }
    });
    return user
}

export const deleteUser = async (id) => {
    const deletedUser = await prisma.user.delete({
        where: {
            id,
        }
    });
    return deletedUser
}

export const updateUser = async (data, id) => {
    const updatedUser = await prisma.user.update({
        data,
        where: {
            id,
        }
    });
    return updatedUser
}