import express, { Request, Response, Router } from 'express';

import tripController from '../controllers/tripController';
import userController from '../controllers/userController';

const router: Router = express.Router();

/**
 * Route to add a flight to the Flight table in DB
 * Request object example:
 *    {
 *      "destination": "Germany",
 *      "flightName": "Delta",
 *      "price": 1000}
 *    }
 */
router.post(
  '/flight',
  userController.getUserId,
  tripController.addFlight,
  (req: Request, res: Response) => res.status(201).send(res.locals.flight),
);

/**
 * Route to add a hotel to the Hotel table in DB
 * Request object example:
 *    {
 *      "destination": "Germany",
 *      "hotelName": "Hilton",
 *      "price": 1000}
 *    }
 */
router.post(
  '/hotel',
  userController.getUserId,
  tripController.addHotel,
  (req: Request, res: Response) => res.status(201).send(res.locals.hotel),
);

/**
 * Route to add a hotel to the Hotel table in DB
 * Request object example:
 *    {
 *      "destination": "Germany",
 *      "eventDetails": "Sky Diving",
 *      "price": 1000}
 *    }
 */
router.post(
  '/event',
  userController.getUserId,
  tripController.addEvent,
  (req: Request, res: Response) => res.status(201).send(res.locals.event),
);

export default router;
