import { Request, Response, NextFunction } from 'express';
import { loginUserService, registerUserService } from '../models/auth/userAuthModel';

export const loginUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { email, password } = req.body;
    try {
        const user = await loginUserService(email, password);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

export const registerUser = async(
    req: Request, res: Response, next : NextFunction
) => {
    const { name, email, password} = req.body;
    try {
        const user = await registerUserService(name, email, password)
        res.status(201).json(user)
    } catch (error) {
        next(error)
    }
}