import { NextFunction, Request, Response } from 'express';

import db from '../models/sqlModel';

export default {
  getUserId: async (req: any, res: Response, next: NextFunction) => {
    console.log('userController.getUserId');
    console.log('req', req.body);
    // const { email } = req.body;
    const email = 'chunhao@gmail.com';
    console.log('email', email);
    // const { email } = req.body; // MLCK need to extract from req object passport

    const queryString = `
    SELECT user_id FROM public.user
    WHERE email=$1
    `;
    const params = [email];

    try {
      const result = await db.query(queryString, params);
      res.locals.userId = result.rows[0].user_id;
      return next();
    } catch (err) {
      return next({
        log: `error in getUserId: ${err}`,
        status: 500,
        message: 'error occurred in getUserId middleware function',
      });
    }
  },
  addUser: async (req: any, res: Response, next: NextFunction) => {
    // const req.User.email;
    const email = 'mlamchamkee@gmail.com'

    const queryString = `
    INSERT INTO public.user (email)
    VALUES ($1)
    RETURNING (user_id, email)
    `;
    const params = [email];

    if (res.locals.userId !== undefined)
    {
      try {
      const result = await db.query(queryString, params);
      // console.log('result', result);
      res.locals.flights = result.rows;
      return next();
      } catch (err) {
        return next({
          log: `error in getUserId: ${err}`,
          status: 500,
          message: 'error occurred in addUser middleware function',
        });
      }
    }
  },
  getFlights: async (req: any, res: Response, next: NextFunction) => {
    console.log('userController.getFlights');
    // console.log('req', req.body);
    const userID = res.locals.userId;

    const queryString = `
    SELECT * FROM public.flight
    WHERE user_id=$1
    `;

    const params = [userID];

    try {
      const result = await db.query(queryString, params);
      // console.log('result', result);
      res.locals.flights = result.rows;
      return next();
    } catch (err) {
      return next({
        log: `error in getUserId: ${err}`,
        status: 500,
        message: 'error occurred in getFlights middleware function',
      });
    }
  },
  getHotels: async (req: any, res: Response, next: NextFunction) => {
    console.log('userController.getHotels');
    // console.log('req', req.body);
    const userID = res.locals.userId;

    const queryString = `
    SELECT * FROM public.hotel
    WHERE user_id=$1
    `;

    const params = [userID];

    try {
      const result = await db.query(queryString, params);
      // console.log('result', result);
      res.locals.hotels = result.rows;
      return next();
    } catch (err) {
      return next({
        log: `error in getHotels: ${err}`,
        status: 500,
        message: 'error occurred in getHotels middleware function',
      });
    }
  },
  getEvents: async (req: any, res: Response, next: NextFunction) => {
    console.log('userController.getHotels');
    // console.log('req', req.body);
    const userID = res.locals.userId;

    const queryString = `
    SELECT * FROM public.event
    WHERE user_id=$1
    `;

    const params = [userID];

    try {
      const result = await db.query(queryString, params);
      // console.log('result', result);
      res.locals.events = result.rows;
      return next();
    } catch (err) {
      return next({
        log: `error in getEvents: ${err}`,
        status: 500,
        message: 'error occurred in getEvents middleware function',
      });
    }
  },

};
