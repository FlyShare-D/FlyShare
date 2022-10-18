import express, { Request, Response, Router } from 'express';
import voteController from '../controllers/voteController';
import userCcontroller from '../controllers/userCcontroller';
const router: Router = express.Router();


router.post('/flight', userCcontroller.getUserId, voteController.voteFlight, (req: Request, res: Response) =>
  res.status(204).send(res.locals.flightVotes)
)
router.post('/hotel', userCcontroller.getUserId, voteController.voteHotel, (req: Request, res: Response) =>
  res.status(204).send(res.locals.hotelVotes)
)
router.post('/event', userCcontroller.getUserId, voteController.voteEvent, (req: Request, res: Response) =>
  res.status(204).send(res.locals.eventVotes)
)

export default router;