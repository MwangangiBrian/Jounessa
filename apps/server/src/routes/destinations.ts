import express from 'express';
import {
  createDestination,
  deleteDestination,
  getAllDestinations,
  getDestinationById,
} from '../contollers/destinations.controller';

const destRouter = express.Router();

destRouter.post('/create', createDestination);
destRouter.get('/all', getAllDestinations);
destRouter.get('/:id', getDestinationById);
destRouter.delete('/:id', deleteDestination);

export default destRouter;
