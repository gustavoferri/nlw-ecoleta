import express, { response } from 'express';

import PointsController from  './controllers/PointsController';
import ItemsController from './controllers/ItemsControllers';

// Index, show, create, update, delete

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create);
routes.get('/points/', pointsController.index);
routes.get('/points/:id', pointsController.show);


export default routes;

// Service Pattern
// Repository Pattern (Data Mapper)