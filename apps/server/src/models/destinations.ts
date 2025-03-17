import prisma from '../config/prisma';

export const createDestinationService = async(name: string, description:string location: string) => {
    return await prisma.destination.create({
        data: { name, description, location: 'default-location-id' },
    })
}
export const getAllDestinationsService = async () => {
  return await prisma.destination.findMany();
};

export const getDestinationByIdService = async (id: string) => {
  return await prisma.destination.findUnique({
    where: { id },
  });
};

export const deleteDestinationService = async (id: string) => {
  return await prisma.destination.delete({
    where: { id },
  });
};
