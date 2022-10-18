import express, { Request, Response, Router } from 'express';
import voteController from '../controllers/voteController';
import userController from '../controllers/userController';
const router: Router = express.Router();


router.post('/flight', userController.getUserId, voteController.voteFlight, (req: Request, res: Response) =>
  res.status(204).send(res.locals.flightVotes)
)
router.post('/hotel', userController.getUserId, voteController.voteHotel, (req: Request, res: Response) =>
  res.status(204).send(res.locals.hotelVotes)
)
router.post('/event', userController.getUserId, voteController.voteEvent, (req: Request, res: Response) =>
  res.status(204).send(res.locals.eventVotes)
)

export default router;