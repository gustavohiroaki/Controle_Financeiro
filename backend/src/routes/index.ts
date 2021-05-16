import { Router } from 'express';

import IncomeRoutes from './Income';
import OutcomeRoutes from './Outcome';

const routes = Router();

routes.use('/income', IncomeRoutes);
routes.use('/outcome', OutcomeRoutes);

export default routes;
