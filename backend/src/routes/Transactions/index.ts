import { Router } from 'express';
import TransactionController from './controller/TransactionController';

const routes = Router();

routes.get('/', TransactionController.index);

export default routes;
