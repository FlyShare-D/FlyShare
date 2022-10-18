import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

// Route to add user to the SQL DB upon signing in to app for first time
router.post('/:email', (req, res) => {
  res.status(200).send('User added!');
});

// Route to get all flights, hotels, and events for a user
router.get('/:email', (req, res) => {
  res.status(200).json(res.locals.trips);
});

export default router;
