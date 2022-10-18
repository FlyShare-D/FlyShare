import { NextFunction, Request, Response } from 'express';

import db from '../models/sqlModel';

export default {
  voteFlight: async (req: Request, res: Response, next: NextFunction) => {
    const {vote, userId, destination, flightName} = req.body
    const queryString = `
      UPDATE public.Flight
      SET Votes = ?
      WHERE UserID = ? AND destination = ? flightName = ?
    `;
    const params = [vote, userId, destination, flightName]
    try {
      const result = await db.query(queryString, params)
      console.log('result in voteflight: ', result)
      res.locals.flightVotes = result.rows;
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
    const { vote, userId, destination, hotelName } = req.body
    const queryString = `
      UPDATE public.Hotel
      SET Votes = ?
      WHERE UserID = ? AND destination = ? hotelName = ?
    `;
    const params = [vote, userId, destination, hotelName]
    try {
      const result = await db.query(queryString, params)
      console.log('result in voteflight: ', result)
      res.locals.hotelVotes = result.rows;
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
    const { vote, userId, destination, eventDetails } = req.body
    const queryString = `
      UPDATE public.Event
      SET Votes = ?
      WHERE UserID = ? AND destination = ? AND eventDetails = ?
    `;
    const params = [vote, userId, destination, eventDetails]
    try {
      const result = await db.query(queryString, params)
      console.log('result in voteflight: ', result)
      res.locals.eventVotes = result.rows;
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
