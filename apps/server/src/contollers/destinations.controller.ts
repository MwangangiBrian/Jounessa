import { NextFunction, Request, Response } from "express";
import { GetAllDestinations } from "../models/destinations";

export const getAllDestinations = async(req:Request, res:Response, next:NextFunction) => {
    try {
        const destination = await GetAllDestinations();
        res.status(200).json(destination)
    } catch (error) {
        next(error)
    }
}