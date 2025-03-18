import Express from 'express';
import { createHotel } from '../contollers/hotels.controller';

const hotelRouter = Express.Router();

hotelRouter.post('/hotels', createHotel);

export default hotelRouter;