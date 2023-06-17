import express from 'express';
import authRoute from '../routes/authRoute.js';
import usersRoute from '../routes/usersRoute.js';
import roomsRoute from '../routes/roomsRoute.js';
import hotelsRoute from '../routes/hotelRoute.js';

const app = express();
export default app;

export  function configureRoutes(app) {
  app.use(express.json());
  app.use('/api/auth', authRoute);
  app.use('/api/users', usersRoute);
  app.use('/api/hotels', hotelsRoute);
  app.use('/api/rooms', roomsRoute);
}
