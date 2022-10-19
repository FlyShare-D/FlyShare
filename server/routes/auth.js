import express from 'express';

import passport, { authController } from '../controllers/authController';

import userController from '../controllers/userController';


const router = express.Router();

router.get('/', authController.isLoggedIn, userController.getUserId, (req, res) => {
  console.log(req.body);
  return res.status(200);
});

router.get('/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

router.get('/google/callback',
  passport.authenticate('google', {
    // successRedirect: '../../',
    failureRedirect: '/failure',
  }),
  userController.getUserId,
  userController.addUser,
  (req, res) =>{
    console.log('request: ', req.user)
    res.cookie('email', req.user.email);
    res.cookie('name', req.user.given_name);
    res.cookie('loggedin', true);
    return res.redirect('../../');
  },
);

router.post('/logout', (req, res) => {
  req.logout();
  return res.redirect('../../');
});

router.get('/failure', (req, res) =>{
  res.send('unsuccessful login...');
});

export default router;
