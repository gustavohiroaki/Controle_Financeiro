import { Router } from 'express';

import IncomeController from './controller/IncomeController';

const routes = Router();

routes.get('/', IncomeController.index);
routes.post('/', IncomeController.create);

export default routes;
