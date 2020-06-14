import express from 'express';
import knex from './db/conn';

import UsersController from './controller/UsersController';
import StarsController from './controller/StarsController';
import PointsController from './controller/PointsController'

const routes = express.Router();
const usersController = new UsersController();
const starsController = new StarsController();
const pointsController = new PointsController();

//Points
routes.get('/points', pointsController.index);
routes.post('/points', pointsController.create);

//Users
routes.get('/users', usersController.index);
routes.post('/users', usersController.create);

//Stars
routes.get('/stars',starsController.index);

export default routes;






