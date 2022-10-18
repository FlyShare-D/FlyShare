import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

// Route to add a flight to the Flight table in DB
router.post('/flight', (req, res) => {
    res.status(200).send('Flight submitted!');
});

// Route to add a hotel to the Hotel table in DB
router.post('/hotel', (req, res) => {
  res.status(200).send('Hotel submitted!');
});

// Route to add an event to the Event table in DB
router.post('/event', (req, res) => {
  res.status(200).send('Event submitted!');
});

export default router;
