import { NextFunction, Request, Response } from 'express';

import db from '../models/sqlModel';

export default {
  getUserId: async (req: any, res: Response, next: NextFunction) => {
    // console.log('userController.getUserId');
    let email;
    if (req.user) email = req.user.email;
    // console.log('email', email);

    const queryString = `
    SELECT user_id FROM public.user
    WHERE email=$1
    `;
    const params = [email];

    try {
      const result = await db.query(queryString, params);
      // console.log('result', result)
      res.locals.userId = result.rows[0]?.user_id;
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
    const { email } = req.user;

    const queryString = `
    INSERT INTO public.user (email)
    VALUES ($1)
    RETURNING (user_id)
    `;
    const params = [email];

    // console.log('RES LOCALS ', res.locals)
    if (res.locals.userId === undefined)
    {
      try {
      const result = await db.query(queryString, params);
      // console.log('Adding User', result);
      res.locals.userId = result.rows[0].user_id;
      return next();
      } catch (err) {
        return next({
          log: `error in getUserId: ${err}`,
          status: 500,
          message: 'error occurred in addUser middleware function',
        });
      }
    }
    return next();
  },
  getFlights: async (req: any, res: Response, next: NextFunction) => {
    console.log('userController.getFlights');
    const userId = res.locals.userId;

    const queryString = `
    SELECT * FROM public.flight
    WHERE user_id=$1
    `;
    const params = [userId];

    try {
      const result = await db.query(queryString, params);
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
    const userId = res.locals.userId;

    const queryString = `
    SELECT * FROM public.hotel
    WHERE user_id=$1
    `;
    const params = [userId];

    try {
      const result = await db.query(queryString, params);
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
    console.log('userController.getEvents');
    const userId = res.locals.userId;

    const queryString = `
    SELECT * FROM public.event
    WHERE user_id=$1
    `;
    const params = [userId];

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
