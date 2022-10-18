import express, { Request, Response, Router } from 'express';

import userController from '../controllers/userController';

const router: Router = express.Router();

// Route to add user to the SQL DB upon signing in to app for first time
router.post('/:email', (req, res) => {
  res.status(200).send('User added!');
});

// Route to get all flights, hotels, and events for a user
router.get('/', userController.getUserId, userController.getFlights, userController.getHotels, userController.getEvents, (req, res) => {
  res.status(200).json(res.locals.events);
});

export default router;
