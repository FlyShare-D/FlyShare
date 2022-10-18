import { NextFunction, Request, Response } from 'express';

import db from '../models/sqlModel';

export default {
  getUserId: async (req: any, res: Response, next: NextFunction) => {
    console.log('userController.getUserId');
    // const email = req.user.emails[0].value;
    const email = 'chunhao@gmail.com'; // MLCK need to extract from req object passport

    const queryString = `
    SELECT userId FROM public.user
    WHERE email=$1
    `;
    const params = [email];

    try {
      const result = await db.query(queryString, params);
      res.locals.userId = result.rows[0].userid;
      return next();
    } catch (err) {
      return next({
        log: `error in getUserId: ${err}`,
        status: 500,
        message: 'error occurred in getUserId middleware function',
      });
    }
  },
};
