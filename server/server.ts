// import 'dotenv/config';

import express, { NextFunction, Request, Response } from 'express';

import path from 'path';
// import { GlobalError } from '../types'

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve bundle.js file
app.get('/bundle.js', (req: Request, res: Response) => {
  return res.status(200).sendFile(path.join(__dirname, '../dist/bundle.js'));
});

// Serve base HTML file
app.get('*', (req: Request, res: Response) => {
  return res.status(200).sendFile(path.join(__dirname, '../dist/index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port: http://localhost:${PORT}`);
});

export default app;
