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
