import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { getConnectionManager } from 'typeorm';

import { Income } from '../../../entities/Income';

class IncomeController {
    public async index(req: Request, res: Response) {
        const incomeRepository = getConnectionManager()
            .get(process.env.NODE_ENV)
            .getRepository(Income);

        const incomeTransactions = await incomeRepository.find();

        return res.json(incomeTransactions);
    }

    public async create(req: Request, res: Response) {
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
    }
}

export default new IncomeController();
