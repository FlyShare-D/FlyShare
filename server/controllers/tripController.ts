import { NextFunction, Request, Response } from 'express';

import db from '../models/sqlModel';

export default {
  addFlight: async (req: Request, res: Response, next: NextFunction) => {
    // console.log('tripController.addFlight')
    const { destination, description, price } = req.body;
    const userId = res.locals.userId;

    const queryString = `
      INSERT INTO public.Flight (UserId, Destination, FlightName, Price, Votes)
      VALUES ($1, $2, $3, $4, 0)
      RETURNING (UserId, Destination, FlightName, Price, Votes)
    `
    const params = [userId, destination, description, price]

    try {
      const result = await db.query(queryString, params);
      res.locals.flight = result.rows;
      // console.log('Flight Added!', res.locals.flight);
      return next();
    }
    catch(err) {
      return next({
        log: `error in addFlight: ${err}`,
        status: 500,
        message: 'error occurred in addFlight middleware function'
      });
    }   


  },
  addHotel: async (req: Request, res: Response, next: NextFunction) => {

  },
  addEvent: async (req: Request, res: Response, next: NextFunction) => {

  },

}