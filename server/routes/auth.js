// const express = require('express');
import express from 'express';
const router = express.Router();


import passport, {authController} from '../controllers/authController'


router.get('/', authController.isLoggedIn, (req, res) =>{
    return res.status(200);
})

router.get('/google',
  passport.authenticate('google', {scope: ['email', 'profile'] })
)

router.get('/google/callback',
  passport.authenticate('google', {
    successRedirect: '../../homepage',
    failureRedirect: '/failure'
  }),
)

router.get('/failure', (req, res) =>{
    res.send('unsuccessful login...')
  })
  



export default router;