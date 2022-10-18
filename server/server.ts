// import 'dotenv/config';

import express, { NextFunction, Request, Response } from 'express';

import { IGetUserAuthInfoRequest } from './types';
// import authRoutes from './routes/auth'
import path from 'path';
const passport = require('passport');
const session = require('express-session');
// import { GlobalError } from '../types'
require('./controllers/authController')



function isLoggedIn(req:IGetUserAuthInfoRequest, res:Response, next: NextFunction){
  req.user ? next() : res.sendStatus(401);
}



const app = express();
const PORT = 3000;

app.use(session({secret: 'secret'}));

app.use(passport.initialize());
app.use(passport.session());

// app.use('/auth', authRoutes);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req: Request, res: Response) => {
  res.send('<a href="/auth/google">Login</a>');
});

app.get('/auth/google',
  passport.authenticate('google', {scope: ['email', 'profile'] })
)


app.get('/google/callback',
  passport.authenticate('google', {
    successRedirecet: '/homepage',
    failureReirect: '/auth/failure'
  })
)

app.get('/auth/failure', (req: Request, res:Response) =>{
  res.send('unsuccessful login...')
})

app.get('/homepage', isLoggedIn, (req: Request, res:Response) => {
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
