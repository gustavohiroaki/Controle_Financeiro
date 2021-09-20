import { Router } from 'express';

import CategoryController from './controller/CategoryController';

const routes = Router();

routes.get('/', CategoryController.index);
routes.post('/', CategoryController.create);

export default routes;
