import express from 'express';
import knex from './db/conn';

import UsersController from './controller/UsersController';


const routes = express.Router();
const usersController = new UsersController();


//Users
routes.get('/users', usersController.index);
routes.post('/users', usersController.create);


export default routes;






