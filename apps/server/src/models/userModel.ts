import pool from '../config/db';

export const getAllUsersService = async () => {
  const result = await pool.query('SELECT * FROM users');
  return result.rows;
};

export const getUserByIdService = async (id: any) => {
  const result = await pool.query('SELECT * FROM users WHERE user_id= $1', [
    id,
  ]);
  return result.rows[0];
};

export const createUserService = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => {
  const result = await pool.query(
    'INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING name',
    [firstName, lastName, email, password]
  );
  return result.rows[0];
};

export const updateUserService = async (
  id: any,
  name: string,
  email: string
) => {
  const result = await pool.query(
    'UPDATE users SET name=$1, email=$2 WHERE user_id=$3 RETURNING *',
    [name, email, id]
  );
  return result.rows[0];
};

export const deleteUserService = async (id: any) => {
  const result = await pool.query(
    'DELETE FROM users WHERE user_id=$id RETURNING *',
    [id]
  );
  return result;
};
