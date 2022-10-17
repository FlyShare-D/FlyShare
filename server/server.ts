// import 'dotenv/config';

import express, { NextFunction, Request, Response } from 'express';
import authRoutes from './routes/auth'
import path from 'path';
// const passport = require('passport');
// import { GlobalError } from '../types'
require('./controllers/authController')

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(passport.initialize());
// app.use(passport.session());
app.use('/auth', authRoutes);
// app.get('/login', (req: Request, res: Response) => {
//   passport.authenticate
// })

// Serve bundle.js file
app.get('/bundle.js', (req: Request, res: Response) => {
  return res.status(200).sendFile(path.join(__dirname, '../dist/bundle.js'));
});

app.get('/homepage', (req:Request, res: Response) =>{
  res.send('Hello');
})

// Serve base HTML file
app.get('*', (req: Request, res: Response) => {
  return res.status(200).sendFile(path.join(__dirname, '../dist/index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port: http://localhost:${PORT}`);
});

export default app;
