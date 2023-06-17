import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const app = express();
export default app;



// ENV CONFIGURATION
dotenv.config();
const MONGO_URI = process.env.MONGO_URI;

// DATABASE CONNECTION
export const connect = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB.');
  } catch (err) {
    throw err;
  }
};

export const checkConnection = mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});


