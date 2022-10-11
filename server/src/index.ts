import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import {
	PORT,
	DB_HOST,
	DB_PORT,
	DB_DATABASE,
	DB_USER,
	DB_PASSWORD,
} from './config';

import gamesRoutes from './routes/gamesRoutes';

class Server {
	public app: Application;

	constructor() {
		this.app = express();
		this.config();
		this.routes();
	}

	config(): void {
		// this.app.set('port', process.env.PORT || 3000);
		this.app.use(morgan('dev'));
		this.app.use(cors());
		this.app.use(express.json());
		// por si queremos enviar desde formulario html
		this.app.use(express.urlencoded({ extended: false }));
	}

	routes(): void {
		this.app.use('/api/games', gamesRoutes);

		this.app.use((req, res, next) => {
			res.status(404).json({
				message: 'ruta not found',
			});
		});
	}

	start(): void {
		this.app.listen(PORT);
		console.log('Server running on port', PORT);
	}
}

const server = new Server();
server.start();

// console.log(pool);
