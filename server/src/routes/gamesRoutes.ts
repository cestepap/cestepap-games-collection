import { Router } from 'express';

import {
	getGames,
	getGame,
	createGame,
	updateGame,
	deleteGame,
} from '../controllers/gamesController';

const router = Router();

router.get('/', getGames);
router.get('/:id', getGame);
router.post('/', createGame);
router.put('/:id', updateGame);
router.delete('/:id', deleteGame);

export default router;
