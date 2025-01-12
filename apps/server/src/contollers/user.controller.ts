import { Request, NextFunction, Response } from 'express';
import {
  createUserService,
  deleteUserService,
  getAllUsersService,
  getUserByIdService,
  updateUserService,
} from '../models/userModel';

// Standard response function
const HandleResponse = (
  res: Response,
  status: number,
  message: string,
  data: any = null
) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, password } = req.body;
  try {
    const newUser = await createUserService(name, email, password);
    HandleResponse(res, 201, 'User created Successfully', newUser);
  } catch (err) {
    next(err);
  }
};

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = getAllUsersService();
    HandleResponse(res, 200, 'Users fetched Successfully');
  } catch (err) {
    next(err);
  }
};

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await getUserByIdService(req.params.id);
    if (!user) return HandleResponse(res, 404, 'User not Found');
    HandleResponse(res, 200, 'User fetched successfully', user);
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email } = req.body;
  try {
    const updatedUser = await updateUserService(req.params.id, name, email);
    if (!updatedUser) return HandleResponse(res, 404, 'User not Found');
    HandleResponse(res, 200, 'User fetched successfully', updatedUser);
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await deleteUserService(req.params.id);
    if (!user) return HandleResponse(res, 404, 'User not Found');
    HandleResponse(res, 200, 'User deleted successfully', user);
  } catch (err) {
    next(err);
  }
};
