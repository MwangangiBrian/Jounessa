// error handling

import { Request, Response, NextFunction } from 'express';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err.stack);
  res.status(500).json({
    status: 500,
    message: 'Something went wrong',
    error: err.message,
  });
};
