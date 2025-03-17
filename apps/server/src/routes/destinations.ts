import express from 'express';
import {
  getAllDestinations,
  getDestinationById,
} from '../contollers/destinations.controller';

const destRouter = express.Router();

destRouter.get('/all', getAllDestinations);
destRouter.get('/:id', getDestinationById);

export default destRouter;
