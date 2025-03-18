import { Request, Response, NextFunction } from 'express';
import {
  createHotelService,
  deleteHotelService,
  getAllHotelsService,
  getHotelByIdService,
} from '../models/hotelsModel';

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

export const getAllHotels = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const hotel = await getAllHotelsService();
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};

export const getHotelById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.body;
    const hotel = getHotelByIdService(id);
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};

export const deleteHotel = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.body;
    await deleteHotelService(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
