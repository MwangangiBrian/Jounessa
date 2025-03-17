import { NextFunction, Request, Response } from 'express';
import {
  getAllDestinationsService,
  getDestinationByIdService,
} from '../models/destinations';

export const getAllDestinations = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const destination = await getAllDestinationsService();
    res.status(200).json(destination);
  } catch (error) {
    next(error);
  }
};

export const getDestinationById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const destination = await getDestinationByIdService(id);
    res.status(200).json(destination);
  } catch (error) {
    next(error);
  }
};
