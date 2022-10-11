import { Request, Response } from 'express';

import pool from '../database';

export const index = async (req: Request, res: Response) => {
	const [result] = await pool.query('SELECT * FROM games');   
	res.json(result);
};
