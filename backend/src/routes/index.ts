import { Router } from 'express';

import IncomeRoutes from './Income';
import OutcomeRoutes from './Outcome';
import BalanceRoutes from './Balance';
import TransactionsRoutes from './Transactions';
import CategoryRoutes from './Category';
import Tests from './Tests';

const routes = Router();

routes.use('/income', IncomeRoutes);
routes.use('/outcome', OutcomeRoutes);
routes.use('/balance', BalanceRoutes);
routes.use('/transactions', TransactionsRoutes);
routes.use('/category', CategoryRoutes);
routes.use('/test', Tests);

export default routes;
