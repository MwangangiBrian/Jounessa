import express from 'express';
import { getAllDestinations } from '../contollers/destinations.controller';

const destRouter = express.Router();

destRouter.get('/all', getAllDestinations);

export default destRouter;
