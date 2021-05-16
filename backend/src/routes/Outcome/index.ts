import { Router } from 'express';

import OutcomeController from './controller/OutcomeController';

const routes = Router();

routes.get('/', OutcomeController.index);
routes.post('/', OutcomeController.create);

export default routes;
