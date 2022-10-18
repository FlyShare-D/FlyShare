import { NextFunction, Request, Response } from 'express';

export type ErrObject = {
  log: string,
  status: number,
  message: { err: string }
};

export type Middleware = {
  getProjects: (req: Request, res: Response, next: NextFunction) => void;
};
