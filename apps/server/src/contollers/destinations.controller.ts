import { NextFunction, Request, Response } from 'express';
import {
    createDestinationService,
  deleteDestinationService,
  getAllDestinationsService,
  getDestinationByIdService,
} from '../models/destinations';

export const createDestination = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const {name, description, location} =req.body;
        const destination = await createDestinationService(name, description, location)
        res.status(201).json(destination)
    } catch (error) {
        next(error)
    }
}

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

export const deleteDestination = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    await deleteDestinationService(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
