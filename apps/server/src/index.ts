import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { errorHandler } from './middlewares/errorHandler';

import router from './routes/userRoutes';
import authRouter from './routes/userAuthRoutes';
import { PrismaClient } from '@prisma/client';
import destRouter from './routes/destinations';
import hotelRouter from './routes/hotelRoutes';

dotenv.config();
const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', router);
app.use('/auth', authRouter);
app.use('/destinations', destRouter);
app.use('/hotels', hotelRouter);

// Error Handler
app.use(errorHandler);

// test connection
app.get('/', async (req, res) => {
  const result = await prisma.$queryRaw`SELECT * FROM User`;
  console.log(result);
  res.send(`The database name is : ${result}`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port} 👌👍`);
});
