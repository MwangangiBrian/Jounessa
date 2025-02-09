import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

// import { User } from "../models/userModel";

declare global {
    namespace Express {
        interface Request {
            user?: { userId: string };
        }
    }
}


export const authTokenMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader)return res.status(401).json({ message: 'No token provided' });

    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!, (err, decoded) => {
        if (err) {
          if (err.name === 'TokenExpiredError') {
            return res.status(403).json({ message: 'Token expired' });
          }
          if (err.name === 'JsonWebTokenError') {
            return res.status(403).json({ message: 'Invalid token' });
          }
          return res.status(403).json({ message: 'Failed to authenticate token' });
        }
        req.user = decoded as {userId : string};
        next();
    });
}