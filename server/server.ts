// import 'dotenv/config';

import express, { NextFunction, Request, Response } from 'express';

import { IGetUserAuthInfoRequest } from './types';
import authRoutes from './routes/auth'
import path from 'path';
const passport = require('passport');
const session = require('express-session');
// import { GlobalError } from '../types'
// require('./controllers/authController')
import passport, {authController} from './controllers/authController';


const app = express();
const PORT = 3000;

app.use(session({secret: 'secret'}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req: Request, res: Response) => {
  res.send('<a href="/auth/google">Login</a>');
});


app.get('/homepage', authController.isLoggedIn, (req: Request, res:Response) => {
  res.send('successful login!')
})


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
