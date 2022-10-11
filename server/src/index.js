import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { PORT } from './config';

import gamesRoutes from './routes/gamesRoutes';

class Server {
	app;

	constructor() {
		this.app = express();
		this.config();
		this.routes();
	}

	config() {
		// this.app.set('port', process.env.PORT || 3000);
		this.app.use(morgan('dev'));
		this.app.use(cors());
		this.app.use(express.json());
		// por si queremos enviar desde formulario html
		this.app.use(express.urlencoded({ extended: false }));
	}

	routes() {
		this.app.use('/api/games', gamesRoutes);

		this.app.use((req, res, next) => {
			res.status(404).json({
				message: 'ruta not found',
			});
		});
	}

	start() {
		this.app.listen(PORT);
		console.log('Server running on port', PORT);
	}
}

const server = new Server();
server.start();

// console.log(pool);
