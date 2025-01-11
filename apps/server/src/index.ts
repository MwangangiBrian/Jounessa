import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './config/db';
import { errorHandler } from './middlewares/errorHandler';

import router from './routes/userRoutes';
import { createUserTable } from './data/createUser';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', router);

// Error Handler
app.use(errorHandler);

//create table
createUserTable();

// test postgres connection
app.get('/', async (req, res) => {
  const result = await pool.query('SELECT current_database()');
  res.send(`The database name is : ${result.rows}`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port} 👌👍`);
});
