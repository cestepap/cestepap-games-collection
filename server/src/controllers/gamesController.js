import { Request, Response } from 'express';

import pool from '../database.js';

export const getGames = async (req, res) => {
	const [games] = await pool.query('SELECT * FROM games');
	res.json(games);
};

export const getGame = async (req, res) => {
	const { id } = req.params;
	const games = await pool.query('SELECT * FROM games WHERE id = ?', [id]);
	if (games.length > 0) {
		const game = games.shift();
		return res.json(game);
	}

	res.status(404).json({ message: 'game not found' });
};

export const createGame = async (
	req,
	res
) => {
	await pool.query('INSERT INTO games set ?', [req.body]);
	res.json({ message: 'game created' });
};

export const updateGame = async (req, res) => {
	const { id } = req.params;
	const game = await pool.query('UPDATE games set ? WHERE id = ?', [
		req.body,
		id,
	]);
	res.json({ message: 'game updated' });
};

export const deleteGame = async (
	req,
	res
) => {
	const { id } = req.params;
	const game = await pool.query('DELETE FROM games WHERE id = ?', [id]);
	res.json({ message: 'game deleted' });
};
