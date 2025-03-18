import { Request, Response, NextFunction } from 'express';
import { createHotelService } from '../models/hotelsModel';

export const createHotel = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, address, amenities, pricePerNight } = req.body;
  try {
    const hotel = await createHotelService(
      name,
      address,
      amenities,
      pricePerNight
    );
    res.status(201).json(hotel);
  } catch (error) {
    next(error);
  }
};
