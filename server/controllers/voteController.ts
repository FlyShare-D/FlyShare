import { NextFunction, Request, Response } from 'express';

import db from '../models/sqlModel';

export default {
  voteFlight: async (req: Request, res: Response, next: NextFunction) => {
    const { destination, flightName, vote, } = req.body
    const { userId } = res.locals
    const queryString = `
      UPDATE public.Flight
      SET votes = $4
      WHERE user_id = $1 AND destination = $2 AND flight_name = $3
       RETURNING (votes)
    `;
    const params = [userId, destination, flightName, vote]
    try {
      const result = await db.query(queryString, params)
      console.log('result in voteflight: ', result.rows[0])
      res.locals.flightVotes = result.rows[0];
      // console.log('Flight Added!', res.locals.flight);
      return next();
    } catch (err) {
      return next({
        log: `error in vote flight: ${err}`,
        status: 500,
        message: 'error occurred in vote flight middleware function',
      });
    }
  },
  voteHotel: async (req: Request, res: Response, next: NextFunction) => {
    const { vote, destination, hotelName } = req.body
    const { userId } = res.locals
    const queryString = `
      UPDATE public.Hotel
      SET votes = $4
      WHERE user_id = $1 AND destination = $2 AND hotel_name = $3
       RETURNING (votes)
    `;
    const params = [userId, destination, hotelName, vote]
    try {
      const result = await db.query(queryString, params)
      console.log('result in vote hotel: ', result)
      res.locals.hotelVotes = result.rows[0];
      return next();
    } catch (err) {
      return next({
        log: `error in vote hotel: ${err}`,
        status: 500,
        message: 'error occurred in vote hotel middleware function',
      });
    }
  },

  voteEvent: async (req: Request, res: Response, next: NextFunction) => {
    const { vote, destination, eventDetails } = req.body
    const { userId } = res.locals
    const queryString = `
      UPDATE public.Hotel
      SET votes = $4
      WHERE user_id = $1 AND destination = $2 AND event_details = $3
       RETURNING (votes)
    `;
    const params = [userId, destination, eventDetails, vote]
    try {
      const result = await db.query(queryString, params)
      console.log('result in vote : ', result)
      res.locals.eventVotes = result.rows[0];
      return next();
    } catch (err) {
      return next({
        log: `error in vote event: ${err}`,
        status: 500,
        message: 'error occurred in vote event middleware function',
      });
    }
  },

};
