import express from 'express';
import dotenv from 'dotenv';
import { connect } from './DBConnection.js';
import { configureRoutes } from './Middlewares.js';

dotenv.config();
const PORT_NO = process.env.PORT_NO;

const app = express();

// Configure routes
configureRoutes(app);

export function startServer() {
  connect();
  app.listen(PORT_NO, () => {
    console.log(`Connected to backend:port ${PORT_NO}`);
  });
}