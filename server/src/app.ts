import express from 'express';
import cors from 'cors';
import healthRouter from './routes/health.js';

export function createApp() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.use('/api', healthRouter);

  app.get('/', (_req, res) => {
    res.send('API is running');
  });

  return app;
}
