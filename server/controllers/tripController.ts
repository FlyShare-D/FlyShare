import { NextFunction, Request, Response } from 'express';

import db from '../models/sqlModel';

export default {
  addFlight: async (req: Request, res: Response, next: NextFunction) => {
    // console.log('tripController.addFlight')
    const { destination, flightName, price } = req.body;
    const { userId } = res.locals;

    const queryString = `
      INSERT INTO public.flight (user_id, destination, flight_name, price, votes)
      VALUES ($1, $2, $3, $4, 0)
      RETURNING (user_id, destination, flight_name, price, votes)
    `;
    const params = [userId, destination, flightName, price];

    try {
      const result = await db.query(queryString, params);
      res.locals.flight = result.rows;
      // console.log('Flight Added!', res.locals.flight);
      return next();
    } catch (err) {
      return next({
        log: `error in addFlight: ${err}`,
        status: 500,
        message: 'error occurred in addFlight middleware function',
      });
    }
  },
  addHotel: async (req: Request, res: Response, next: NextFunction) => {
    // console.log('tripController.addHotel')
    const { destination, hotelName, price } = req.body;
    const { userId } = res.locals;

    const queryString = `
    INSERT INTO public.hotel (user_id, destination, hotel_name, price, votes)
    VALUES ($1, $2, $3, $4, 0)
    RETURNING (user_id, destination, hotel_name, price, votes)
  `;
    const params = [userId, destination, hotelName, price];

    try {
      const result = await db.query(queryString, params);
      res.locals.hotel = result.rows;
      // console.log('Hotel Added!', res.locals.hotel);
      return next();
    } catch (err) {
      return next({
        log: `error in addHotel: ${err}`,
        status: 500,
        message: 'error occurred in addHotel middleware function',
      });
    }
  },
  addEvent: async (req: Request, res: Response, next: NextFunction) => {
    // console.log('tripController.addEvent')
    const { destination, eventDetails, price } = req.body;
    const { userId } = res.locals;

    const queryString = `
    INSERT INTO public.event (user_id, destination, event_details, price, votes)
    VALUES ($1, $2, $3, $4, 0)
    RETURNING (user_id, destination, event_details, price, votes)
    `;
    const params = [userId, destination, eventDetails, price];

    try {
      const result = await db.query(queryString, params);
      res.locals.event = result.rows;
      // console.log('Event Added!', res.locals.flight);
      return next();
    } catch (err) {
      return next({
        log: `error in addEvent: ${err}`,
        status: 500,
        message: 'error occurred in addEvent middleware function',
      });
    }
  },
};
