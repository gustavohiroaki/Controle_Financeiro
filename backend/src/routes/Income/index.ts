import { Request, Response, Router } from 'express';
import { getConnectionManager } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { Income } from '../../entities/Income';

const routes = Router();

routes.get('/', async (req: Request, res: Response) => {
    const incomeRepository = getConnectionManager()
        .get(process.env.NODE_ENV)
        .getRepository(Income);

    const incomeTransactions = await incomeRepository.find();

    return res.json(incomeTransactions);
});

routes.post('/', async (req: Request, res: Response) => {
    const { name, value } = req.body;
    const incomeRepository = getConnectionManager()
        .get(process.env.NODE_ENV)
        .getRepository(Income);

    const newTransaction = new Income();

    try {
        Object.assign(newTransaction, {
            id: uuidv4(),
            name,
            value,
        });

        const response = await incomeRepository.save(newTransaction);

        return res.json(response);
    } catch (err) {
        return res.status(400).json(err);
    }
});

export default routes;
