import prisma from '../config/prisma';

export const createHotelService = async (
  name: string,
  address: string,
  amenities: string[],
  pricePerNight: number
) => {
  return await prisma.hotel.create({
    data: { name, address, amenities, pricePerNight },
  });
};

export const getAllHotelsService = async () => {
  return await prisma.hotel.findMany();
};

export const getHotelByIdService = async (id: string) => {
  return await prisma.hotel.findUnique({
    where: { id },
  });
};

export const deleteHotelService = async (id: string) => {
  return await prisma.hotel.delete({
    where: { id },
  });
};
