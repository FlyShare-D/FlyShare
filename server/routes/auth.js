import { authController } from '../controllers/authController';
const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('should redirect to google login');
    passport.authenticate('google', {scope: ['email', 'profile']});
    
})

export default router;