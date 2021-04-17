import { Router } from 'express';

import IncomeRoutes from './Income';

const routes = Router();

routes.use('/income', IncomeRoutes);

export default routes;
