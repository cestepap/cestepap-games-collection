import mysql from 'mysql2/promise';

// import keys from './keys';

import { DB_HOST, DB_PORT, DB_DATABASE, DB_USER, DB_PASSWORD } from './config';

const pool = mysql.createPool({
	host: DB_HOST,
	user: DB_USER,
	password: DB_PASSWORD,
	port: DB_PORT,
	database: DB_DATABASE,
});

export default pool;
