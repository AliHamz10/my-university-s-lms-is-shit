import { createApp } from './app.js';
import { env } from './config/env.js';
import mongoose from 'mongoose';

async function start() {
  const app = createApp();

  try {
    await mongoose.connect(env.mongoUri);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.warn('MongoDB connection failed. Continuing without DB.', err);
  }

  app.listen(env.port, () => {
    console.log(`Server listening on http://localhost:${env.port}`);
  });
}

start();
