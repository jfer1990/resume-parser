import cors from 'cors';
import express from 'express';
import dbConnection from '../db/config.js';
import candidateRoute from '../routes/candidates.js';
import reviewerRoute from '../routes/reviewers.js';

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // connect db
    this.connectDB();

    // Middlewares
    this.middlewares();

    // Rutas de mi app
    this.routes();
  }

  routes() {
    this.app.use('/api/reviewers', reviewerRoute);
    this.app.use('/api/students', candidateRoute);
  }

  middlewares() {
    this.app.use(express.static('public'));
    this.app.use(cors());

    // Lectura y parseo
    this.app.use(express.json());
  }

  async connectDB() {
    await dbConnection();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('servidor corriento en puerto ', this.port);
    });
  }
}

export default Server;
