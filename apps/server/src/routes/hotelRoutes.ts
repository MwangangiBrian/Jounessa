import Express from 'express';
import {
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotelById,
} from '../contollers/hotels.controller';

const hotelRouter = Express.Router();

hotelRouter.post('/hotels', createHotel);
hotelRouter.get('/hotels', getAllHotels);
hotelRouter.get('/hotels/:id', getHotelById);
hotelRouter.delete('/hotels/:id', deleteHotel);

export default hotelRouter;
