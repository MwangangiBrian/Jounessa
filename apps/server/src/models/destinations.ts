import prisma from "../config/prisma"

export const GetAllDestinations = async () => {
    return await prisma.destination.findMany();
}