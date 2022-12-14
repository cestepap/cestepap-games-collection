"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesController_1 = require("../controllers/gamesController");
const router = (0, express_1.Router)();
router.get('/', gamesController_1.getGames);
router.get('/:id', gamesController_1.getGame);
router.post('/', gamesController_1.createGame);
router.put('/:id', gamesController_1.updateGame);
router.delete('/:id', gamesController_1.deleteGame);
exports.default = router;
