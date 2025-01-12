import pool from '../config/db';

export const getAllUsersService = async () => {
  const result = await pool.query('SELECT * FROM users');
  return result.rows;
};

export const getUserByIdService = async (id: any) => {
  const result = await pool.query('SELECT * FROM users WHERE id= $1', [id]);
  return result.rows[0];
};

export const createUserService = async (
  email: string,
  name: string,
  password: string
) => {
  const result = await pool.query(
    'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING name',
    [name, email, password]
  );
  return result.rows[0];
};

export const updateUserService = async (
  id: any,
  name: string,
  email: string
) => {
  const result = await pool.query(
    'UPDATE users SET name=$1, email=$2 WHERE id=$3 RETURNING *',
    [name, email, id]
  );
  return result.rows[0];
};

export const deleteUserService = async (id: any) => {
  const result = await pool.query(
    'DELETE FROM users WHERE id=$id RETURNING *',
    [id]
  );
  return result;
};
