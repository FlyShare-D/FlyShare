import express, { Request, Response, Router } from 'express';
import voteController from '../controllers/voteController';
const router: Router = express.Router();


router.post('/flight', voteController.voteFlight, (req: Request, res: Response) =>
  res.status(204).send(res.locals.flightVotes)
)
router.post('/hotel', voteController.voteHotel, (req: Request, res: Response) =>
  res.status(204).send(res.locals.hotelVotes)
)
router.post('/event', voteController.voteEvent, (req: Request, res: Response) =>
  res.status(204).send(res.locals.eventVotes)
)

export default router;