import { Router } from 'express';

import IncomeRoutes from './Income';
import OutcomeRoutes from './Outcome';
import BalanceRoutes from './Balance';
import Tests from './Tests';

const routes = Router();

routes.use('/income', IncomeRoutes);
routes.use('/outcome', OutcomeRoutes);
routes.use('/balance', BalanceRoutes);
routes.use('/test', Tests);

export default routes;
