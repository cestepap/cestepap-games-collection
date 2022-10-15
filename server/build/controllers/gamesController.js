"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
exports.getGames = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [games] = yield database_1.default.query('SELECT * FROM games');
    res.json(games);
});
exports.getGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const games = yield database_1.default.query('SELECT * FROM games WHERE id = ?', [id]);
    if (games.length > 0) {
        const game = games.shift();
        return res.json(game);
    }
    res.status(404).json({ message: 'game not found' });
});
exports.createGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.default.query('INSERT INTO games set ?', [req.body]);
    res.json({ message: 'game created' });
});
exports.updateGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const game = yield database_1.default.query('UPDATE games set ? WHERE id = ?', [
        req.body,
        id,
    ]);
    res.json({ message: 'game updated' });
});
exports.deleteGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const game = yield database_1.default.query('DELETE FROM games WHERE id = ?', [id]);
    res.json({ message: 'game deleted' });
});
