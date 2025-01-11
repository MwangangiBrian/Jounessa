import pkg from 'pg';
import dotenv, { config } from 'dotenv';

dotenv.config();
const { Pool } = pkg;

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  // fix this
  port: process.env.DBPORT ? parseInt(process.env.DBPORT, 10) : undefined,
});

pool.on('connect', () => {
  console.log('connection pool established with Database');
});

export default pool;
