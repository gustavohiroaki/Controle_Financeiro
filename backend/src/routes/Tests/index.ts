import { Router } from 'express';

import TestController from './controller/TestController';

const routes = Router();

routes.post('/', TestController.create);
// routes.post('/', OutcomeController.create);

export default routes;
