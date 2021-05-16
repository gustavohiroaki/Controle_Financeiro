import { Router } from 'express';

import BalanceController from './controller/BalanceController';

const routes = Router();

routes.get('/', BalanceController.index);

export default routes;
