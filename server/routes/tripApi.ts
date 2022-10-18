import express, { Request, Response, Router } from 'express';

import tripController from '../controllers/tripController';
import userCcontroller from '../controllers/userCcontroller';

const router: Router = express.Router();

// Route to add a flight to the Flight table in DB
router.post(
  '/flight',
  userCcontroller.getUserId,
  tripController.addFlight,
  (req: Request, res: Response) => res.status(201).send(res.locals.flight),
);

// Route to add a hotel to the Hotel table in DB
router.post(
  '/hotel',
  userCcontroller.getUserId,
  tripController.addHotel,
  (req: Request, res: Response) => res.status(201).send(res.locals.hotel),
);

// Route to add an event to the Event table in DB
router.post(
  '/event',
  userCcontroller.getUserId,
  tripController.addEvent,
  (req: Request, res: Response) => res.status(201).send(res.locals.event),
);

export default router;
