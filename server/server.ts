// import 'dotenv/config';

import express, { NextFunction, Request, Response } from 'express';
import path from 'path';

import tripRouter from './routes/tripApi';
import userRouter from './routes/userApi';
// import { GlobalError } from '../types'
import { ErrObject } from './types';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve bundle.js file
app.get(
  '/bundle.js',
  (req: Request, res: Response) => res.status(200).sendFile(path.join(__dirname, '../dist/bundle.js')),
);

// Serve base HTML file
app.get(
  '*',
  (req: Request, res: Response) => res.status(200).sendFile(path.join(__dirname, '../dist/index.html')),
);

// Routes for user and trips
app.use('/trip', tripRouter);

// unknown route handler
app.use((req: Request, res: Response) => {
  const defaultErr = {
    log: '404 Not Found, cannot get to route',
    status: 404,
    message: '404 Not Found, cannot get to route',
  };
  const errorObj = { ...defaultErr };
  console.log(errorObj.log);
  return (res.status(errorObj.status).json(errorObj.message));
});
// global error handler
app.use((err: ErrObject, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  return next(res.status(errorObj.status).json(errorObj.message));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port: http://localhost:${PORT}`);
});

export default app;
