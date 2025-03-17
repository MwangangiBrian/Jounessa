import prisma from '../config/prisma';

export const getAllDestinationsService = async () => {
  return await prisma.destination.findMany();
};

export const getDestinationByIdService = async (id: string) => {
  return await prisma.destination.findUnique({
    where: { id },
  });
};
