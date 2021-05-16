import { Router } from 'express';

import IncomeRoutes from './Income';
import OutcomeRoutes from './Outcome';
import BalanceRoutes from './Balance';

const routes = Router();

routes.use('/income', IncomeRoutes);
routes.use('/outcome', OutcomeRoutes);
routes.use('/balance', BalanceRoutes);

export default routes;
